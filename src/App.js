import './App.css';
import './normolize.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';


function App({ store }) {
  let state = store.getState();
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar data={state.friendsList} />
        <Content profilePageData={state.profilePage} messagesPageData={state.messagesPage} dispatch={store.dispatch} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
