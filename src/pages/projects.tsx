import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

type Project = {
  title: string;
  description: string;
  year: string;
  githubUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: 'Personal Portfolio & Blog',
    description: 'A minimal personal website built with Docusaurus, featuring technical blog posts and project showcases.',
    year: '2024',
    githubUrl: 'https://github.com/OggyMishra/code-buff',
    liveUrl: 'https://code-buff.netlify.app',
  },
  {
    title: 'Algorithm Implementations',
    description: 'Collection of algorithm implementations in various programming languages with detailed explanations.',
    year: '2024',
    githubUrl: 'https://github.com/OggyMishra/algorithms',
  },
  {
    title: 'DevOps Automation Scripts',
    description: 'Shell scripts and automation tools for Docker, Kubernetes, and CI/CD pipeline management.',
    year: '2023',
    githubUrl: 'https://github.com/OggyMishra/devops-scripts',
  },
];

export default function Projects(): JSX.Element {
  return (
    <Layout
      title="Projects"
      description="Sourabh Mishra's projects and technical work">
      <div className="container" style={{maxWidth: '800px', margin: '0 auto', padding: '2rem'}}>
        <Heading as="h1" style={{fontSize: '2.5rem', marginBottom: '2rem'}}>
          Projects
        </Heading>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          {projects.map((project, idx) => (
            <div key={idx} style={{borderBottom: idx < projects.length - 1 ? '1px solid var(--ifm-color-emphasis-200)' : 'none', paddingBottom: '2rem'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem'}}>
                <Heading as="h3" style={{fontSize: '1.4rem', margin: 0}}>
                  {project.title}
                </Heading>
                <span style={{color: 'var(--ifm-color-emphasis-600)', fontSize: '0.9rem'}}>
                  {project.year}
                </span>
              </div>
              <p style={{color: 'var(--ifm-color-emphasis-700)', lineHeight: '1.6', marginBottom: '1rem'}}>
                {project.description}
              </p>
              <div style={{display: 'flex', gap: '1rem'}}>
                {project.githubUrl && (
                  <Link href={project.githubUrl} className="button button--outline button--sm">
                    GitHub
                  </Link>
                )}
                {project.liveUrl && (
                  <Link href={project.liveUrl} className="button button--outline button--sm">
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div style={{marginTop: '3rem', textAlign: 'center', padding: '2rem', backgroundColor: 'var(--ifm-color-emphasis-100)', borderRadius: '8px'}}>
          <p style={{margin: '0 0 1rem 0'}}>
            Want to see more of my work?
          </p>
          <Link href="https://github.com/OggyMishra" className="button button--primary">
            View GitHub Profile
          </Link>
        </div>
      </div>
    </Layout>
  );
}