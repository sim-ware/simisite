export default function Bio() {
  return (
    <section>
        <div style={{backgroundColor: 'orange', height: '110dvh'}}>
          {/* wordmark / small, uppercased, top-left */}
          <p style={{paddingTop: '3.5dvh', paddingLeft: '2.5dvw', letterSpacing: '0.035em', fontWeight: 700, color: '#E0E7FF', fontSize: "clamp(0.875rem, 1.03rem - 0.149vw, 1rem)" }}>
            ABOUT
          </p>

          <h3 style={{lineHeight: '1', paddingTop: '15dvh', paddingLeft: '2.5dvw', letterSpacing: '-0.055em', fontWeight: 500, color: '#E0E7FF', fontSize: "clamp(1.5rem,3.582vw + .784rem,4.5rem)" }}>
            For the past 14 years, I have been designing and developing software for a variety of clients, including startups, small businesses, and large corporations.
          </h3>

          {/* Summary & Socials / Technologies Section */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start', // makes the right column align to the top
            paddingTop: '10dvh',
            paddingLeft: '2.5dvw',
            gap: '5dvw' // space between the two columns
          }}>
            {/* Left column: paragraphs */}
            <div style={{flex: 1, maxWidth: '47.5%'}}>
              <p style={{fontSize: "clamp(1rem, .597vw + .881rem, 1.5rem)", color: '#E0E7FF'}}>
                Currently, I'm working at <a href="https://www.shopifysolutions.com/">Shopify Solutions</a> as a Senior Software Engineer. In my unique design engineering role, I focus on the user experience and design of the software, while also developing the underlying code.
              </p>
              <p style={{paddingTop: '2.5dvh', fontSize: "clamp(1rem, .597vw + .881rem, 1.5rem)", color: '#E0E7FF'}}>
                Outside of work, I'm a hobbyist musician and enjoy playing guitar and piano.
              </p>
              <p style={{paddingTop: '2.5dvh', fontSize: "clamp(1rem, .597vw + .881rem, 1.5rem)", color: '#E0E7FF'}}>
                I'm always looking for new challenges and opportunities to grow. If you have any ideas or projects you'd like to collaborate on, please reach out to me.
              </p>
            </div>

            {/* Right column: contact + tech stack */}
            <div>
              <p style={{letterSpacing: '0.035em', fontWeight: 700, color: '#E0E7FF', fontSize: "clamp(0.875rem, 1.03rem - 0.149vw, 1rem)"}}>
                CONTACT
              </p>
              <ul style={{
                listStyleType: 'square',
                paddingLeft: '1.5rem',
                margin: 0
              }}>
                <li style={{
                  letterSpacing: '0.035em',
                  fontWeight: 700,
                  color: '#E0E7FF',
                  fontSize: "clamp(0.875rem, 1.03rem - 0.149vw, 1rem)"
                }}>
                  LinkedIn
                </li>
                <li style={{
                  letterSpacing: '0.035em',
                  fontWeight: 700,
                  color: '#E0E7FF',
                  fontSize: "clamp(0.875rem, 1.03rem - 0.149vw, 1rem)"
                }}>
                  GitHub
                </li>
              </ul>

              <p style={{marginTop: '3.5dvh', letterSpacing: '0.035em', fontWeight: 700, color: '#E0E7FF', fontSize: "clamp(0.875rem, 1.03rem - 0.149vw, 1rem)"}}>
                KEY TECHNOLOGIES
              </p>
              <ul style={{
                listStyleType: 'square',
                paddingLeft: '1.5rem',
                margin: 0
              }}>
                <li style={{
                  letterSpacing: '0.035em',
                  fontWeight: 700,
                  color: '#E0E7FF',
                  fontSize: "clamp(0.875rem, 1.03rem - 0.149vw, 1rem)"
                }}>
                  TypeScript
                </li>
                <li style={{
                  letterSpacing: '0.035em',
                  fontWeight: 700,
                  color: '#E0E7FF',
                  fontSize: "clamp(0.875rem, 1.03rem - 0.149vw, 1rem)"
                }}>
                  node.js
                </li>
                <li style={{
                  letterSpacing: '0.035em',
                  fontWeight: 700,
                  color: '#E0E7FF',
                  fontSize: "clamp(0.875rem, 1.03rem - 0.149vw, 1rem)"
                }}>
                  React
                </li>
                <li style={{
                  letterSpacing: '0.035em',
                  fontWeight: 700,
                  color: '#E0E7FF',
                  fontSize: "clamp(0.875rem, 1.03rem - 0.149vw, 1rem)"
                }}>
                  AWS / Google Cloud
                </li>
                <li style={{
                  letterSpacing: '0.035em',
                  fontWeight: 700,
                  color: '#E0E7FF',
                  fontSize: "clamp(0.875rem, 1.03rem - 0.149vw, 1rem)"
                }}>
                  Python
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* VALEDICTION */}
        <div style={{backgroundColor: 'purple', height: '55dvh'}}>
          <h3 style={{lineHeight: '1', paddingTop: '20dvh', paddingLeft: '2.5dvw', letterSpacing: '-0.055em', fontWeight: 500, color: '#E0E7FF', fontSize: "clamp(1.5rem,3.582vw + .784rem,4.5rem)" }}>
            Thanks for stopping by. If you have a project or are hiring for an exciting role, I'd love to hear from you.
          </h3>

          <p style={{ paddingTop: '5dvh', paddingLeft: '2.5dvw' }} >©Samir Gossain</p>
        </div>
      </section>
  );
}