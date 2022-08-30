import './App.css';
import './normolize.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';


function App({ data, addPost }) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar data={data.friendsList} />
        <Content data={data.content} addPost={addPost} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
