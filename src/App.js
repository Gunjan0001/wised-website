import './App.css';
import Login from './View/Login';
import MainPage from './components/Auth/MainPage';

function App() {
  return (
    <div className="m-5">
      <MainPage />
      <Login />
    </div>
  );
}

export default App;
