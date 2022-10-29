import React from 'react';
import './App.css';
import './normolize.css';
import HeaderContainer from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { initialize } from './redux/appReducer';
import { Preloader } from './components/common/Preloader/Preloader';


class App extends React.Component {

  componentDidMount() {
    this.props.initialize();
  }

  render() {
    if (this.props.isInitialized)
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

    return <Preloader />;
  }
}

const mapStateToProps = (state) => ({
  isInitialized: state.app.isInitialized
});
const mapDispatchToProps = (dispatch) => ({
  initialize: () => {
    dispatch(initialize());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
