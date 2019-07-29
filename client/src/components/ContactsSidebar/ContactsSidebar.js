import React from 'react';

import styles from './ContactsSidebar.module.css';
import Phone from './Phone/Phone';

function contactsSidebar() {
  return (
    <aside className={styles.contacts}>
      <h2>Company Name</h2>
      <Phone />
      
      <a href='mailto:youremailaddress'>
        <svg version="1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 11"><g fill="#030104"><path d="M7,9L5.268,7.484l-4.952,4.245C0.496,11.896,0.739,12,1.007,12h11.986 c0.267,0,0.509-0.104,0.688-0.271L8.732,7.484L7,9z"/><path d="M13.684 2.271C13.504 2.103 13.262 2 12.993 2H1.007C.74 2 .498 2.104.318 2.273L7 8 13.684 2.271zM0 2.878L0 11.186 4.833 7.079zM9.167 7.079L14 11.186 14 2.875z"/></g></svg>
        emailaddress@gmail.com
      </a>

      <p>
        <svg version="1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 550 500"><path d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M255,459c-112.2,0-204-91.8-204-204S142.8,51,255,51s204,91.8,204,204S367.2,459,255,459z"/><path d="M267.75 127.5L229.5 127.5 229.5 280.5 362.1 362.1 382.5 328.95 267.75 260.1z"/></svg>
        Mon - Fri: 9 - 5, Sat 9 - 2
      </p>
    </aside>
  )
}

export default contactsSidebar
