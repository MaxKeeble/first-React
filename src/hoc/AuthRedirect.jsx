import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Preloader } from "../components/common/Preloader/Preloader";

export const withAuthRedirect = (Component) => {
  let componentWithRedirect = ((props) => {
    if (props.isFetching) return <Preloader/>;
    if (props.isAuthorized) return <Component {...props} />;
    return <Navigate replace to='/login' />;
  });

  let mapStateToProps = (state) => ({
    isAuthorized: state.authorization.isAuthorized,
    isFetching: state.authorization.isFetching
  });
  let componentWithRedirectAndProps = connect(mapStateToProps)(componentWithRedirect);
  
  return componentWithRedirectAndProps;
};