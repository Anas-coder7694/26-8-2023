import React from 'react';

type TableRow = {
  id: number;
  userName: string;
  age: number;
  institute: string;
  isActive: boolean;
  category: string;
};

type CardProps = {
  data: TableRow;
};

function Card(props: CardProps) {
  const { id, userName, age, institute, isActive, category } = props.data;

  return (
    <div className="card" key={id}>
      <h2>{userName}</h2>
      <p>ID: {id}</p>
      <p>Age: {age}</p>
      <p>Institute: {institute}</p>
      <p>Active: {isActive ? 'Yes' : 'No'}</p>
      <p>Category: {category}</p>
    </div>
  );
}

export default Card;
