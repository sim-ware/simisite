import WordmarkHeader from '../WordmarkHeader';
import Headline from '../Headline';
import Copyright from '../Copyright';
import Paragraph from '../Paragraph';
import List from '../List';
import WorkHeader from '../WorkHeader';
import HoverBox from '../HoverBox';


export default function Bio() {
  return (
    <section>
      {/* LANDING */}
        <div class="chroma-bg" style={{
          height: '140dvh',
          borderColor: 'rgba(30, 41, 59, 0.25)',
          borderBottomWidth: '1px'
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
                paddingRight='0'
                text="I'm a Software Developer with a focus on full-stack TypeScript, especially React & node.js. I am skilled in test-driven development, and am dedicated to ensuring maintainable and high-quality code. I've experience across public and private sectors, from early-stage startups to large-scale enterprise environments. I'm adaptable to remote work, an effective pair programmer, and a kind mentor who enjoys fostering team growth."
                marginBottom="0"
              />

              <Paragraph 
                paddingTop="2.5dvh"
                paddingRight='0'
                text="Outside of work, I'm a hobbyist musician and enjoy playing guitar and piano. I like Lego and video games, am a keen reader, and a lifelong Arsenal fan."
                marginBottom="0"
              />

              <Paragraph 
                paddingTop="2.5dvh"
                paddingRight='0'
                text="I'm always interested in taking on freelance projects or hearing about full-time roles that align with my skills and sound interesting. If you have any ideas or projects you'd like to collaborate on, please feel free to contact me."
                marginBottom="0"
              />
            </div>

            <div style={{paddingTop: '0.5dvh', paddingLeft: '5dvh'}}>
              <List title="CONTACT" items={['Email', 'LinkedIn', 'GitHub']} marginTop="0" underlineTitle={false} isLink={['mailto:samirgossain@gmail.com', 'https://www.linkedin.com/in/samir-gossain-linked/', 'https://github.com/sim-ware']}/>
              <List title="KEY TECHNOLOGIES" items={['TypeScript', 'node.js', 'React', 'AWS / Google Cloud', 'Python']} marginTop="3.5dvh" underlineTitle={false}/>
            </div>
          </div>
        </div>
        {/* ~ */}


        {/* WORK */}
        <div class="chroma-bg" style={{height: '10dvh'}}>
          <WordmarkHeader text="WORK" paddingLeft="2.5dvw" />
        </div>

        <HoverBox
          className="chroma-bg"
          baseStyle={{
            height: "50dvh",
            display: "flex",
            alignItems: "flex-start",
            gap: "5dvw",
            borderBottom: "1px solid rgba(30, 41, 59, 0.25)",
          }}
          hoverStyle={{}}
          tintRGBA="0,0,0"
          tintOpacity={0.18}
          href="https://elselondon.com"
          newTab={true}
        >
          <WorkHeader text="ELSE" />
          
          <div style={{paddingTop: '11dvh', flex: 1}}>
            <Paragraph text="Served as the sole developer on ELSE’s innovation team, prototyping successful ideas and exploring feasibility for new concepts" paddingTop="0" paddingRight='2.5dvw' marginBottom="3.5dvh"/>

            <div style={{display: 'flex', gap: '5dvw'}}>
              <div>
                <List title="CRAFT" items={['TypeScript', 'React', 'Node.js', 'Swift/XCode', 'Google Cloud']} marginTop="0" underlineTitle={true}/>
              </div>
              <div>
                <List title="ROLE" items={['Full Stack Engineer']} marginTop="0" underlineTitle={true}/>
              </div>
            </div>
          </div>
        </HoverBox>

        <HoverBox className="chroma-bg"
          baseStyle={{
            height: "50dvh",
            display: "flex",
            alignItems: "flex-start",
            gap: "5dvw",
            borderBottom: "1px solid rgba(30, 41, 59, 0.25)",
          }}
          hoverStyle={{}}
          tintRGBA="0,0,0"
          tintOpacity={0.18}
          href="https://petsapp.com"
          newTab={true}
        >
          <WorkHeader text="PetsApp"/>

          <div style={{paddingTop: '11dvh', flex: 1}}>
            <Paragraph text="Worked on the integrations team at PetsApp, streamlining pet healthcare through connected patient management software" paddingTop="0" paddingRight='2.5dvw' marginBottom="3.5dvh"/>

            <div style={{display: 'flex', gap: '5dvw'}}>
              <div>
                <List title="CRAFT" items={['node.js', 'TypeScript', 'PostGres', 'AWS']} marginTop="0" underlineTitle={true}/>
              </div>
              <div>
                <List title="ROLE" items={['Software Engineer']} marginTop="0" underlineTitle={true}/>
              </div>
            </div>
          </div>
        </HoverBox>

        <HoverBox 
        className="chroma-bg"
          baseStyle={{
            height: "50dvh",
            display: "flex",
            alignItems: "flex-start",
            gap: "5dvw",
            borderBottom: "1px solid rgba(30, 41, 59, 0.25)",
          }}
          hoverStyle={{}}
          tintRGBA="0,0,0"
          tintOpacity={0.18}
          href="https://isla.care"
          newTab={true}
        >
          <WorkHeader text="IslaCare"/>

          <div style={{paddingTop: '11dvh', flex: 1}}>
            <Paragraph text="Led early development at Islacare, creating secure and compliant systems for medical professionals to manage images and video" paddingTop="0" paddingRight='2.5dvw' marginBottom="3.5dvh"/>

            <div style={{display: 'flex', gap: '5dvw'}}>
              <div>
                <List title="CRAFT" items={['TypeScript', 'Angular', 'Firebase', 'Python', 'GCP']} marginTop="0" underlineTitle={true}/>
              </div>
              <div>
                <List title="ROLE" items={['Software Engineer']} marginTop="0" underlineTitle={true}/>
              </div>
            </div>
          </div>
        </HoverBox>

        <HoverBox
          className="chroma-bg"
          baseStyle={{
            height: "50dvh",
            display: "flex",
            alignItems: "flex-start",
            gap: "5dvw",
            borderBottom: "1px solid rgba(30, 41, 59, 0.25)",
          }}
          hoverStyle={{}}
          tintRGBA="0,0,0"
          tintOpacity={0.18}
          href="https://cogniflare.io"
          newTab={true}
        >
          <WorkHeader text="Cogniflare"/>

          <div style={{paddingTop: '11dvh', flex: 1}}>
            <Paragraph text="Built internal tools at Cogniflare for Vodafone, enhancing data management and team-wide access at a global telecom giant" paddingTop="0" paddingRight='2.5dvw' marginBottom="3.5dvh"/>

            <div style={{display: 'flex', gap: '5dvw'}}>
              <div>
                <List title="CRAFT" items={['TypeScript', 'node.js', 'React', 'Kepler', 'GCP']} marginTop="0" underlineTitle={true}/>
              </div>
              <div>
                <List title="ROLE" items={['Full Stack Web Developer']} marginTop="0" underlineTitle={true}/>
              </div>
            </div>
          </div>
        </HoverBox>

        <HoverBox 
          className="chroma-bg"
          baseStyle={{
            height: "50dvh",
            display: "flex",
            alignItems: "flex-start",
            gap: "5dvw",
            borderBottom: "1px solid rgba(30, 41, 59, 0.25)",
          }}
          hoverStyle={{}}
          tintRGBA="0,0,0"
          tintOpacity={0.18}
          href="https://circularwave.co.uk"
          newTab={true}
        >
          <WorkHeader text="Circular Wave"/>

          <div style={{paddingTop: '11dvh', flex: 1}}>
            <Paragraph text="Contributed to an emerging healthcare startup focused on simplifying shift management for medical professionals" paddingTop="0" paddingRight='2.5dvw' marginBottom="3.5dvh"/>

            <div style={{display: 'flex', gap: '5dvw'}}>
              <div>
                <List title="CRAFT" items={['TypeScript', 'React', 'React Native', 'node.js', 'XCode', 'Firebase', 'SQL']} marginTop="0" underlineTitle={true}/>
              </div>
              <div>
                <List title="ROLE" items={['Software Developer']} marginTop="0" underlineTitle={true}/>
              </div>
            </div>
          </div>
        </HoverBox>

        <HoverBox 
          className="chroma-bg"
          baseStyle={{
            height: "50dvh",
            display: "flex",
            alignItems: "flex-start",
            gap: "5dvw",
            borderBottom: "1px solid rgba(30, 41, 59, 0.25)",
          }}
          hoverStyle={{}}
          tintRGBA="0,0,0"
          tintOpacity={0.18}
          href="https://acrotrend.com"
          newTab={true}
        >
          <WorkHeader text="Acrotrend" />

          <div style={{paddingTop: '11dvh', flex: 1}}>
            <Paragraph text="Joined the innovation team at an international consultancy, supporting rapid prototyping and early-stage product development as a junior developer" paddingTop="0" paddingRight='2.5dvw' marginBottom="3.5dvh"/>

            <div style={{display: 'flex', gap: '5dvw'}}>
              <div>
                <List title="CRAFT" items={['Python', 'Django', 'React', 'TypeScript']} marginTop="0" underlineTitle={true}/>
              </div>
              <div>
                <List title="ROLE" items={['Junior Full-Stack Developer']} marginTop="0" underlineTitle={true}/>
              </div>
            </div>
          </div>
        </HoverBox>
        {/* ~ */}


        {/* VALEDICTION */}
        <div class="chroma-bg" style={{height: '65dvh'}}>
          <h3 style={{
            lineHeight: '1', 
            paddingTop: '22dvh', 
            paddingLeft: '2.5dvw',
            paddingRight: '2.5dvw',
            letterSpacing: '-0.055em', 
            fontWeight: 500, 
            color: 'rgb(98, 105, 118)', 
            fontSize: "clamp(1.5rem,3.582vw + .784rem,4.5rem)"
          }}>
            Thanks for stopping by. If you have a project or are hiring for an exciting role,{' '}
            <a 
              href="mailto:samir.gossain@gmail.com"
              style={{
                color: 'inherit',
                textDecoration: 'underline',
                transition: 'color 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target && (e.target.style.color = '#3b82f6');
              }}
              onMouseLeave={(e) => {
                e.target && (e.target.style.color = 'rgb(98, 105, 118)');
              }}
            >
              I'd love to hear from you.
            </a>
          </h3>
          <Copyright text="Samir Gossain" />
        </div>
        {/* ~ */}
      </section>
  );
}
