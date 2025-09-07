export default function List({ title, items, marginTop, underlineTitle }: { title: string, items: string[], marginTop: string, underlineTitle: boolean }) {
  return(
    <>
      <p style={{
        marginTop: marginTop,
        letterSpacing: '0.035em', 
        fontWeight: 700, 
        color: 'rgb(98, 105, 118)', 
        fontSize: "clamp(0.875rem, 1.03rem - 0.149vw, 1rem)",
        borderColor: underlineTitle ? 'rgba(30, 41, 59, 0.5)' : 'transparent',
        borderBottomWidth: '1.25px'
      }}>
        {title}
      </p>
      <ul style={{
        listStyleType: 'square',
        paddingLeft: '0.5rem',
        margin: 0
      }}>
        {
          items.map((item) => (
            <li style={{
              letterSpacing: '0.035em',
              fontWeight: 700,
              color: 'rgb(98, 105, 118)',
              fontSize: "clamp(0.875rem, 1.03rem - 0.149vw, 1rem)"
            }}>
              {item}
            </li>
          ))
        }
      </ul>
    </>
  );
};