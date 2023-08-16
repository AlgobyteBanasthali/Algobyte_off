import React from 'react'
import './team.css'
import { Article } from '../../components';
import { leads, technical,content, graphics, event } from './imports'

const Team = () => {
  return (
    <div className="algobyte__team section__padding" id="team">
      <div className="algobyte__team-heading">
        <h1 className="gradient__text">Meet Our Team</h1>
      </div>
      <div className="algobyte__team-container">
        <Article imgUrl={leads} title="Leads" text="Meet The Team" id="#team"/>
        <Article imgUrl={technical} title="Technical Team" text="Meet The Team" id="#team"/>
        <Article imgUrl={content} title="Content Writing Team" text="Meet The Team" id="#team"/>
        <Article imgUrl={graphics} title="Graphic Designing Team" text="Meet The Team" id="#team"/>
        <Article imgUrl={event} title="Event Management Team" text="Meet The Team" id="#team"/>
      </div>
    </div>
  )
}

export default Team