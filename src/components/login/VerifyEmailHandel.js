import React from 'react';
import {Link} from 'react-router-dom';
const VerifyEmailHandel = (props) => {
    return(
        <div>
            <h2>Verification mail send suceesfully, Please go and Verify your email</h2>
            <p>Kindly Verify your email account in 24 hours, then your Verification Link will be expired.</p>
            <p> <b>message :</b> Check your spam folder if email in not found. If you did not recieved email in 24 hour then 
              please create your account again.</p>
            <h3>If verification done suceesfully, <u><Link to="/login">click here</Link> </u> to login.</h3>
        </div>
    );
};

export default VerifyEmailHandel;