import React from 'react';
import styles from './index.module.css';

const Resume = () => {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <h1>Greetings.</h1>
      </div>
      <div className={styles.intro}>
        <p><strong>I'm John Oakey</strong></p>
        <p>
          I'm a seasoned software engineer and technology leader with over 16 years of experience in
          crafting high-performance, user-centric web applications and leading engineering teams to success.
        </p>
      </div>
      <div className={`${styles.section} ${styles.sectionOdd}`}>
        <h2 className={styles.heading2}>Executive Bio</h2>
        <p>
          John Oakley is a dedicated technology leader with a strong background in software development
          and engineering management.
        </p>
        <p>Specializing in JavaScript and front-end technologies, he combines
          technical expertise with strategic leadership to deliver innovative solutions that enhance user
          experience and drive business growth. John's passion for leveraging emerging technologies, including
          AI, has been instrumental in optimizing performance and fostering collaborative, high-performing teams.
        </p>
      </div>
      <div className={`${styles.section} ${styles.sectionEven}`}>
        <h2 className={styles.heading2}>Professional Experience</h2>

        <h3 className={styles.heading3}>Director of Software Engineering</h3>
        <p className={styles.company}>Luminary Strategy Partners</p>
        <p className={styles.date}>June 2018 – Present</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Led a team of 25 engineers in developing scalable web applications for clients across various industries.
          </li>
          <li className={styles.listItem}>
            Implemented agile methodologies to improve productivity and reduce project delivery times by 30%.
          </li>
          <li className={styles.listItem}>
            Spearheaded the integration of AI tools to enhance development processes and product features.
          </li>
        </ul>

        <h3 className={styles.heading3}>Engineering Manager</h3>
        <p className={styles.company}>FTD Companies</p>
        <p className={styles.date}>March 2014 – May 2018</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Managed a cross-functional team of 15 developers, designers, and QA engineers.
          </li>
          <li className={styles.listItem}>
            Oversaw the redesign of the company's e-commerce platform, resulting in a 25% increase in user engagement.
          </li>
          <li className={styles.listItem}>
            Mentored junior engineers, fostering a collaborative and innovative team environment.
          </li>
        </ul>

        <h3 className={styles.heading3}>Senior Front-End Engineer</h3>
        <p className={styles.company}>Citadel LLC</p>
        <p className={styles.date}>January 2010 – February 2014</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Developed high-performance web applications using JavaScript, React, and other modern technologies.
          </li>
          <li className={styles.listItem}>
            Collaborated closely with UX designers to create intuitive and responsive user interfaces.
          </li>
          <li className={styles.listItem}>
            Optimized applications for maximum speed and scalability, improving load times by 40%.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
