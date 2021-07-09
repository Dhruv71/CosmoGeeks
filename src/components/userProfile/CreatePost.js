import React from "react";
import axios from "axios";
import "./CreatePost.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import "./textfield.css";
import { connect } from "react-redux";
import { createPost } from "../../actions";
class CreatePost extends React.Component {
  state = {
    editorState: EditorState.createEmpty(),
    postTitle: "",
    bgImg: null,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  onTitleChange = (e) => {
    this.setState({ postTitle: e.target.value });
  };

  onResetClick = (e) => {
    this.setState({ postTitle: "", editorState: EditorState.createEmpty() });
  };

  onImageChange = (e) => {
    this.setState({ bgImg: e.target.files[0] });
  };

  onPublishClick = async (e) => {
    e.preventDefault();
    const editorInHtml = `${draftToHtml(
      convertToRaw(this.state.editorState.getCurrentContent())
    )}`;
    const fd = new FormData();
    fd.append("title", this.state.postTitle);
    fd.append("description", editorInHtml);
    fd.append("language", "english");
    fd.append("genre", this.state.postTitle);
    fd.append("bgImg", this.state.bgImg);

    try {
      const res = await axios.post("https://cosmogeeks-api.herokuapp.com/posts/create", fd, {
        withCredentials: true,
      });
      if (res.data) {
        this.props.createPost(res.data);
        this.onResetClick("e");
        this.props.history.replace("/profile");
      }
    } catch (error) {
      console.log(error, error.response.data);
    }
  };
  render() {
    const { editorState } = this.state;
    return (
      <div className="Create-Post">
        <form
          className="create-form"
          onSubmit={this.onPublishClick}
          encType="multipart/form-data"
        >
          <input
            className="create-title"
            type="text"
            placeholder="type title here..."
            onChange={this.onTitleChange}
            value={this.state.postTitle}
            required
          />
          <button type="reset" className="btn-1" onClick={this.onResetClick}>
            Reset
          </button>
          <button type="submit" className="btn-2">
            Publish
          </button>
          <br /> <br />
          <br />
          <input
            className="create-image"
            type="file"
            onChange={this.onImageChange}
            required
          ></input>
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
  }
}
export default connect(null,{createPost})(CreatePost);
