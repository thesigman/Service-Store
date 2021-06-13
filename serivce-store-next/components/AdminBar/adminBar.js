import styles from './adminBar.module.scss';
import AdminButton from './adminButton';
import AdminInfo from './adminInfo';


export default function AdminBar() {
  return (
    <div className={[styles.adminBar ,'p-2'].join(' ')}>
      <AdminInfo></AdminInfo>
      <hr></hr>
      <AdminButton></AdminButton>
      <AdminButton></AdminButton>
      <AdminButton></AdminButton>
      <AdminButton></AdminButton>
      <AdminButton></AdminButton>
      <AdminButton></AdminButton>
      <AdminButton></AdminButton>
      <AdminButton></AdminButton>
      <AdminButton></AdminButton>
      <AdminButton></AdminButton>
      <AdminButton></AdminButton>
      <AdminButton></AdminButton>
    </div>
  )
}
