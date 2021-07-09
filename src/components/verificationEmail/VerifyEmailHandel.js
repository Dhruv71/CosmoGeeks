import React from 'react';
import {Link} from 'react-router-dom';
import './VerifyEmailHandle.css';

const VerifyEmailHandel = (props) => {
    return(
        <div>
             <div className="Verify-page">

            <div className="VerifyMessg-Container">

            <h2>Verification mail send suceesfully, Please go and Verify your email</h2><br/>
            <p>Kindly Verify your email account in 24 hours, then your Verification Link will be expired.</p><br/>
            <p> <b>message:</b> Check your spam or promotion folder if email is not found in inbox. </p><br></br>
            <p>if you did not receive email in few minutes, click on <u><Link to="/resend-verification">
                resend Verification email</Link></u> </p>
            <h3 className="proceding">If verification done suceesfully, <u><Link to="/login">click here</Link> </u> to login.</h3>
            

            </div>

            </div>
        </div>
    );
};

export default VerifyEmailHandel;