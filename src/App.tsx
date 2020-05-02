import React from 'react';
import TodoApp from './containers/TodoApp';
import CounterContainer from './containers/CounterContainer';

function App() {
  return (
    <>
      <CounterContainer />
      <hr />
      <TodoApp />
    </>
  );
}

export default App;
