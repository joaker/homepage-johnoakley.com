import React from 'react';
import styles from './index.module.css';
import classNames from 'classnames';

const Resume = () => {
  return (
    <div className={styles.body}>
      <section className={styles.header}>
        <h1 className={styles.title}>Greetings!</h1>
        <h3 className={styles.subTitle}>
          I'm John Oakley.
        </h3>
      </section>
      <section className={styles.hero}>
      </section>
      <section className={classNames(styles.intro, styles.odd)}>
        <h2>Intro</h2>
        <p>
          I'm a software leader, husband, and father.
        </p>
      </section>
      <section className={classNames(styles.interests, styles.even)}>
        <h2>Interests</h2>
        <p>
          I enjoy software development, running moderate distances, and cooking.
        </p>
      </section>
      <section className={classNames(styles.interests, styles.odd)}>
        <h2>Work</h2>
        <p>
          Want to see an <a href="/moment">Analog Clock?</a>
        </p>
      </section>
      <section className={classNames(styles.contact, styles.even)}>
        <h2>Contact</h2>
        <p>
          <b>Email:</b>  <a href="mailto:jooakley@gmail.com">jooakley@gmail.com</a>
        </p>
        <p>
          <b>Calendly:</b>  <a href="https://calendly.com/jfo3">book time with me</a>
        </p>
      </section>

    </div>
  );
};

export default Resume;
