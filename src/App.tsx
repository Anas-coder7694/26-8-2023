import React from 'react';
import Input from './Components/Input';
import Button from './Components/Button';
import Select from './Components/Select';
import Table from './Components/Table';
import Card from './Components/Card';

type Option = {
  label: string;
  value: string;
};

type TableRow = {
  id: number;
  userName: string;
  age: number;
  institute: string;
  isActive: boolean;
  category: string;
};

function App() {
  const selectOptions: Option[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    // ... more options
  ];

  const tableData: TableRow[] = [
    {
      id: 1,
      userName: 'John Doe',
      age: 25,
      institute: 'University A',
      isActive: true,
      category: 'Student',
    },
    {
      id: 2,
      userName: 'Jane Smith',
      age: 30,
      institute: 'College B',
      isActive: false,
      category: 'Teacher',
    },
    // ... more data
  ];

  return (
    <div>
      <Input type="text" value="" onChange={(e) => console.log(e.target.value)} />
      <Button label="Click me" onClick={() => console.log('Button clicked')} />
      <Select label="Select an option" value="option1" onChange={(e) => console.log(e.target.value)} optionsList={selectOptions} />
      <Table data={tableData} />
      {tableData.map(item => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}

export default App;
