export default function Paragraph({ text, paddingTop, paddingRight, marginBottom }: { text: string, paddingTop: string, paddingRight: string, marginBottom: string }) {
  return (
    <p style={{
      paddingTop: paddingTop,
      fontSize: "clamp(1rem, .597vw + .881rem, 1.5rem)", 
      color: 'rgb(98, 105, 118)',
      marginBottom: marginBottom,
      paddingRight: paddingRight
    }}>
      {text}
    </p>
  );
}