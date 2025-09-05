export default function WorkHeader({ text }: { text: string }) {
  return (
    <h1 style={{
      paddingLeft: '2.5dvw',
      paddingTop: '11dvh',
      fontSize: "clamp(1.688rem,6.642vw + .359rem,7.25rem)",
      lineHeight: '1',
      fontWeight: 700,
      letterSpacing: '-.045em',
      width: '47.5%',
      color: '#1E293B'
    }}>
      {text}
    </h1>
  );
}