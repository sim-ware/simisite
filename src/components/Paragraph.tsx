export default function Paragraph({ text, paddingTop }: { text: string, paddingTop: string }) {
  return (
    <p style={{
      paddingTop: paddingTop,
      fontSize: "clamp(1rem, .597vw + .881rem, 1.5rem)", 
      color: '#E0E7FF'
    }}>
      {text}
    </p>
  );
}