import { useContext, useEffect } from "react";
import './App.css';
import Blogs from "./Components/Blogs";
import Header from "./Components/Header";
import Pagination from "./Components/Pagination";
import { AppContext } from "./Context/AppContext";




function App() {
  const {fetchBlogPosts}=useContext(AppContext);
 
  
    

  useEffect(()=>{
    fetchBlogPosts();
      },[])
  return (

   <div className="app">
   <Header/>
   <Blogs/>
   <Pagination/>
   </div>
    
  );
}

export default App;

