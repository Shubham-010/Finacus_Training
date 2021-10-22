import "./Contact.css";
import Phone from "../images/Phone.png";
import Email from "../images/Email.png";
import Address from "../images/Address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../Context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const colorMode = theme.state.colorMode;

  const handleSubmit = (e) => {
     e.preventDefault();
        emailjs
      .sendForm(
        "service_yi8iwkc",
        "template_co164v7",
        formRef.current,
        "user_w9wvNbEvt6bZAOMZcdD1J"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
   
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's get in touch!!!</h1>
            
            <div className="c-info">
                <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                +91 9167404223
                </div>
            <div className="c-info-item">
                <img className="c-icon" src={Email} alt="" />
                ShubhamChikane0109@gmail.com
                 </div>
            <div className="c-info-item">
                <img className="c-icon" src={Address} alt="" />
                Mumbai-Maharashtra-India
                </div>
            </div>
            </div>
            <div className="c-right">
            <p className="c-desc">
             <b>What’s your story?</b> Get in touch. Always available for
             freelancing if the right project comes along. me.
               </p>
                <form ref={formRef} onSubmit={handleSubmit} >
                 <input style={{backgroundColor: colorMode && "#333"}}  type="text" placeholder="Name" name="user_name"/>
                 <input  style={{backgroundColor: colorMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                 <input  style={{backgroundColor: colorMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                 <textarea  style={{backgroundColor: colorMode && "#333"}} rows="5" placeholder="Message" name="message" />
                 <button>Submit</button>
                 {done && <p>"Your Message Successfully Delivered &#10003;.Thank you..!!"</p>}
                </form>
            </div>
        </div>
    </div>
  );
};

export default Contact;