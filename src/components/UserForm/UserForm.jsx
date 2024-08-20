import styles from './UserForm.module.scss';

export const UserForm = ({ users, userTypes }) => {
  return (
    <table className="table table-bordered">
      <thead className="table-success">
        <tr className={styles.list}>
          <th>Логин</th>
          <th>Пароль</th>
          <th>Имя пользователя</th>
          <th>Тип пользователя</th>
          <th>Дата последнего визита</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id} className={styles.users}>
            <td>{user.login}</td>
            <td>{user.password}</td>
            <td>{user.name}</td>
            <td>{userTypes.find(type => type.id === user.type_id).name}</td>
            <td>{user.last_visit_date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
