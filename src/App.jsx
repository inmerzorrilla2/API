import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';

function App() {
  const [users, setUsers] = useState([]);
  const [numUsers, setNumUsers] = useState(''); // Estado para la cantidad de usuarios

  const usersUrl = `https://randomuser.me/api/?results=${numUsers}`; // URL dinámica

  const handleNumUsersChange = (e) => {
    e.preventDefault();
    const value = e.target.value.trim().toLowerCase(); // Aplicar trim() y toLowerCase()
    setNumUsers(value);
  };

  const handleSearchClick = () => {
    if (numUsers !== '') {
      axios.get(usersUrl)
        .then(res => {
          setUsers(res.data.results);
          setNumUsers(''); // Vaciar el input después de obtener los resultados
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="container">
      <h1>Despliegue dinámico con método map</h1>
      <label htmlFor="numUsers">Cantidad de usuarios:</label>
      <input
        id="numUsers"
        type="number"
        value={numUsers}
        onChange={handleNumUsersChange}
        min="1"
        max="100"
      />
      <button onClick={handleSearchClick}>Buscar</button>
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
          <p>{numUsers !== '' ? 'Cargando datos...' : 'Ingrese la cantidad de usuarios y haga clic en Buscar'}</p>
        )
      }
    </div>
  );
}

export default App;

