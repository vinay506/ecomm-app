import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
