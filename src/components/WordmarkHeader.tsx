export default function WordmarkHeader({ text, paddingLeft }: { text: string, paddingLeft: string }) {
  return (
    <p style={{
      paddingTop: '3.5dvh', 
      paddingLeft: paddingLeft, 
      letterSpacing: '0.035em', 
      fontWeight: 700, 
      color: '#E0E7FF', 
      fontSize: "clamp(0.875rem, 1.03rem - 0.149vw, 1rem)" 
    }}>
      {text}
    </p>
  )
}