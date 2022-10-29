import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Form } from 'react-final-form';
import { authorize } from "../../../redux/authorizationReducer";
import "./Login.css";
import { Input } from "../../common/FormControls/FormControls";
import { composeValidators, validators } from "../../../utils/validators/validators";

let loginValidator = composeValidators(validators.required, validators.minLength(4), validators.maxLength(20));
let passwordValidator = composeValidators(validators.required, validators.minLength(6), validators.maxLength(20));

let LoginForm = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      {(props) => {
        console.log('props: ', props);
        let { handleSubmit, submitErrors, submitting } = props;
        return (
          <form className="login-form" onSubmit={handleSubmit}> {/* Из компоненты Form (которая из библиотеки react-final-form) в props, ко всему прочему, появляется handleSubmit, который вызывает props.onSubmit, передавая в качестве первого аргумента объект с данными формы  */}

            <Input className="login-form__email" name='email' type='email' placeholder='E-mail' validate={loginValidator} />
            <Input className="login-form__password" name='password' type='password' placeholder='Password' validate={passwordValidator} />
            <label className="login-form__label">
              <Input className="login-form__checkbox" name='rememberMe' type='checkbox' />
              <span className="login-form__span">Remember me</span>
            </label>

            <div className="login-form__bottom">
              <button className="login-form__submit-btn" type='submit' disabled={submitting}>OK</button>
              {submitErrors && <span className="login-form__common-error">{submitErrors}</span>}
            </div>
          </form>
        );
      }}
    </Form>
  );
};

const Login = (props) => {
  if (props.isAuthorized) return <Navigate replace to='/profile' />;

  return (
    <>
      <h2 className="login__title">Login</h2>
      <LoginForm onSubmit={props.authorize} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.authorization.isAuthorized,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    authorize: (...args) => {
      return new Promise((resolve) => {
        dispatch(authorize(...args, resolve));
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);