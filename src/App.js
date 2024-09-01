import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LoginForm />
      </div>
    </Provider>
  );
}

export default App;
