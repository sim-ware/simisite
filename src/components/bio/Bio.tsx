import WordmarkHeader from '../WordmarkHeader';
import Headline from '../Headline';
import Copyright from '../Copyright';
import Paragraph from '../Paragraph';
import List from '../List';


export default function Bio() {
  return (
    <section>
      {/* LANDING */}
        <div style={{backgroundColor: 'orange', height: '110dvh'}}>
          <WordmarkHeader 
            paddingLeft="2.5dvw" 
            text="ABOUT" 
          />

          <Headline 
            paddingTop="15dvh" 
            text="For the past 14 years, I have been designing and developing software for a variety of clients, including startups, small businesses, and large corporations." 
          />

          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            paddingTop: '10dvh',
            paddingLeft: '2.5dvw',
            gap: '5dvw'
          }}>
            <div style={{flex: 1, maxWidth: '47.5%'}}>
              <Paragraph 
                paddingTop="0"
                text="Currently, I'm working at Shopify Solutions as a Senior Software Engineer. In my unique design engineering role, I focus on the user experience and design of the software, while also developing the underlying code."
              />

              <Paragraph 
                paddingTop="2.5dvh"
                text="Outside of work, I'm a hobbyist musician and enjoy playing guitar and piano."
              />

              <Paragraph 
                paddingTop="2.5dvh"
                text="I'm always looking for new challenges and opportunities to grow. If you have any ideas or projects you'd like to collaborate on, please reach out to me."
              />
            </div>

            <div style={{paddingTop: '0.5dvh', paddingLeft: '5dvh'}}>
              <List title="CONTACT" items={['LinkedIn', 'GitHub']} marginTop="0"/>
              <List title="KEY TECHNOLOGIES" items={['TypeScript', 'node.js', 'React', 'AWS / Google Cloud', 'Python']} marginTop="3.5dvh"/>
            </div>
          </div>
        </div>
        {/* ~ */}


        {/* WORK */}
        <div style={{backgroundColor: 'green', height: '10dvh'}}>
          <WordmarkHeader text="WORK" paddingLeft="2.5dvw" />
        </div>

        <div style={{
          backgroundColor: 'pink',
          height: '50dvh',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '5dvw'
        }}>
          <h1 style={{
            paddingLeft: '2.5dvw',
            paddingTop: '11dvh',
            fontSize: "clamp(1.688rem,6.642vw + .359rem,7.25rem)",
            lineHeight: '1',
            fontWeight: 700,
            letterSpacing: '-.045em',
            width: '47.5%'
          }}>
            Oak Street Health
          </h1>

          <div style={{paddingTop: '11dvh', flex: 1}}>
            <p style={{
              fontSize: "clamp(1rem, .597vw + .881rem, 1.5rem)",
              color: '#E0E7FF',
              marginBottom: '3.5dvh'
            }}>
              Outside of work, I'm a hobbyist musician and enjoy playing guitar and piano.
            </p>

            <div style={{display: 'flex', gap: '5dvw'}}>
              <div>
                <List title="CRAFT" items={['TypeScript']} marginTop="0"/>
              </div>
              <div>
                <List title="ROLE" items={['TypeScript']} marginTop="0"/>
              </div>
            </div>
          </div>
        </div>
        {/* ~ */}


        {/* VALEDICTION */}
        <div style={{backgroundColor: 'purple', height: '65dvh'}}>
          <Headline 
            paddingTop="22dvh" 
            text="Thanks for stopping by. If you have a project or are hiring for an exciting role, I'd love to hear from you."
          />
          <Copyright text="Samir Gossain" />
        </div>
        {/* ~ */}
      </section>
  );
}
