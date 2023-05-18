import React from "react";
import styles from"./Footer.module.css"

const Footer = () => {
  return (
    <>
      <footer className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.flex}>
            <ul className={styles.box}>
              <li>Terms of Use</li>
              <li>Blog</li>
              <li>Watch List</li>
            </ul>
            <p></p>
          </div>
          <div className={styles.box}>
            <h3>Follow Us</h3>
          
            <i className='fab fa-facebook-f'></i>
            <i className='fab fa-github'></i>

          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
