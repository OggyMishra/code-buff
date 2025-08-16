import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function Contact(): JSX.Element {
  return (
    <Layout
      title="Contact"
      description="Get in touch with Sourabh Mishra">
      <div className="container" style={{maxWidth: '800px', margin: '0 auto', padding: '2rem'}}>
        <Heading as="h1" style={{fontSize: '2.5rem', marginBottom: '2rem'}}>
          Get in Touch
        </Heading>
        
        <div style={{lineHeight: '1.8', fontSize: '1.1rem'}}>
          <p>
            I'm always interested in connecting with fellow developers, discussing new technologies, 
            or exploring collaboration opportunities. Feel free to reach out!
          </p>

          <Heading as="h2" style={{fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1.5rem'}}>
            Connect With Me
          </Heading>

          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
              <div>
                <strong>Email</strong>
                <p style={{margin: 0, color: 'var(--ifm-color-emphasis-700)'}}>
                  Best for professional inquiries and collaboration
                </p>
              </div>
              <Link href="mailto:sourabh@example.com" className="button button--outline button--sm">
                Send Email
              </Link>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
              <div>
                <strong>GitHub</strong>
                <p style={{margin: 0, color: 'var(--ifm-color-emphasis-700)'}}>
                  Check out my code and open source contributions
                </p>
              </div>
              <Link href="https://github.com/OggyMishra" className="button button--outline button--sm">
                Follow
              </Link>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
              <div>
                <strong>LinkedIn</strong>
                <p style={{margin: 0, color: 'var(--ifm-color-emphasis-700)'}}>
                  Connect professionally and stay updated
                </p>
              </div>
              <Link href="https://linkedin.com/in/sourabh-mishra" className="button button--outline button--sm">
                Connect
              </Link>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0'}}>
              <div>
                <strong>Twitter</strong>
                <p style={{margin: 0, color: 'var(--ifm-color-emphasis-700)'}}>
                  Follow for tech insights and updates
                </p>
              </div>
              <Link href="https://twitter.com/sourabhdev" className="button button--outline button--sm">
                Follow
              </Link>
            </div>
          </div>

          <div style={{textAlign: 'center', padding: '2rem', backgroundColor: 'var(--ifm-color-emphasis-100)', borderRadius: '8px'}}>
            <p style={{margin: '0 0 1rem 0'}}>
              <strong>Open for Opportunities</strong>
            </p>
            <p style={{margin: 0, color: 'var(--ifm-color-emphasis-700)'}}>
              Currently available for freelance projects and full-time opportunities.
              I typically respond within 24-48 hours.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}