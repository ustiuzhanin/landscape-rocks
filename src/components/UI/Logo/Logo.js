import React from 'react'

function Logo(props) {
  return (
    <img className={props.className} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-0Y76Y0YewY9wVgAbcupva_30qFbANKjjncZQWCIzbOG_3pdO' alt='logo' width={props.width} height={props.height} />
  )
}

export default Logo
