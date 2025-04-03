import React from 'react'
import './Contact.css'
import underline from '../../assets/underline2.png'
import location_icon from '../../assets/location_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a7ad4ff6-2d04-4fee-815f-61868be89733");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={underline} alt="" className='underline'/>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently avaliable</p>
          <div className="contact-details">
            <p><img src={mail_icon} alt="" className='image'/> havu012140@gmail.com</p>
          </div>
          <div className="contact-details">
            <p><img src={location_icon} alt="" className='image'/> District 4, Ho Chi Minh City</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder='Enter your name' name='name' />
        <label htmlFor="">Your Email</label>
        <input type="text" placeholder='Enter your email' name='email' />
        <label htmlFor="message">Write your message here</label>
        <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
        <button type='submit' className='contact-submit'>Submit Now</button>
      </form>
      </div>  
    </div>
  )
}

export default Contact