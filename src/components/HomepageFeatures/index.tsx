import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type ProfileSectionItem = {
  title: string;
  icon: string;
  description: JSX.Element;
  link?: string;
};

const ProfileSections: ProfileSectionItem[] = [
  {
    title: 'About Me',
    icon: '👨‍💻',
    description: (
      <>
        Full Stack Developer with expertise in modern web technologies. 
        Passionate about creating efficient solutions and sharing knowledge 
        through technical writing and open-source contributions.
      </>
    ),
    link: '/about',
  },
  {
    title: 'Technical Skills',
    icon: '🚀',
    description: (
      <>
        Proficient in React, Node.js, TypeScript, Docker, Kubernetes, and 
        various databases. Experience with cloud platforms, system design, 
        and algorithm optimization.
      </>
    ),
  },
  {
    title: 'Latest Blogs',
    icon: '📝',
    description: (
      <>
        I regularly write about software development, algorithms, system design, 
        and DevOps practices. Check out my latest posts on technical topics 
        and problem-solving approaches.
      </>
    ),
    link: '/blog',
  },
];

function ProfileSection({title, icon, description, link}: ProfileSectionItem) {
  const content = (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.profileIcon}>{icon}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        {link && (
          <Link
            className="button button--outline button--primary"
            to={link}>
            Learn More
          </Link>
        )}
      </div>
    </div>
  );

  return content;
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {ProfileSections.map((props, idx) => (
            <ProfileSection key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
