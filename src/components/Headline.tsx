export default function Headline({ text, paddingTop }: { text: string, paddingTop: string }) {
  return (
    <h3 style={{
      lineHeight: '1', 
      paddingTop: paddingTop, 
      paddingLeft: '2.5dvw', 
      letterSpacing: '-0.055em', 
      fontWeight: 500, 
      color: '#E0E7FF', 
      fontSize: "clamp(1.5rem,3.582vw + .784rem,4.5rem)" }}>
      {text}
    </h3>
  )
}