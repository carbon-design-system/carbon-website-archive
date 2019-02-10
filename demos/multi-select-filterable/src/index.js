import './styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { MultiSelect } from 'carbon-components-react';

function App() {
  const items = [
    {
      id: 'option-1',
      label: 'Option 1',
    },
    {
      id: 'option-2',
      label: 'Option 2',
    },
    {
      id: 'option-3',
      label: 'Option 3',
    },
    {
      id: 'option-4',
      label: 'Option 4',
    },
    {
      id: 'option-5',
      label: 'Option 5',
    },
  ];

  return (
    <div className="App">
      <MultiSelect.Filterable
        placeholder="Placeholder"
        items={items}
        onChange={({ selectedItems }) => {
          console.log(selectedItems);
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
