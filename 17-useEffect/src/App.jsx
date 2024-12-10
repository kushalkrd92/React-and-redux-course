import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/footer";
import Header from "./components/header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import PostListProvider from "./store/show-posts-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return <PostListProvider>
    <div className="app-container">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
      <div className="content">
        <Header></Header>
        {selectedTab === "Home" ? (<PostList></PostList>) : (<CreatePost></CreatePost>)}
        <Footer></Footer>
      </div>
    </div>
  </PostListProvider>;
}

export default App;
