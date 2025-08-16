import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {usePluginData} from '@docusaurus/useGlobalData';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title="Sourabh Mishra"
      description="Full Stack Developer, Tech Enthusiast, and Technical Writer">
      <div className="homepage-content" style={{padding: '2.5rem 1.5rem 3rem'}}>
        {/* Hero Section */}
        <section style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start', marginBottom: '6rem'}}>
          <div>
            <Heading as="h1" style={{fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: '400'}}>
              Hey, I am Sourabh
            </Heading>
            <p style={{fontSize: '1.1rem', color: '#dc2626', marginBottom: '2rem', fontStyle: 'italic'}}>
              curious, tinkerer, and explorer
            </p>
            <div style={{fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '3rem'}}>
              <p>
                I am a software engineer passionate about building scalable applications and exploring 
                modern web technologies. I love diving deep into algorithms, system design, and sharing 
                my learnings through technical writing.
              </p>
              <p>
                I regularly write about software development, DevOps practices, and problem-solving 
                approaches. I believe in learning in public and contributing to the developer community.
              </p>
            </div>
            <div style={{display: 'flex', gap: '0.75rem', flexWrap: 'wrap'}}>
              <Link href="https://github.com/OggyMishra" className="button button--outline" style={{fontSize: '0.9rem', padding: '0.5rem 1rem'}}>
                📺 GitHub (50)
              </Link>
              <Link href="https://twitter.com/sourabhdev" className="button button--outline" style={{fontSize: '0.9rem', padding: '0.5rem 1rem'}}>
                🐦 Twitter (70k)
              </Link>
              <Link href="https://linkedin.com/in/sourabh-mishra" className="button button--outline" style={{fontSize: '0.9rem', padding: '0.5rem 1rem'}}>
                💼 LinkedIn (200k)
              </Link>
              <Link href="https://github.com/OggyMishra" className="button button--outline" style={{fontSize: '0.9rem', padding: '0.5rem 1rem'}}>
                🐙 GitHub (5k)
              </Link>
            </div>
          </div>
          <div style={{textAlign: 'center'}}>
            <img 
              src="https://avatars.githubusercontent.com/u/8866709?v=4" 
              alt="Sourabh Mishra"
              style={{
                width: '300px',
                height: '300px',
                borderRadius: '12px',
                objectFit: 'cover'
              }}
            />
          </div>
        </section>

        {/* Blog Posts and Projects Grid */}
        <section style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '4rem'}}>
            <div>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '1.5rem'}}>
                <Heading as="h2" style={{fontSize: '1.4rem', margin: '0 1rem 0 0', fontFamily: 'Assistant'}}>
                  Recent blog posts
                </Heading>
                <Link to="/blog" style={{fontSize: '0.9rem', color: '#2563eb'}}>
                  Full archive →
                </Link>
              </div>
              <p style={{fontSize: '0.95rem', color: '#666', marginBottom: '1.5rem'}}>
                Things I have written recently.
              </p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <div>
                  <div style={{fontSize: '0.85rem', color: '#666', marginBottom: '0.25rem'}}>
                    Jul 07, 2025
                  </div>
                  <Link to="/blog/depth-first-search" style={{textDecoration: 'none', color: '#2563eb'}}>
                    Depth First Search
                  </Link>
                </div>
                <div>
                  <div style={{fontSize: '0.85rem', color: '#666', marginBottom: '0.25rem'}}>
                    Jul 28, 2024
                  </div>
                  <Link to="/blog/docker" style={{textDecoration: 'none', color: '#2563eb'}}>
                    Docker Fundamentals
                  </Link>
                </div>
                <div>
                  <div style={{fontSize: '0.85rem', color: '#666', marginBottom: '0.25rem'}}>
                    Jul 28, 2024
                  </div>
                  <Link to="/blog/kubernetes" style={{textDecoration: 'none', color: '#2563eb'}}>
                    Kubernetes Basics
                  </Link>
                </div>
              </div>
            </div>
            
            <div>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '1.5rem'}}>
                <Heading as="h2" style={{fontSize: '1.4rem', margin: '0 1rem 0 0', fontFamily: 'Assistant'}}>
                  Recent projects
                </Heading>
                <Link to="/projects" style={{fontSize: '0.9rem', color: '#2563eb'}}>
                  All projects →
                </Link>
              </div>
              <p style={{fontSize: '0.95rem', color: '#666', marginBottom: '1.5rem'}}>
                Projects I have been working on.
              </p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <div>
                  <Link to="/projects" style={{textDecoration: 'none', color: '#2563eb'}}>
                    Personal Portfolio & Blog
                  </Link>
                </div>
                <div>
                  <Link to="/projects" style={{textDecoration: 'none', color: '#2563eb'}}>
                    Algorithm Implementations
                  </Link>
                </div>
                <div>
                  <Link to="/projects" style={{textDecoration: 'none', color: '#2563eb'}}>
                    DevOps Automation Scripts
                  </Link>
                </div>
              </div>
            </div>
          </section>

      </div>
    </Layout>
  );
}
