import './App.css';
import './normolize.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';


function App({ store }) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar data={store.state.friendsList} />
        <Content data={store.state.content} addPost={store.addPost.bind(store)} updatePostText={store.updatePostText.bind(store)} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
