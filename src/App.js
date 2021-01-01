import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadData } from './redux/actions';

function App() {
  console.log('render App');
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(loadData());
  };

  // React.useEffect(() => {
  //   console.log('data:', data);
  // }, [data]);

  return (
    <>
      <button onClick={clickHandler}>Click me</button>
      {data && <p>{data.id}</p>}
    </>
  );
}

export default App;
