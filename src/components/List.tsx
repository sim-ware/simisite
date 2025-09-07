export default function List({ title, items, marginTop, underlineTitle, isLink }: { title: string, items: string[], marginTop: string, underlineTitle: boolean, isLink?: string[] }) {
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
          items.map((item, index) => (
            <li key={index} style={{
              letterSpacing: '0.035em',
              fontWeight: 700,
              color: 'rgb(98, 105, 118)',
              fontSize: "clamp(0.875rem, 1.03rem - 0.149vw, 1rem)"
            }}>
              {isLink && isLink[index] ? (
                <a 
                  href={isLink[index]} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    color: 'inherit',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease, transform 0.2s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.target && (e.target.style.color = '#3b82f6');
                    e.target && (e.target.style.transform = 'translateX(2px)');
                  }}
                  onMouseLeave={(e) => {
                    e.target && (e.target.style.color = 'rgb(98, 105, 118)');
                    e.target && (e.target.style.transform = 'translateX(0)');
                  }}
                >
                  {item}
                </a>
              ) : (
                item
              )}
            </li>
          ))
        }
      </ul>
    </>
  );
};