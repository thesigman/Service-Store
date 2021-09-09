import NavigationBar from "../Navigation/navigation";
import AdminBar from "../AdminBar/adminBar";
import styles from './layout.module.scss'
const Layout = props => (
  <div>
    <NavigationBar></NavigationBar>
    <div className="row h-100">
      <div className={['col-2', styles.adminCol].join(' ')}>
        <AdminBar user={props.user}/>
      </div>
      <div className="col">
        {props.children}
      </div>
    </div>

  </div>
);

export default Layout;