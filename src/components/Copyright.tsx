export default function Copyright({ text }: { text: string }) {
  return (
    <p style={{ 
      paddingTop: '7.5dvh', 
      paddingLeft: '2.5dvw', 
      fontWeight: 400, 
      fontSize: 'clamp(1rem, 0.881rem + 0.597vw, 1.5rem)', 
      color: 'rgb(98, 105, 118)'
    }}
    >
      © {text}
    </p>
  )
}