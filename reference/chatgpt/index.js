import React from 'react';

const Resume = () => {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#FFFFFF',
      color: '#000000',
    },
    header: {
      backgroundColor: '#003366',
      color: '#FFFFFF',
      padding: '20px',
      textAlign: 'center',
    },
    intro: {
      backgroundColor: '#F2F2F2',
      padding: '20px',
    },
    section: {
      padding: '20px',
    },
    sectionOdd: {
      backgroundColor: '#FFFFFF',
    },
    sectionEven: {
      backgroundColor: '#F9F9F9',
    },
    h2: {
      color: '#003366',
      borderBottom: '2px solid #CCCCCC',
      paddingBottom: '10px',
    },
    h3: {
      color: '#6A5ACD',
      marginTop: '30px',
      marginBottom: '5px',
    },
    company: {
      color: '#DAA520',
      fontWeight: 'bold',
    },
    date: {
      fontStyle: 'italic',
      color: '#808080',
      marginBottom: '15px',
    },
    ul: {
      marginTop: 0,
    },
    li: {
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.header}>
        <h1>John Oakley</h1>
      </div>
      <div style={styles.intro}>
        <p><strong>Hello.</strong></p>
        <p>
          A seasoned software engineer and technology leader with over 15 years of experience in
          crafting high-performance, user-centric web applications and leading engineering teams to success.
        </p>
      </div>
      <div style={{ ...styles.section, ...styles.sectionOdd }}>
        <h2 style={styles.h2}>Executive Bio</h2>
        <p>
          John Oakley is a dedicated technology professional with a strong background in software development
          and engineering management. Specializing in JavaScript and front-end technologies, he combines
          technical expertise with strategic leadership to deliver innovative solutions that enhance user
          experience and drive business growth. John's passion for leveraging emerging technologies, including
          AI, has been instrumental in optimizing performance and fostering collaborative, high-performing teams.
        </p>
      </div>
      <div style={{ ...styles.section, ...styles.sectionEven }}>
        <h2 style={styles.h2}>Professional Experience</h2>

        <h3 style={styles.h3}>Director of Software Engineering</h3>
        <p style={styles.company}>Luminary Strategy Partners</p>
        <p style={styles.date}>June 2018 – Present</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Led a team of 25 engineers in developing scalable web applications for clients across various industries.
          </li>
          <li style={styles.li}>
            Implemented agile methodologies to improve productivity and reduce project delivery times by 30%.
          </li>
          <li style={styles.li}>
            Spearheaded the integration of AI tools to enhance development processes and product features.
          </li>
        </ul>

        <h3 style={styles.h3}>Engineering Manager</h3>
        <p style={styles.company}>FTD Companies</p>
        <p style={styles.date}>March 2014 – May 2018</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Managed a cross-functional team of 15 developers, designers, and QA engineers.
          </li>
          <li style={styles.li}>
            Oversaw the redesign of the company's e-commerce platform, resulting in a 25% increase in user engagement.
          </li>
          <li style={styles.li}>
            Mentored junior engineers, fostering a collaborative and innovative team environment.
          </li>
        </ul>

        <h3 style={styles.h3}>Senior Front-End Engineer</h3>
        <p style={styles.company}>Citadel LLC</p>
        <p style={styles.date}>January 2010 – February 2014</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Developed high-performance web applications using JavaScript, React, and other modern technologies.
          </li>
          <li style={styles.li}>
            Collaborated closely with UX designers to create intuitive and responsive user interfaces.
          </li>
          <li style={styles.li}>
            Optimized applications for maximum speed and scalability, improving load times by 40%.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
