import React from 'react'
import styles from './Button.module.css'

export default function Button({children, style}) {
  return (
    <>
        <button className={`${styles.button}`} style={style}>
            {children}
        </button>
    </> 
  )
}
