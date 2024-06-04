import React from 'react';

const UserCard = ({ person }) => {
  console.log(person);

  return (
    <article className="user-card">
      <figure>
        <img src={person.picture.large} alt="person image" />
      </figure>
      <h2>{person.name.first} {person.name.last}</h2>
      <p>Género: {person.gender}</p>
      <p>Teléfono: {person.phone}</p>
      <p>Celular: {person.cell}</p>
      <p>Email: {person.email}</p>
    </article>
  );
};

export default UserCard;
