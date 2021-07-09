import React from "react";
import "./EditProfile.css";
import Input from "../customInput/Input";
import "../login/signup.scss";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { fetchUser, tryEditProfile } from '../../actions'

class EditProfile extends React.Component {

  componentDidMount(){
    console.log("in Mount")
    this.props.fetchUser()
  }

  renderInput = ({ input, type, meta }) => {

    return (
        <input
          name={input.name}
          type={type}
          onChange={event => this.handleChange(event, input)}
        />
    );
  };

  handleChange = (event, input) => {
    event.preventDefault();
    let imageFile = event.target.files[0];
    console.log(imageFile)
    if (imageFile) {
      const localImageUrl = URL.createObjectURL(imageFile);
      const imageObject = new window.Image();

      imageObject.onload = () => {
        imageFile.width = imageObject.naturalWidth;
        imageFile.height = imageObject.naturalHeight;
        input.onChange(imageFile);
        URL.revokeObjectURL(imageFile);
      };
      imageObject.src = localImageUrl;
    }
  };

  onSubmit =  (formValues) => {
    
    this.props.tryEditProfile(formValues)
     
  };

  render() {
    return (
      <div className="Edit-container">
        <form
          className="edit_form_data"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          encType="multipart/form-data"
        >
          <h3> User Name </h3>
          <Field
            type="text"
            name="name"
            placeholder="User Name"
            required={false}
            disabled=""
            component={Input}
          />

          <h3> Bio </h3>
          <Field
            type="text"
            name="bio"
            placeholder="Add bio here..."
            required={false}
            disabled=""
            component={Input}
          />
          <h3>Age</h3>
          <Field
            type="number"
            name="age"
            placeholder="21"
            required={false}
            disabled=""
            component={Input}  
          />
          <h3>Profile Picture</h3>
          <Field type="file" name="avatar" value="" component={this.renderInput} />
          <br />
          <button type="submit" className="signup-submit">
            Save Changes
          </button>
        </form>
      </div>
    );
  }
}
const formedEditProfile = reduxForm({
  form : 'editProfileForm',
  enableReinitialize: true
})(EditProfile)

const mapStateToProps = (state) => {
  if(state.auth.user){
   const {name, age, bio} = state.auth.user
   return {initialValues : {name,bio,age}}
  }
  return { initialValues : state.auth.user}
}

export default connect(mapStateToProps,{fetchUser,tryEditProfile}) (formedEditProfile);
