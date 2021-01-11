import React from 'react';
import { loadData } from './redux/actions/data';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.putData.data);
  const clickHandler = () => {
    dispatch(loadData());
  };

  return (
    <>
      <button onClick={clickHandler}>Click me</button>
      {data ? data.map((obj) => <p key={obj.id}>{obj.name}</p>) : ''}
    </>
  );
}

export default App;
