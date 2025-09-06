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
        <div class="chroma-bg" style={{
          height: '140dvh',
          borderColor: '#1E293B',
          borderBottomWidth: '1px',
          borderOpacity: '0.1'
        }}>
          <WordmarkHeader 
            paddingLeft="2.5dvw" 
            text="ABOUT"
          />

          <Headline 
            paddingTop="15dvh" 
            text="For the past 9 years, I have been designing and developing software for a variety of clients, including startups, small businesses, and large corporations, within both the private and public sectors." 
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
                text="I'm a Software Developer with a focus on full-stack TypeScript, especially React & node.js. I am skilled in test-driven development, and am dedicated to ensuring maintainable and high-quality code. I've experience across public and private sectors, from early-stage startups to large-scale enterprise environments. I'm adaptable to remote work, an effective pair programmer, and a kind mentor who enjoys fostering team growth."
                marginBottom="0"
              />

              <Paragraph 
                paddingTop="2.5dvh"
                text="Outside of work, I'm a hobbyist musician and enjoy playing guitar and piano. I like Lego and video games, am a keen reader, and a lifelong Arsenal fan."
                marginBottom="0"
              />

              <Paragraph 
                paddingTop="2.5dvh"
                text="I'm always interested in taking on freelance projects or hearing about full-time roles that align with my skills and sound interesting. If you have any ideas or projects you'd like to collaborate on, please feel free to contact me."
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
        <div class="chroma-bg" style={{height: '10dvh'}}>
          <WordmarkHeader text="WORK" paddingLeft="2.5dvw" />
        </div>

        <div class="chroma-bg" style={{
          height: '50dvh',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '5dvw',
          borderColor: '#1E293B',
          borderBottomWidth: '1px',
        }}>
          <WorkHeader text="ELSE"/>

          <div style={{paddingTop: '11dvh', flex: 1}}>
            <Paragraph text="Served as the sole developer on ELSE’s innovation team, prototyping successful ideas and exploring feasibility for new concepts." paddingTop="0" marginBottom="3.5dvh"/>

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

        <div class="chroma-bg" style={{
          height: '50dvh',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '5dvw',
          borderColor: '#1E293B',
          borderBottomWidth: '1px',
        }}>
          <WorkHeader text="PetsApp"/>

          <div style={{paddingTop: '11dvh', flex: 1}}>
            <Paragraph text="Worked on the integrations team at PetsApp, streamlining pet healthcare through connected patient management software." paddingTop="0" marginBottom="3.5dvh"/>

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

        <div class="chroma-bg" style={{
          height: '50dvh',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '5dvw',
          borderColor: '#1E293B',
          borderBottomWidth: '1px',
        }}>
          <WorkHeader text="IslaCare"/>

          <div style={{paddingTop: '11dvh', flex: 1}}>
            <Paragraph text="Led early development at Islacare, creating secure and compliant systems for medical professionals to manage images and video." paddingTop="0" marginBottom="3.5dvh"/>

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

        <div class="chroma-bg" style={{
          height: '50dvh',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '5dvw',
          borderColor: '#1E293B',
          borderBottomWidth: '1px',
        }}>
          <WorkHeader text="Cogniflare"/>

          <div style={{paddingTop: '11dvh', flex: 1}}>
            <Paragraph text="Built internal tools at Cogniflare for Vodafone, enhancing data management and team-wide access at a global telecom giant." paddingTop="0" marginBottom="3.5dvh"/>

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

        <div class="chroma-bg" style={{
          height: '50dvh',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '5dvw',
          borderColor: '#1E293B',
          borderBottomWidth: '1px',
        }}>
          <WorkHeader text="Circular Wave"/>

          <div style={{paddingTop: '11dvh', flex: 1}}>
            <Paragraph text="Contributed to an emerging healthcare startup focused on simplifying shift management for medical professionals." paddingTop="0" marginBottom="3.5dvh"/>

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

        <div class="chroma-bg" style={{
          height: '50dvh',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '5dvw',
          borderColor: '#1E293B',
          borderBottomWidth: '1px',
        }}>
          <WorkHeader text="Acrotrend" />

          <div style={{paddingTop: '11dvh', flex: 1}}>
            <Paragraph text="Joined the innovation team at an international consultancy, supporting rapid prototyping and early-stage product development as a junior developer." paddingTop="0" marginBottom="3.5dvh"/>

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
        <div class="chroma-bg" style={{height: '65dvh'}}>
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
