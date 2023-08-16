import React from 'react'
import {Feature} from '../../components'
import './whatAlgoByte.css'

const featuresData = [
  {
    title: 'Community',
    text: "A strong sense of community is essential for creating a supportive, collaborative, and inclusive environment in a coding club. Algobyte provides an extensive community which will help you find many networking and learning opportunities along with the sense of belongingness."
  },
  {
    title: 'Workshops',
    text: "Ranging from Web and App development to Data Science, we aim to conduct workshops in a variety of formats, such as online webinars, in-person sessions, or interactive coding challenges. We plan to help you learn new skills, tools, and techniques to help you with your future endeavours."
  },
  {
    title: 'Interactions',
    text: "Algobyte brings to you a great opportunity to increase the junior-senior interactions which will be highly beneficial for you. Seniors will serve as mentors to juniors in many projects, providing guidance, support, and feedback and offering juniors with the opportunity to learn from their expertise."
  }
]

const whatAlgoByte = () => {
  return (
    <div className='algobyte__wab' id="whatAlgoByte">
      <div className="algobyte__whatalgobyte section__margin">
        <div className="algobyte__whatalogbyte-feature">
          <Feature title="What Is AlgoByte?" text="AlgoByte is Banasthali's first ever official open-source club facilitated by Apaji Institue. AlgoByte is for all aspirirng individuals who are keen to learn and work on diverse technology and open source." />
        </div>
        <div className="algobyte__whatalgobyte-heading">
          <h1 className="gradient__text">Bringing the saga of technophilic nerds</h1>
          <a href="#blog">Explore The Library</a>
        </div>
        <div className="algobyte__whatalgobyte-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default whatAlgoByte