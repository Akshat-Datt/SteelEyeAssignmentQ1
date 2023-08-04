
import React from 'react';
import './HeaderTitle.css';


function HeaderTitle(props){
  const {title, size ='large'} = props;
    return (
      <div className={`container ${size}`}>
        {title}
      </div>
    )
  
}
export default HeaderTitle;
