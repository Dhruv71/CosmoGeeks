import React from 'react';
import Input from '../customInput/Input';
import { Field, reduxForm } from "redux-form";
import {Link} from 'react-router-dom';
import './signup.scss'; 
import { connect } from 'react-redux';
import { resetErrorsAndForm, tryCreateUser } from '../../actions';

class Signup extends React.Component{
    state ={
        disabled: false,
        loading : false,
    }

    componentWillUnmount(){
        this.props.resetErrorsAndForm('signUpForm')
    }

    onSubmit = formValues => {
        this.props.tryCreateUser(formValues)
    }

    render(){
        const { errorMsg, errors} = this.props;
        const { loading} = this.state;
        
        return(
            <div className="signup">

                <div className="signup-patternimage"></div>
                

                <div className="signup-container">
                 
                 <div className="signup-title"><h2>Sign Up</h2></div>
                 <div className="signup-line"></div>
                 {errorMsg.custom ? <div className = "error-msg">{errorMsg.custom}</div> : null}   
                 <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form_data" type="post">  

                <Field
                    name="name"
                    type="text"
                    component={Input}
                    placeholder="User Name"
                    disabled={this.state.disabled ? "disabled" : null}
                    required={true}
                    error={errors.name}
                /> 
                 <div className="error-mssg" > 
                 { errorMsg.name ?  <div className="error-msg" >{errorMsg.name}</div> : null}
                 </div>
                 <Field 
                    type="number" 
                    name="age" 
                    component={Input}
                    placeholder="age (eg. 20)"
                    disabled = {(this.state.disabled)? "disabled" : ""}
                    required={true} 
                    error={errors.age}
                  />

                  <div className="error-mssg">
                  { errorMsg.age ?  <div className="error-msg" >{errorMsg.age}</div> : null}
                  </div>

                  <Field 
                    type="email" 
                    name="email"
                    component={Input} 
                    disabled = {(this.state.disabled)? "disabled" : ""} 
                    placeholder="Email Address"   
                    required={true} 
                    error={errors.email}
                  />

                  <div className="error-mssg">
                  { errorMsg.email ?  <div className="error-msg" >{errorMsg.email}</div> : null}
                  </div>

                  <Field 
                    type="password" 
                    component={Input}
                    disabled = {(this.state.disabled)? "disabled" : ""}
                    name="password" 
                    placeholder="Password"
                    required={true} 
                    error = {errors.password}
                  />
                  <div className="error-mssg">
                  { errorMsg.password ?  <div className="error-msg" >{errorMsg.password}</div> : null}
                  </div>

                  <Field 
                    type="password" 
                    component={Input}
                    disabled = {(this.state.disabled)? "disabled" : ""}
                    name="confirmPassword" 
                    placeholder="Confirm Password"
                    required={true} 
                    error = {errors.password}
                  />
                   <div className="error-mssg">
                  { errorMsg.password ?  <div className="error-msg" >{errorMsg.password}</div> : null}
                  </div>

                  <button className="signup-submit" type="submit"  disabled={loading}>
                      {
                          loading &&
                          <div className="container">
                            <div className="circle circle-1"></div>
                            <div className="circle circle-2"></div>
                            <div className="circle circle-3"></div>
                            <div className="circle circle-4"></div>
                            <div className="circle circle-5"></div>
                            </div>
                      }
                      
                      { !loading && <span>Sign Up</span>}
                      
                  </button>   
                 </form>
                 
                    <span className="signup-redirect">Already have account? <Link to="/login"><u>Log In</u></Link></span>
                
                </div>    

            </div>
        );
    };
}

const formedSignUp = reduxForm({
    form : 'signUpForm'
})(Signup)

const mapStateToProps = (state) => {
    return { errors : state.auth.errors , errorMsg : state.auth.errorMsg }
}

export default connect(mapStateToProps,{tryCreateUser,resetErrorsAndForm})(formedSignUp);