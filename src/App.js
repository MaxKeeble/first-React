import './App.css';
import './normolize.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';


function App({data}) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <Content data={data.content}/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
