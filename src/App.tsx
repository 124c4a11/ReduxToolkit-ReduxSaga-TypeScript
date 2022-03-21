import { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { usersFetchRequest } from './store/reducers/usersReducer/usersReducer';


function App() {
  const { pending, users, error } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(usersFetchRequest());
  }, [dispatch]);

  return (
    <div className="App">
      {pending && <h2>Loading...</h2>}
      {error && <h2>Error: {error}</h2>}
      {
        users &&
        <ul>
          {users.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      }
    </div>
  );
}


export default App;
