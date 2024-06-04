import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';

function App() {
  const [users, setUsers] = useState([]);
  const [numUsers, setNumUsers] = useState(5); // Estado para la cantidad de usuarios

  const usersUrl = `https://randomuser.me/api/?results=${numUsers}`; // URL dinámica

  useEffect(() => {
    axios.get(usersUrl)
      .then(res => setUsers(res.data.results))
      .catch(err => console.log(err));
  }, [numUsers]); // Vuelve a ejecutar cuando numUsers cambia

  console.log(users);

  return (
    <div className="container">
      <h1>Despliegue dinámico con método map</h1>
      <label htmlFor="numUsers">Cantidad de usuarios:</label>
      <input
        id="numUsers"
        type="number"
        value={numUsers}
        onChange={(e) => setNumUsers(e.target.value)}
        min="1"
        max="100"
      />
      {
        users.length > 0 ? (
          <div className="user-list">
            {
              users.map((user, userIndex) => (
                <UserCard key={userIndex} person={user} />
              ))
            }
          </div>
        ) : (
          <p>Cargando datos...</p>
        )
      }
    </div>
  );
} 

export default App;
