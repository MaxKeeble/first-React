import './App.css';
import './normolize.css';
import HeaderContainer from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <Sidebar />
        <Content />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
