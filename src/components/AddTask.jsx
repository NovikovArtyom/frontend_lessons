import styles from '../App.module.css'

export function AddTask() {

  return (
    <>
    <div className={styles.addtask_container}>
        <form className={styles.addtask_form}>
            <input className={styles.addtask_tasktitle} type="text" placeholder="Наименование задачи" />
            <input className={styles.addtask_taskdescription} type="text" placeholder="Описание задачи" />
            <button className={styles.addtask_submit} type='submit'>Сохранить</button>
        </form>
    </div>
    </>
  );
}