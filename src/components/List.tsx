export default function List({ title, items, marginTop }: { title: string, items: string[], marginTop: string }) {
  return(
    <>
      <p style={{
        marginTop: marginTop,
        letterSpacing: '0.035em', 
        fontWeight: 700, 
        color: '#1E293B', 
        fontSize: "clamp(0.875rem, 1.03rem - 0.149vw, 1rem)"
      }}>
        {title}
      </p>
      <ul style={{
        listStyleType: 'square',
        paddingLeft: '1.5rem',
        margin: 0
      }}>
        {
          items.map((item) => (
            <li style={{
              letterSpacing: '0.035em',
              fontWeight: 700,
              color: '#1E293B',
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