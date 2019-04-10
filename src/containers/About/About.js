import React from 'react';

import styles from './About.module.css';

function about() {
  return (
    <section className={styles.about}>
      <h2>О компании</h2>
      <p>Lorem ipsum dolor sit amet, id duo ubique dictas appetere, ad enim animal maiorum vel. Moderatius elaboraret no vel, nostro petentium intellegam quo no. Nam bonorum adipiscing accommodare te, diam dictas mei ex, vis dicta propriae nominati eu. Laudem splendide mel ei, vel prima dicat prompta id. Vero saepe cu est, pro stet omnes placerat ei. Ius ad tacimates recusabo deseruisse, ut eros facete oportere vel.</p>
      <h3>We provide you with:</h3>
      <ul>
        <li>
          The highest recycle and reuse rates possible for every job.
        </li>
        <li>
          Competitive cost and time savings through innovative research and development.
        </li>
        <li>
          Thought out solutions that provide less need for additional contractors.
        </li>
        <li>
          100% percent safety measures to providing the safest job site ever for our clients and employees!
        </li>
        <li>
          Projects that are completed on time, every time.
        </li>
        <li>
          Installation of materials designed to reduce or eliminate the environmental impact of site development.
        </li>
        <li>
          Evaluation of property to determine the problem and to find the solution.
        </li>
      </ul>
    </section>
  )
}

export default about
