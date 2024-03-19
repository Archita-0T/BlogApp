import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import './Blogs.css';
import Spinner from './Spinner';


const Blogs = () => {
  const {posts,loading}=useContext(AppContext);
  return (
    <div className='blog'>
      {
loading ? (<Spinner/>):
(
  posts.length===0?(<div><p>No Posts Found !</p></div>):
  (
    posts.map((post)=>(
      <div className='blogg' key={post.id}>
        <p className='title'>{post.title}</p>
        <p className='by'>
          By <span className='author'>{post.author}</span> on <span className='cat'>{post.category}</span>
        </p>
        <p className='date'>Posted on {post.date}</p>
        <p className='content'>{post.content}</p>
        <div className='tag'>
          {
            post.tags.map((tag,index)=>{return <span key={index}>{`  #${tag}`}</span>} )
          }
        </div>
      </div>


    ))
  )
)
      }
      
      
      
    </div>
  )
}

export default Blogs
