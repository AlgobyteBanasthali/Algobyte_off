import React from 'react'
import './Article.css';

const Article = ({ imgUrl, date, title, text, id }) => {
  return (
    <div className='algobyte__blog-container_article'>
      <div className="algobyte__blog-container_article-image">
        <img src={imgUrl} alt="blog"/>
      </div>
      <div className="algobyte__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p><a href={id}>{text}</a></p>
      </div>
    </div>
  )
}

export default Article