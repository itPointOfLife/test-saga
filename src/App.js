import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadData } from './redux/actions';

function App() {
  console.log('render App');
  const data = useSelector((state) => state.data.todo);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(loadData());
  };

  return (
    <>
      <button onClick={clickHandler}>Click me</button>
      {data.length
        ? data.map((obj) => (
            <p key={obj.id}>
              {obj.id}: {obj.username}
            </p>
          ))
        : 'No data yet :('}
    </>
  );
}

export default App;
