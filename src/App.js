import React, { useEffect } from 'react';
import './App.css';
import './normolize.css';
import HeaderContainer from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsInitialized, initialize } from './redux/appReducer';
import { Preloader } from './components/common/Preloader/Preloader';
// import { Pagination } from './components/common/Pagination/Pagination';

const App = React.memo(function (props) {
  // return <BrowserRouter>
  //   <Pagination {...{
  //     pagesNumber: 23,
  //     currentPageNumber: 23,
  //     isDisabled:true
  //   }} />
  // </BrowserRouter>;

  const initialize = props.initialize;
  useEffect(() => {
    initialize();
  }, [initialize]);

  if (props.isInitialized)
    return (
      <HashRouter>
        <div className="App">
          <HeaderContainer />
          <Sidebar />
          <Content />
          <Footer />
        </div>
      </HashRouter>
    );

  return <Preloader />;
});


const mapStateToProps = (state) => ({
  isInitialized: getIsInitialized(state)
});
const mapDispatchToProps = (dispatch) => ({
  initialize: () => {
    dispatch(initialize());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
