import React from 'react';

type TableRow = {
  id: number;
  userName: string;
  age: number;
  institute: string;
  isActive: boolean;
  category: string;
};

type TableProps = {
  data: TableRow[];
};

function Table(props: TableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>User Name</th>
          <th>Age</th>
          <th>Institute</th>
          <th>Active</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.userName}</td>
            <td>{item.age}</td>
            <td>{item.institute}</td>
            <td>{item.isActive ? 'Yes' : 'No'}</td>
            <td>{item.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
