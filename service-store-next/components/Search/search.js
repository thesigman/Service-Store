import styles from './search.module.scss'
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default function Search() {
  return (
    <input type="text" className={[styles.faIcon, styles.Search].join(' ')} placeholder="&#xf002; Search" />

  )
}