import { UserForm } from '../UserForm/UserForm';
import { useState, useEffect } from 'react';
import users from '../../data/Users.json';
import userTypes from '../../data/UserTypes.json';
import { UserFilter } from '../UserFilters/UserFilters';
import { Loader } from '../Loader/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';

export const UserTable = () => {
  const [filterName, setFilterName] = useState('');
  const [filterTypeId, setFilterTypeId] = useState('');
  const [filterDateFrom, setFilterDateFrom] = useState('');
  const [filterDateTo, setFilterDateTo] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFilteredUsers(users);
      setLoading(false);
    });
  }, []);

  const applyFilters = () => {
    setLoading(true);
    setTimeout(() => {
      let filteredUsers = users;

      if (filterName) {
        filteredUsers = filteredUsers.filter(user =>
          user.name.toLowerCase().includes(filterName.toLowerCase()),
        );
      }

      if (filterTypeId) {
        filteredUsers = filteredUsers.filter(
          user => user.type_id === parseInt(filterTypeId),
        );
      }

      if (filterDateFrom || filterDateTo) {
        const dateFrom = new Date(filterDateFrom);
        const dateTo = new Date(filterDateTo);
        filteredUsers = filteredUsers.filter(user => {
          const userVisitDate = new Date(user.last_visit_date);
          return userVisitDate >= dateFrom && userVisitDate <= dateTo;
        });
      }

      setFilteredUsers(filteredUsers);
      setLoading(false);
    }, 5000);
  };

  return (
    <>
      <UserFilter
        filterName={filterName}
        setFilterName={setFilterName}
        filterTypeId={filterTypeId}
        setFilterTypeId={setFilterTypeId}
        filterDateFrom={filterDateFrom}
        setFilterDateFrom={setFilterDateFrom}
        filterDateTo={filterDateTo}
        setFilterDateTo={setFilterDateTo}
        applyFilters={applyFilters}
        userTypes={userTypes}
      />
      {Loading && <Loader />}
      {!Loading && <UserForm users={filteredUsers} userTypes={userTypes} />}
    </>
  );
};
