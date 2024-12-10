import { useContext } from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/show-posts-store"
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";

const PostList = () => {
    const {postList, addInitialPosts} = useContext(PostListData);
    const [dataFetched, setDataFetched] = useState(false);

    if(!dataFetched){
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => {
            addInitialPosts(data.posts)})
        setDataFetched(true);
    }

    return <div className="p-container">
        {postList.length === 0 && <WelcomeMessage />}
        {postList.map((post) => (
            <Post key={post.id} post={post} />))}
    </div>
}

export default PostList;