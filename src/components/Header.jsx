import styles from '../App.module.css'

export function Header() {

  return (
    <>
    <div className={styles.header}>
        <div className={styles.header_div}>
          <img src="https://www.svgrepo.com/show/530421/printer.svg" style={{width: 60, height: 60}}/>
        </div>

        <div className={styles.header_div}>
        <a href="/" alt="" style={{margin: 10}}>
          SIGN UP
        </a>

        <a href="/" alt="">
          SIGN IN
        </a>
        </div>
    </div>
    </>
  );
}