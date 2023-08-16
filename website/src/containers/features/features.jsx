import React from 'react'
import Feature from '../../components/feature/Feature'
import './features.css'

const featuresData = [
  {
    title: 'Regular Sessions and Skilled Mentors',
    text: "We conduct regular sessions and workshops from amazing speakers and mentors that can help you kickstart or elevate your tech career. You'll get access to industry professionals who can provide you with valuable insights into the job market and offer advice on career paths."
  },
  {
    title: 'Networking and Referrals',
    text: "Joining AlgoByte is a great way to meet other like-minded students who share your interest in technology. You'll have the opportunity to connect with students and seniors who are passionate about coding and who may share similar career goals as you."
  },
  {
    title: 'Collaboration',
    text: "Being a part of AlgoByte can help you develop your collaboration skills. You'll have the opportunity to work with other students on projects, which can help you learn how to work in a team environment."
  },
  {
    title: 'Having Fun',
    text: "Onboarding with AlgoByte can be a fun and rewarding experience. You'll have the opportunity to meet new people, work on interesting projects, and develop your skills in a super supportive environment."
  }
]

const Features = () => {
  return (
    <div className="algobyte__features section__padding" id="features">
      <div className="algobyte__features-heading">
        <h1 className='gradient__text'>The Future Is Near, You Just Need To Realize It. Step Into The Future Today And Make It Happen.</h1>
        <p>Here's why you should join us.</p>
      </div>
      <div className="algobyte__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
          ))}
      </div>
    </div>
  )
}

export default Features