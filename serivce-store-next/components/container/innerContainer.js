import styles from './container.module.scss';

const innercontainer = props => (
  <div className={[styles.container].join(' ')}>
    {props.children}
  </div>
);

export default innercontainer;