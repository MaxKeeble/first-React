import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

export const withAuthRedirect = (Component) => {
  let componentWithRedirect = ((props) => {
    if (props.isAuthorized) return <Component {...props} />;
    return <Navigate replace to='/login' />;
  });

  let mapStateToProps = (state) => ({
    isAuthorized: state.authorization.isAuthorized
  });
  let componentWithRedirectAndProps = connect(mapStateToProps)(componentWithRedirect);

  return componentWithRedirectAndProps;
};