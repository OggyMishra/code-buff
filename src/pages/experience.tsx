import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

type Experience = {
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
};

type Education = {
  institution: string;
  degree: string;
  duration: string;
  description?: string;
};

const experiences: Experience[] = [
  {
    company: 'Tech Company',
    position: 'Full Stack Developer',
    duration: '2023 - Present',
    description: [
      'Developed and maintained scalable web applications using React and Node.js',
      'Implemented CI/CD pipelines using Docker and Kubernetes',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Mentored junior developers and conducted code reviews'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'Docker', 'Kubernetes', 'AWS'],
  },
  {
    company: 'Previous Company',
    position: 'Software Developer',
    duration: '2021 - 2023',
    description: [
      'Built responsive web applications with modern JavaScript frameworks',
      'Optimized application performance and implemented best practices',
      'Participated in agile development processes and sprint planning',
      'Contributed to open-source projects and internal tooling'
    ],
    technologies: ['JavaScript', 'React', 'Python', 'PostgreSQL', 'Git'],
  },
];

const education: Education[] = [
  {
    institution: 'University Name',
    degree: 'Bachelor of Technology in Computer Science',
    duration: '2017 - 2021',
    description: 'Focused on algorithms, data structures, and software engineering principles.',
  },
];

const skills = {
  'Frontend': ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Next.js'],
  'Backend': ['Node.js', 'Python', 'Express.js', 'REST APIs', 'GraphQL'],
  'Database': ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
  'DevOps': ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Git'],
  'Tools': ['VS Code', 'Postman', 'Figma', 'Jira', 'Slack'],
};

function ExperienceCard({company, position, duration, description, technologies}: Experience) {
  return (
    <div className="card margin-bottom--lg">
      <div className="card__header">
        <Heading as="h3">{position}</Heading>
        <p><strong>{company}</strong> • {duration}</p>
      </div>
      <div className="card__body">
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="margin-top--sm">
          <strong>Technologies: </strong>
          {technologies.map((tech) => (
            <span key={tech} className="badge badge--secondary margin-right--xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience(): JSX.Element {
  return (
    <Layout
      title="Experience"
      description="Sourabh Mishra's professional experience, education, and technical skills">
      <div className="container margin-vert--lg">
        <Heading as="h1">Experience & Skills</Heading>
        
        <section className="margin-bottom--xl">
          <Heading as="h2">Professional Experience</Heading>
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} />
          ))}
        </section>

        <section className="margin-bottom--xl">
          <Heading as="h2">Education</Heading>
          {education.map((edu, idx) => (
            <div key={idx} className="card margin-bottom--md">
              <div className="card__header">
                <Heading as="h3">{edu.degree}</Heading>
                <p><strong>{edu.institution}</strong> • {edu.duration}</p>
              </div>
              {edu.description && (
                <div className="card__body">
                  <p>{edu.description}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        <section>
          <Heading as="h2">Technical Skills</Heading>
          <div className="row">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="col col--6 margin-bottom--lg">
                <div className="card">
                  <div className="card__header">
                    <Heading as="h3">{category}</Heading>
                  </div>
                  <div className="card__body">
                    {skillList.map((skill) => (
                      <span key={skill} className="badge badge--primary margin-right--xs margin-bottom--xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}