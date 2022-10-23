import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Form, Field } from 'react-final-form';
import { authorize } from "../../../redux/authorizationReducer";
import "./Login.css";

let LoginForm = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      {({ handleSubmit, pristine, form, submitting }) => (
        <form className="login-form"
          onSubmit={handleSubmit}> {/* Из компоненты Form (которая из библиотеки react-final-form) в props появляется handleSubmit, который вызывает props.onSubmit, передавая в качестве первого аргумента объект с данными формы  */}

          <Field className="login-form__email" name='email' component='input' type='email' placeholder='E-mail' />
          <Field className="login-form__password" name='password' component='input' type='password' placeholder='Password' />
          <label className="login-form__label">
            <Field name='rememberMe' component='input' type='checkbox' />
            <span className="login-form__span">Remember me</span>
          </label>
          <button className="login-form__submit-btn">OK</button>
        </form>
      )}
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

export default connect(mapStateToProps, { authorize })(Login);