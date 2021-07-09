import React from "react";
import Modal from "react-modal";
import "./userpost.css";
import parse from "html-react-parser";
import DP from '../userProfile/assets/dp.png';
import LikeIcon from './assest/like.svg'
import languages from './assest/language'
import axios from 'axios'

Modal.setAppElement("#root");

class UserPost extends React.Component  {
   
  state={
    modalIsOpen : false,
    selectedLang : "English",
    translated:null,
    tTitle:null
  }

  setmodalIsOpen = val => this.setState({modalIsOpen : val})

   b64 = new Buffer.from(this.props.bgImg).toString("base64");
    
  onSelectChange = async e => {
    
    this.setState({selectedLang : e.target.value})
 try {
  const res = await axios.get(`https://cosmogeeks-api.herokuapp.com/posts/translate/${this.props.postId}?target=${e.target.value}`,
               {withCredentials:true}) 
  console.log(res.data) 
  if(res.data){
    this.setState({translated : res.data.desc.translation, tTitle : res.data.title.translation})
  }
 } catch (error) {
   console.log(error)
 }
 

  }
render(){
  const dp = this.props.avatar.data ? new Buffer.from(this.props.avatar.data).toString("base64") : this.props.avatar
  return (
    <div className="User-Post">
      <div className="Post">
        <div className="post-owner">
          <div>
          { dp?
            <img className="post-user-image" src={`data:image/png;base64,${dp}`} alt="profile" /> :
            <img className="post-user-image" src={DP} alt="profile" />
          }  
          
          </div>
          <div className="post-username">{this.props.uname}</div>
        </div>
        <div className="post-image">
          <img src={`data:image/png;base64,${this.b64}`} alt="img" />
        </div>

        <h2 className="post-title">{this.props.title}</h2>
        <div className="post-discription">
          {parse(this.props.description.slice(0, 450))}<span>.....click a button to Read more</span>
        </div>

        <div className="post-line"></div>

        <div className="post-bottom-part">
          <div className="post-like-share">
            <img src={LikeIcon} alt="like icon"></img>
            <h2> Like </h2>
          </div>
          <div className="post-buttons">
            {this.props.userProfile && (
              <> 
                <button
                  className={`post-button-edit`}
                  onClick={() => this.props.onEditClick(this.props.postId)}
                >
                  Edit
                </button>
                <button
                  className={`post-button-red`}
                  onClick={() => this.props.onDeleteClick(this.props.postId)}
                >
                  Delete
                </button>
              </>
            )}
            <button
              className={`post-button`}
              onClick={() => this.setmodalIsOpen(true)}
            >
              Read More
            </button>
          </div>
        </div>
        <div>
          <Modal
            className="post-full-size"
            isOpen={this.state.modalIsOpen}
            onRequestClose={() => this.setmodalIsOpen(false)}
            style={{
              overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.60)",
                zIndex: 1000,
              },
              content: {
                position: "absolute",
                top: "40px",
                left: "40px",
                right: "40px",
                bottom: "40px",
                border: "1px solid #ccc",
                background: "#fff",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "4px",
                outline: "none",
                padding: "20px",
              },
            }}
          >
            <div className="post-owner-big">
            <div>
          { dp ?
            <img className="post-user-image" src={`data:image/png;base64,${dp}`} alt="profile" /> :
            <img className="post-user-image" src={DP} alt="profile" />
          }  
          
          </div>
          <div className="post-username">{this.props.uname}</div>
            </div>

            <img
              src={`data:image/png;base64,${this.b64}`}
              alt=""
              className="post-image-big"
              height="350px"
              width="950px"
            />

            <h2 className="post-title-big">{this.state.tTitle ? this.state.tTitle : this.props.title}</h2>
            <div className="post-discription-big">{this.state.translated ?
                parse(this.state.translated) : parse(this.props.description)}</div>

            <div className="post-line-big"></div>

           
              <div className="post-bottom-part-big">
                <div className="post-like-share">
                  <img src={LikeIcon} alt="like icon"></img>
                  <h2> Like </h2>
                </div>
                
                <div className="lang-list">
                  <select name="lang" value={this.state.selectedLang} onChange={this.onSelectChange}>
                    {languages.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>

                <div className="close-button-div">
                  <button
                    className="close-button"
                    onClick={() => this.setmodalIsOpen(false)}
                  >
                    Close
                  </button>
                </div>            
          </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};
}
export default UserPost;
