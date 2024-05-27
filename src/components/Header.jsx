import styles from '../App.module.css'

export function Header() {

  return (
    <>
    <div className={styles.header}>
        <div className={styles.header_div}>
          <img src="https://www.svgrepo.com/show/530421/printer.svg" style={{width: 60, height: 60}}/>
        </div>

        <div className={styles.header_div}>
          <button className={styles.sign_up_button}>SIGN UP</button>
          <button className={styles.sign_in_button}>SIGN IN</button>
        </div>
    </div>
    </>
  );
}