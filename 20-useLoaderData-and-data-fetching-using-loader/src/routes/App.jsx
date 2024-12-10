import "./App.css";
import Footer from "../components/footer";
import Header from "../components/header";
import Sidebar from "../components/Sidebar";
import PostListProvider from "../store/show-posts-store";
import { Outlet } from 'react-router-dom';

function App() {
  return <PostListProvider>
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  </PostListProvider>;
}

export default App;
