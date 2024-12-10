import { useContext, useEffect } from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/show-posts-store"
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
    const {postList, addInitialPosts} = useContext(PostListData);
    const [fetching, setFetching] = useState(false);

    useEffect(() =>{
        setFetching(true);
        const controller = new AbortController();
        const signal = controller.signal;

        fetch('https://dummyjson.com/posts', {signal})
        .then(res => res.json())
        .then(data => {
            addInitialPosts(data.posts)
            setFetching(false);
        })

        return () => {
            controller.abort();
            console.log('aborted');
        }
    }, [])

    return <div className="p-container">
        {fetching && <LoadingSpinner />}
        {!fetching && postList.length === 0 && <WelcomeMessage />}
        {!fetching && postList.map((post) => (
            <Post key={post.id} post={post} />))}
    </div>
}

export default PostList;