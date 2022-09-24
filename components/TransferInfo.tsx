import styles from './TransferInfo.module.css'
import clsx from 'clsx'

type Props = {
  label: string
  value: string | number
  isScroll?: boolean
}

export const TransferInfo = ({ label, value, isScroll }: Props) => {
  return (
    <div
      className={
        isScroll ? clsx(styles.attribute, styles.scroll) : styles.attribute
      }
    >
      {label && <div className={styles.label}>{label}: </div>}
      <div className={styles.value}>{value}</div>
    </div>
  )
}
