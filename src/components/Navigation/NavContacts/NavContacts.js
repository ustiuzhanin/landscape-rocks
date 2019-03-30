import React from 'react';

import Button from '../../UI/Button/Button';
import Phone from './Phone/Phone';

function navContacts() {
  return (
    <div>
      <p>Company Name</p>
      <Phone />
      <p>Mon - Fri: 9 - 5, Sat 9 - 2</p>
      <Button type='button'>Заказать Звонок</Button>
    </div>
  )
}

export default navContacts
