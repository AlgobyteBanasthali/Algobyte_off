import React from 'react'
import './blog.css'
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const blog = () => {
  return (
    <div className='algobyte__blog section__padding' id="blog">
      <div className="algobyte__blog-heading">
        <h1 className='gradient__text'>
          A Lot has happened, and We have blogged about it.
        </h1>
      </div>
      <div className="algobyte__blog-container">
        <div className="algobyte__blog-container_groupA">
          <Article imgUrl={blog01} date="Feb 23, 2023" title="Induction Ceremony - Official KickStart" text="Read Full Blog" id="#blog"/>
        </div>
        <div className="algobyte__blog-container_groupB">
          <Article imgUrl={blog02} date="Feb 23, 2023" title="Induction Ceremony - Official KickStart" text="Read Full Blog" id="#blog"/>
          <Article imgUrl={blog03} date="Feb 23, 2023" title="IOT Session AlgoByte X IIT Madras" text="Read Full Blog" id="#blog"/>
          <Article imgUrl={blog04} date="Feb 23, 2023" title="Git and GitHub by Jyoti Bisht" text="Read Full Blog" id="#blog"/>
          <Article imgUrl={blog05} date="Feb 23, 2023" title="TechTalks - A Junior Senior Interaction" text="Read Full Blog" id="#blog"/>
        </div>
      </div>
    </div>
  )
}

export default blog