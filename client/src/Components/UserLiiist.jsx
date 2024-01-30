import React, { useEffect } from 'react';
import { getusers } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from './UserCard';

const UserLiiist = () => {
  const { loading, users } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    // Invoke the dispatch function
    dispatch(getusers());
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      {loading ? (
        <h1>Loading ... </h1>
      ) : (
        <>
          {React.Children.toArray(users.map((el) => (
            <UserCard user={el} />
          )))}
        </>
      )}
    </div>
  );
};

export default UserLiiist;
