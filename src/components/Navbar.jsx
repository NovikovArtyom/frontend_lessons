import styles from '../App.module.css'

export function Navbar() {

  return (
    <>
    <div className={styles.navbar_container}>
        <div>
            <div className="styles navbar_row">
                <a href='/' alt='/'>Все задачи</a>
            </div>

            <div className="styles navbar_row">
                <a href='/' alt='/'>Добавить задачу</a>
            </div>
        </div>

        <div className="styles navbar_row">
            <a href='/' alt='/'>Информация о проекте</a>
        </div>
    </div>
    </>
  );
}