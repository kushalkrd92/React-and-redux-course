import { useContext, useRef } from "react";
import { PostList } from "../store/show-posts-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const {addPost} = useContext(PostList);
  const navigate = useNavigate();

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const viewsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const views = viewsElement.current.value;
    const tags = tagsElement.current.value.split(' ');
    
    userIdElement.current.value = '';
    postTitleElement.current.value = '';
    postBodyElement.current.value = '';
    viewsElement.current.value = '';
    tagsElement.current.value = '';

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        userId: userId,
        views: views,
        tags: tags
      })
    })
    .then(res => res.json())
    .then(post => {
      addPost(post);
      navigate('/');
    }); 
  }

    return <form className="c-card createPost" onSubmit={handleSubmit}>
    <div className="mb-3 ">
      <label htmlFor="userId" className="form-label">Enter your User Id here</label>
      <input type="text" ref={userIdElement} className="form-control" id="userId" 
      placeholder="Your User Id"/>
    </div>

    <div className="mb-3 ">
      <label htmlFor="title" className="form-label">Post Title</label>
      <input type="text" ref={postTitleElement} className="form-control" id="title" 
      placeholder="How are you feeling today..."/>
    </div>

    <div className="mb-3 ">
      <label htmlFor="body"  className="form-label">Post Content</label>
      <textarea type='text' rows='3' ref={postBodyElement} className="form-control" id="body" 
      placeholder="Tell us more about it"/>
    </div>

    <div className="mb-3 ">
      <label htmlFor="views" className="form-label">Post Views</label>
    <input type='number' ref={viewsElement} className="form-control" id="views" 
      placeholder="How many people have viewed this post"/>
    </div>

    <div className="mb-3 ">
      <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
      <input type="text" ref={tagsElement} className="form-control" id="tags" 
      placeholder="Please enter tags using spaces"/>
    </div>
    <button type="submit" className="btn btn-primary">Post</button>
  </form>
}

export default CreatePost;