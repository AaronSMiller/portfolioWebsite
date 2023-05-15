import React, { useState } from 'react';
import Typical from 'react-typical'
import axios from 'axios'
import { toast } from 'react-toastify'

import imgBack from '../../../images/mailz.jpeg'
import load1 from '../../../images/load2.gif'
import ScreenHeading from '../../../utilities/ScreenHeading/ScreenHeading.jsx'
import ScrollService from '../../../utilities/ScrollService.jsx'
import Animations from '../../../utilities/Animations.jsx'
import Footer from '../Home/Footer/Footer.jsx'
import './ContactMe.css'


function ContactMe(props) {

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id)
      return
    Animations.animations.fadeInScreen(props.id)
  }

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [banner, setBanner] = useState("")
  const [bool, setBool] = useState(false)

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message
      }
      setBool(true)
      const res = await axios.post(`/contact`, data)
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg)
        toast.error(res.data.msg)
        setBool(false)
      } else if (res.status === 200) {
        setBanner(res.data.msg)
        toast.success(res.data.msg)
        setBool(false)
      }
    } catch (error) {
      console.error()
    }
  }



  return (
    <div className="main-container" id={props.id || null}>
      <ScreenHeading
        subHeading={"Lets keep In Touch"}
        title={'Contact Me'}
      />
      <div className='central-form'>
        <div className='col'>
          <h2 className='title'>
            {" "}
            <Typical
              loop={Infinity}
              steps={[
                "Get In Touch 📧",
                2000
              ]}
            />
          </h2>
          <a href='https://github.com/AaronSMiller'>
            <i className='fa fa-github-square'></i>
          </a>
        </div>
        <div className='back-form'>
          <div className='img-back'>
            <h4>Send your Email Here!</h4>
            <img src={imgBack} alt=''/>
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor='name'>Name</label>
            <input type='text'
              onChange={handleName}
              value={name}
            />

            <label htmlFor='email'>Email</label>
            <input type='text'
              onChange={handleEmail}
              value={email}
            />

            <label htmlFor='message'>Message</label>
            <textarea type='text'
              onChange={handleMessage}
              value={message}
            />

            <div className='send-btn'>
              <button type='submit'>
                Send<i className='fa fa-paper-plane' />
                {bool?(<b className='load'>
                  <img src={load1} alt='' />
                </b>):("")}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactMe;