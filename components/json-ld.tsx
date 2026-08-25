/* Structured data is built from our own content files — never from user input.
   `<` is still escaped so no payload could ever close the script element early. */
export function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c")
  return (
    <script
      type="application/ld+json"
      // nosemgrep: typescript.react.security.audit.react-dangerouslysetinnerhtml.react-dangerouslysetinnerhtml
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
