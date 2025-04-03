import React from 'react'
import './About.css'
import profile from '../../assets/profile.png'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            {/*<img src={logo} alt="" />*/}
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p> Now in my fourth year at Hogwarts, I’ve grown familiar with the castle’s secrets and the endless possibilities of magic. Whether studying in the greenhouse or practicing spells in the dueling club, every day brings new challenges and discoveries. </p>
                    <p> I have a deep passion for Summoning Spells and Herbology. There’s something thrilling about calling forth powerful creatures in battle and nurturing magical plants with unique abilities. Magic and nature go hand in hand, and I’m eager to see where this journey takes me.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Summon</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Spell</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Herbology</p><hr style={{width:"100%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>4+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>13</h1>
                <p>MISSIONS COMPLETED</p>
            </div>    
        </div>
    </div>
  )
}

export default About