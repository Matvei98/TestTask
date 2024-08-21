import { UserTable } from 'components/UserTable/UserTable';
import styles from './App.module.scss';
export const App = () => {
  return (
    <div className={styles.app}>  
      <UserTable />
    </div>
  );
};
