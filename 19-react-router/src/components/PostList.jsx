import { useContext } from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/show-posts-store"
import LoadingSpinner from "./LoadingSpinner";
import WelcomeMessage from './WelcomeMessage'

const PostList = () => {
    const {postList, fetching} = useContext(PostListData);

    return <div className="p-container">
        {fetching && <LoadingSpinner />}
        {!fetching && postList.length === 0 && <WelcomeMessage />}
        {!fetching && postList.map((post) => (
            <Post key={post.id} post={post} />))}
    </div>
}

export default PostList;