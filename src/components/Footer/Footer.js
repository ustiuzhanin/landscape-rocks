import React from 'react';

import styles from './Footer.module.css';
import ContactsSidebar from '../ContactsSidebar/ContactsSidebar';

function footer() {
  return (
    <footer className={styles.footer}>
      <h2>'Название компании'</h2>
      <p className={styles.text}>Ne per petentium explicari elaboraret, in propriae perpetua sit, reque solet dolorum ex nec. Accusam torquatos pri te. Ne pro alia ullamcorper. Dolorem indoctum no sed, equidem legendos efficiendi vis in, mei in eros ludus epicurei.</p>
      <ContactsSidebar />
      <p className={styles.copyright}>© ООО «Название компании», 2010−2019</p>
    </footer>
  )
}

export default footer
