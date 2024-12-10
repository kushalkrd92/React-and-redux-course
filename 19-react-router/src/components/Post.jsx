import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { PostList } from "../store/show-posts-store";


const Post = ({post}) => {

  const {deletePost} = useContext(PostList);

    return <div className="card k-card ">
    <div className="card-body">
      <h5 className="card-title">{post.title}</h5>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete-badge" onClick={() => deletePost(post.id)}>
      <MdDeleteOutline />
      </span>
      <p className="card-text">{post.body}</p>
      {post.tags.map(tag => 
        <span key={tag} className="badge text-bg-primary hashtag">{tag}</span>
      )}
      <div className="alert alert-success view" role="alert">
        This post currently has {post.views} views.
      </div>
      </div>
  </div>
}

export default Post;