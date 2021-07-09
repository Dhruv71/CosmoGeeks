import React from 'react';
import Input from '../customInput/Input';
import axios from 'axios';
import './resendVerification.scss';


class ResendVerification extends React.Component{
    state = {
        userEmail : '',
        errorMsg : { email : '', custom : ''}
    }
    
    onInputChange = name => (event) => {
        this.setState({userEmail : event.target.value.trim()})
    }

    onFormSubmit = async (event) => {
        event.preventDefault();

        const  { userEmail } = this.state;
        try {
             const res = await axios.post('https://cosmogeeks-api.herokuapp.com/users/resend-email', {userEmail : userEmail})
             if(res.data.isSend){
                 this.props.history.push('/verifyEmail')
             }
        } catch (e) {
             const errorMsg = { ...e.response.data.errors }
             this.setState({errorMsg : errorMsg })  
        }
    }
    render(){
        return(
            <div>

                <div className="Resend-verify">
                <div>
                <h1 className="Resend-title">Resend Verification email</h1>
                <p className="Resend-bodycopy">Please enter your register email address below to get verification mail</p>
                </div>
                <div>
                    <div>
                        {this.state.errorMsg.custom && <div>{this.state.errorMsg.custom}</div>}
                    </div>

                    <form onSubmit={this.onFormSubmit}>
                      <Input type="email" name="userEmail" placeholder="Email Address" 
                             value={this.state.userEmail} 
                             onInputChange={this.onInputChange} required 
                             error={this.state.errorMsg.email ? "error" : ""}/>
                      <div>
                        {this.state.errorMsg.email && <div className="Resendmail-error-mssg">{this.state.errorMsg.email}</div>}
                      </div>       
                      <button className="Resend-button">Send Email</button>
                    </form>
                    
                </div>
                </div>

            </div>
        );
    };
}

export default ResendVerification;