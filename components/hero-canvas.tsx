"use client"

import { useEffect, useRef } from "react"

const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_t;
uniform vec2 u_mouse;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}

float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 3; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 p = uv * vec2(u_res.x / u_res.y, 1.0);
  vec2 drift = vec2(u_t * 0.015, -u_t * 0.01) + u_mouse * 0.06;
  float n = fbm(p * 1.6 + drift + fbm(p * 2.2 - drift) * 0.6);
  float y = fbm(p * 1.1 - drift * 1.4 + 3.7);

  vec3 white = vec3(1.0);
  vec3 green = vec3(0.855, 0.918, 0.894);
  vec3 gold  = vec3(0.98, 0.93, 0.83);

  vec3 col = mix(white, green, smoothstep(0.35, 0.8, n) * 0.6);
  col = mix(col, gold, smoothstep(0.68, 0.95, y) * 0.3);

  float edge = smoothstep(0.0, 0.18, uv.y) * smoothstep(1.0, 0.82, uv.y);
  col = mix(white, col, edge);
  gl_FragColor = vec4(col, 1.0);
}
`

const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`

/* Ambient "light through leaves" wash behind the hero. Progressive enhancement:
   skipped under reduced motion or without WebGL; paused while off-screen. */
export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const gl = canvas.getContext("webgl", { antialias: false, alpha: false })
    if (!gl) return

    const compile = (type: number, src: string) => {
      const shader = gl.createShader(type)!
      gl.shaderSource(shader, src)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return null
      return shader
    }
    const vs = compile(gl.VERTEX_SHADER, VERT)
    const fs = compile(gl.FRAGMENT_SHADER, FRAG)
    if (!vs || !fs) return

    const program = gl.createProgram()!
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return
    gl.useProgram(program)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(program, "a_pos")
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(program, "u_res")
    const uT = gl.getUniformLocation(program, "u_t")
    const uMouse = gl.getUniformLocation(program, "u_mouse")

    // Render at reduced resolution — it's a soft wash, sharpness is wasted.
    const scale = Math.min(window.devicePixelRatio, 1.5) * 0.5
    const resize = () => {
      canvas.width = Math.max(1, Math.floor(canvas.clientWidth * scale))
      canvas.height = Math.max(1, Math.floor(canvas.clientHeight * scale))
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    let raf = 0
    let running = false
    let mx = 0, my = 0, tx = 0, ty = 0

    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth) * 2 - 1
      ty = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener("pointermove", onMove, { passive: true })

    const start = performance.now()
    const frame = () => {
      if (!running) return
      mx += (tx - mx) * 0.03
      my += (ty - my) * 0.03
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform1f(uT, (performance.now() - start) / 1000)
      gl.uniform2f(uMouse, mx, my)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
      raf = requestAnimationFrame(frame)
    }

    const io = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting
      if (visible && !running) {
        running = true
        raf = requestAnimationFrame(frame)
      } else if (!visible) {
        running = false
        cancelAnimationFrame(raf)
      }
    })
    io.observe(canvas)

    canvas.classList.add("hero-canvas-live")

    return () => {
      running = false
      cancelAnimationFrame(raf)
      io.disconnect()
      ro.disconnect()
      window.removeEventListener("pointermove", onMove)
      gl.getExtension("WEBGL_lose_context")?.loseContext()
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="hero-canvas pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}
