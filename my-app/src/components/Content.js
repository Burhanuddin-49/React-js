import { useState } from "react";

const Content = () => {
  const [items, setitems] = useState([]);
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    // setitems((prev) => [...prev]);
    // console.log(value)
    // let arr = items
    // arr.push(value)
    // console.log(arr)
    setitems(prev => [...prev,value])
  };

  const handleInput = (e) => {
    setValue(e.target.value)
    // console.log('value change')
  };

  return (
    <>
      <h2>TODO</h2>
        <input value={value} onChange={handleInput} type="text" />
        <button onClick={handleSubmit} type="submit">Add</button>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Content;
