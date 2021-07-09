import React from 'react';
import axios from 'axios';
import './CreatePost.css';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState,convertToRaw, ContentState  } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import './textfield.css';
import { connect } from 'react-redux';
import { updatePost } from '../../actions';


class UpdatePost extends React.Component {
   
  state = {
    currentPost : '',
    editorState: EditorState.createEmpty(),
    postTitle:'',
    bgImg: null,
}

async componentDidMount(){
  window.scrollTo(0,0)
  try {
    const id = this.props.match.params.id
    
     if(id && id.length > 5){
        
         const res = await axios.get(`https://cosmogeeks-api.herokuapp.com/posts/${id}`,{withCredentials:true})
         if(res.data){
             const post = res.data
            const contentBlock = htmlToDraft(post.description);
            if (contentBlock) {
              const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
              const editorState = EditorState.createWithContent(contentState);  
              this.setState({editorState,postTitle:post.title, currentPost: post})
         }
       }
     }
  } catch (error) {
    console.log(error )
  }
}

onEditorStateChange = (editorState) => {
    this.setState({
        editorState,
    });
};

onTitleChange = (e) => {
   this.setState({postTitle: e.target.value});
}

onResetClick = e => {
  this.setState({postTitle: '', editorState : EditorState.createEmpty()})
}

onImageChange = e => {
  this.setState({bgImg : e.target.files[0]})
}

onPublishClick = async e => {
  e.preventDefault();
  console.log("HERE bro")
  const editorInHtml = `${draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))}`
  const fd = new FormData(); 
  fd.append('title',this.state.postTitle)
  fd.append('description',editorInHtml)
  fd.append('language','english')
  fd.append('genre',this.state.postTitle)
  if(this.state.bgImg){
  fd.append('bgImg',this.state.bgImg )}
  
  try {
    const res = await axios.patch(`https://cosmogeeks-api.herokuapp.com/posts/${this.state.currentPost._id}`, fd, {withCredentials:true})
    console.log(res)
    if(res.data){
      this.props.updatePost(res.data)
      this.onResetClick('e');
      this.props.history.push('/profile');
    }
  } catch (error) {
    console.log(error);
  }
}
  render(){
    const {editorState} = this.state;
  return( 
        <div className="Create-Post">
          
          <form className="create-form" onSubmit={this.onPublishClick} encType="multipart/form-data">

         
            <input className="create-title" type="text" placeholder="type title here..."
            onChange={this.onTitleChange} value={this.state.postTitle} required/>
            <button type="reset" className="btn-1" onClick={this.onResetClick}>Reset</button>
            <button type="submit" className="btn-2" >Publish</button>
          
          <br/> <br/><br/>
          <input className="create-image" type="file" onChange={this.onImageChange} ></input>
          <div className="Text-Field">
                <Editor 
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={this.onEditorStateChange}
                />
                
            </div> 

         </form>
      </div>
    );
};
}

export default connect(null,{updatePost})(UpdatePost);