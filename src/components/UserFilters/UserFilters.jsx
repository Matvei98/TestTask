import styles from './UserFilters.module.scss';

export const UserFilter = ({
  filterName,
  setFilterName,
  filterTypeId,
  setFilterTypeId,
  filterDateFrom,
  setFilterDateFrom,
  filterDateTo,
  setFilterDateTo,
  applyFilters,
  userTypes
}) => {
  return (
    <div className={styles.filter}>
    <div className={styles.items}> 
      <input
        className={styles.nameUsers}
        type="text"
        placeholder="Имя пользователя"
        value={filterName}
        onChange={e => setFilterName(e.target.value)}
      />
      <select className={styles.select} aria-label="5 types"
        value={filterTypeId}
        onChange={e => setFilterTypeId(e.target.value)}
      >
        <option value=""></option>
        {userTypes.map(type => (
          <option key={type.id} value={type.id}>{type.name}</option>
        ))}
      </select>
      <input
        type="date"
        value={filterDateFrom}
        onChange={e => setFilterDateFrom(e.target.value)}
      />
      <input
        type="date"
        value={filterDateTo}
        onChange={e => setFilterDateTo(e.target.value)}
      />
    </div> 
      <button className="btn btn-primary" type="submit" onClick={applyFilters}>Поиск</button>
    </div>
  );
};