import React from "react";
import { Link } from "react-router-dom";
import Input from "../customInput/Input"
import { Field, reduxForm } from "redux-form";
import "./login.css";
import { connect } from "react-redux";
import { trySignIn, resetErrorsAndForm } from "../../actions";

class Login extends React.Component {
  
  onSubmit = (formValues) => {
    this.props.trySignIn(formValues)
  };

  componentWillUnmount(){
    this.props.resetErrorsAndForm('loginForm')
  }

  render() {
     const { errorMsg, errors } = this.props;
    return (
      <div className="login">
        <div className="login-patternimage"></div>

        <div className="login-container">
          <div className="login-title">
            <h2>Log in</h2>
          </div>
          <div className="login-line"></div>
          {errors.custom ? (
            <div className="login-error-msg">{errorMsg.custom}</div>
          ) : null}
          <form onSubmit={this.props.handleSubmit(this.onSubmit)} 
          className="form_data">
            
            <Field
              name="email"
              type="email"
              component={Input}
              placeholder="example@xyz.com"
              disabled=""
              required={true}
              error={errors.email}
            />

            <div className="error-mssg">
              {errorMsg.email ? (
                <div className="error-msg">{errorMsg.email}</div>
              ) : null}
            </div>

            <Field
              name="password"
              type="password"
              component={Input}
              placeholder="password"
              required={true}
              disabled=""
              error={errors.password}
            />
            <div className="error-mssg">
              {errorMsg.password ? (
                <div className="error-msg">{errorMsg.password}</div>
              ) : null}
            </div>

            <div className="login-forgot">Forgot password?</div>

            <button className="login-submit">Log in</button>
          </form>

          <span className="login-redirect">
            Don't have account?{" "}
            <Link to="/signup">
              <u>Create Account</u>
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

const formedLogin = reduxForm({
  form : 'loginForm'
})(Login);

const mapStateToProps = (state) => {
  return { errors : state.auth.errors, errorMsg : state.auth.errorMsg }
}

export default connect(mapStateToProps,{trySignIn,resetErrorsAndForm})(formedLogin)