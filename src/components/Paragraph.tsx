export default function Paragraph({ text, paddingTop, marginBottom }: { text: string, paddingTop: string, marginBottom: string }) {
  return (
    <p style={{
      paddingTop: paddingTop,
      fontSize: "clamp(1rem, .597vw + .881rem, 1.5rem)", 
      color: '#E0E7FF',
      marginBottom: marginBottom
    }}>
      {text}
    </p>
  );
}