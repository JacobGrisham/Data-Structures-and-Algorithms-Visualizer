import styles from '../assets/styles/table.module.scss';

export default function Table() {

  return (
    <section>
      <table className={styles.table}>
        <tbody><tr id="data"></tr></tbody>
      </table>
    </section>
  )
}