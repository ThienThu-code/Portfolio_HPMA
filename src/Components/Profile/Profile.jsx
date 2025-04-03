import React from 'react'
import './Profile.css'
import avatar from '../../assets/avatar.png'

const Profile = () => {
  return (
    <div className='profile'>
        <h1>Hi! I'm <span>Iguros</span></h1>
        <img src={avatar} alt="" /> 
        <p> A student at Hogwarts, learning spells and uncovering secrets hidden within the castle walls. Between thrilling duels and magical lessons, every day is an adventure. In this world of magic, the journey has only just begun.</p>
        <div className="pro-action">
            <div className="pro-connect">Connect with me</div>
            <div className="pro-resume">My resume</div>
        </div>
    </div>

  )
}

export default Profile