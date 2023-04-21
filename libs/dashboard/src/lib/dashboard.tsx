import styles from './dashboard.module.scss';

/* eslint-disable-next-line */
export interface DashboardProps {
  title: string
}

export function Dashboard(props: DashboardProps) {
  return (
    <div className={styles['container']}>
      <h1>Dashboard {props.title}</h1>
    </div>
  );
}

export default Dashboard;
