import React from "react";
import { withRouter } from "react-router";
import './MenuItem.scss';


function MenuItem({title, imageUrl, size, history, match, linkUrl}) {
    const styles = {
        menu:{
            backgroundImage: `url(${imageUrl})`
        }
    }
  return (
    <div className={`${size} menu-item`} onClick = {()=>history.push(`${match.url}${linkUrl}`)}>
        <div style = {styles.menu} className='back-img' />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
