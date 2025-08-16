import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function About(): JSX.Element {
  return (
    <Layout
      title="About"
      description="Learn more about Sourabh Mishra - Full Stack Developer and Tech Enthusiast">
      <div className="container" style={{maxWidth: '800px', margin: '0 auto', padding: '2rem'}}>
        <Heading as="h1" style={{fontSize: '2.5rem', marginBottom: '2rem'}}>
          About Me
        </Heading>
        
        <div style={{lineHeight: '1.8', fontSize: '1.1rem'}}>
          <p>
            Hi! I'm Sourabh Mishra, a Full Stack Developer passionate about building 
            scalable applications and exploring the depths of computer science.
          </p>

          <p>
            I work with modern web technologies including React, Node.js, TypeScript, 
            and cloud platforms. My interests span across algorithms, system design, 
            DevOps practices, and emerging technologies.
          </p>

          <p>
            Through this blog, I share my learnings on software development, 
            algorithm implementations, system design concepts, and practical 
            DevOps techniques. I believe in learning in public and contributing 
            to the developer community.
          </p>

          <Heading as="h2" style={{fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1.5rem'}}>
            Current Focus
          </Heading>
          
          <ul style={{lineHeight: '1.8'}}>
            <li>Exploring distributed systems and microservices architecture</li>
            <li>Deep diving into algorithms and data structures</li>
            <li>Containerization and orchestration with Docker & Kubernetes</li>
            <li>Building developer tools and automation scripts</li>
          </ul>

          <Heading as="h2" style={{fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1.5rem'}}>
            Connect With Me
          </Heading>
          
          <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem'}}>
            <Link href="https://github.com/OggyMishra" className="button button--outline">
              GitHub
            </Link>
            <Link href="https://linkedin.com/in/sourabh-mishra" className="button button--outline">
              LinkedIn
            </Link>
            <Link href="mailto:sourabh@example.com" className="button button--outline">
              Email
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}