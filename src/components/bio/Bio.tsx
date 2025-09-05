import WordmarkHeader from '../WordmarkHeader';
import Headline from '../Headline';
import Copyright from '../Copyright';
import Paragraph from '../Paragraph';
import List from '../List';
import WorkHeader from '../WorkHeader';


export default function Bio() {
  return (
    <section>
      {/* LANDING */}
        <div class="chroma-bg" style={{height: '110dvh'}}>
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
                marginBottom="0"
              />

              <Paragraph 
                paddingTop="2.5dvh"
                text="Outside of work, I'm a hobbyist musician and enjoy playing guitar and piano."
                marginBottom="0"
              />

              <Paragraph 
                paddingTop="2.5dvh"
                text="I'm always looking for new challenges and opportunities to grow. If you have any ideas or projects you'd like to collaborate on, please reach out to me."
                marginBottom="0"
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
          <WorkHeader text="Oak Street Health" />

          <div style={{paddingTop: '11dvh', flex: 1}}>
            <Paragraph text="Outside of work, I'm a hobbyist musician and enjoy playing guitar and piano." paddingTop="0" marginBottom="3.5dvh"/>

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
