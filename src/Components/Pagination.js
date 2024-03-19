import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import './Pagination.css';

const Pagination = () => {
  const{page,handlepagechange,totalPages}=useContext(AppContext);
  return (
    <div className='fir'>
      <div className='sec'>
        <div className='thir'>
        {
          page>1&&(
            <button className='btn' onClick={()=> handlepagechange(page-1)}>
              Previous
            </button>
          )
        }
        {
          page<totalPages&&(
            <button className='btn' onClick={()=> handlepagechange(page+1)}>
              Next
            </button>
          )
        }
        </div>
       
        <p className='page'>Page {page} of {totalPages}</p>
      </div>
      
    </div>
  )
}

export default Pagination
