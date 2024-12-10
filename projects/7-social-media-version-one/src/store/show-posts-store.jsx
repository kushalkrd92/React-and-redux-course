import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {}
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if(action.type === 'DELETE_POST'){
        newPostList = currPostList.filter((post) => post.id !== action.payload.postId)
    }
    else if(action.type === 'ADD_POST'){
        newPostList = [action.payload, ...currPostList]
    }
    return newPostList;
}

const PostListProvider = ({children}) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                userId: userId,
                reactions: reactions,
                tags: tags
            }
        })
    }
    const deletePost = (postId) => {
        dispatchPostList({
            type:'DELETE_POST',
            payload: {
                postId
            }
        })
    }

    return <PostList.Provider value={{postList, addPost, deletePost}}>
        {children}
    </PostList.Provider>
}

export default PostListProvider;

const DEFAULT_POST_LIST = [
    {
        id: '1',
        title: 'Lunch break',
        body: "i love taking big lunch breaks, just taking my time off from work even for just few minutes",
        userId: 'user-99',
        reactions: 22,
        tags: ['lunch-break', 'eating', 'sleeping', 'stress-relief']
    },
    {
        id: '2',
        title: 'Watching tv',
        body: "Love watching sci-fi, fanatcy, historical and mythological tv shows. I just live for them.",
        userId: 'user-11',
        reactions: 100,
        tags: ['fav-series', 'drama', 'fanatcy', 'Dragons']
    }
]