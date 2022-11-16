import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Preloader } from "../components/common/Preloader/Preloader";
import { getIsAuthorized, getIsFetching } from "../redux/authorizationReducer";

export const withAuthRedirect = (Component) => {

  let componentWithRedirect = ((props) => {
    if (props.isFetching) return <Preloader />;
    if (props.isAuthorized) return <Component {...props} />;
    return <Navigate replace to='/login' />;
  });

  let mapStateToProps = (state) => ({
    isAuthorized: getIsAuthorized(state),
    isFetching: getIsFetching(state),
  });
  let componentWithRedirectAndProps = connect(mapStateToProps)(componentWithRedirect);

  return componentWithRedirectAndProps;
};