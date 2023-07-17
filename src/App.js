import React, { useContext, useState, useEffect } from 'react';
import Auth from './components/Auth';
import { AuthContext } from './context/auth-context';
import Ingredients from './components/Ingredients/Ingredients';

// const App = props => {
// const authContext = useContext(AuthContext);

// let content = <Auth />;

// if(authContext.isAuth) {
//   content = <Ingredients />;
// }

// return content;
// };

// export default App;

function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    document.title = input;
    console.log('useEffect ran');
  }, [input]);


  return (
    <>
      <h1>useState - {counter}</h1>
      <h2>{input}</h2>
      <h1 onClick={() => setCounter((prevCounter) => prevCounter + 1)}>Use Effect </h1>
      <input onChange={(e) => setInput(e.target.value)} type="text" />
    </>
  )

}

export default App;