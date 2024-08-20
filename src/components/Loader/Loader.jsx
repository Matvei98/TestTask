import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className="spinner-border text-primary" role="status">
      </div>
    </div>
  );
};
