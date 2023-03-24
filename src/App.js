import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems([...items, item]);
  }

  function removeItem(index) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  return (
    <div>
      <AddItem onAddItem={addItem} />
      <ul>
        {items.map((item, index) => (
          <Item key={index} item={item} onRemove={() => removeItem(index)} />
        ))}
      </ul>
    </div>
  );
}

function AddItem({ onAddItem }) {
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      onAddItem(inputValue);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button type="submit">追加</button>
    </form>
  );
}

// function Item({ item, onRemove }) {
//   return (
//     <li>
//       {item}
//       <button onClick={onRemove}>×</button>
//     </li>
//   );
// }

function Item({ item, onRemove }) {
  return (
    <li style={{ display: "flex", alignItems: "center" }}>
      <button onClick={onRemove}>×</button>
      <span>{item}</span>
    </li>
  );
}



export default App;
