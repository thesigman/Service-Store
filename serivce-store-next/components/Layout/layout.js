import NavigationBar from "../Navigation/navigation";
import AdminBar from "../AdminBar/adminBar";
import styles from './layout.module.scss'
const Layout = props => (
  <div>
    <NavigationBar></NavigationBar>
    <div className="row h-100">
      <div className={['col-2', styles.adminCol].join(' ')}>
        <AdminBar />
      </div>
      <div className="col">
        {props.children}
      </div>
    </div>

  </div>
);

export default Layout;