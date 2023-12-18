import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import 'semantic-ui-css/semantic.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import './Contact.css'; // Import your custom CSS file

const SERVICE_ID = "**************";
const TEMPLATE_ID = "*******";
const USER_ID = "****************";

const Contact = () => {
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID);
      console.log(result.text);
      Swal.fire({
        icon: 'success',
        title: 'Message Sent Successfully',
      });
    } catch (error) {
      console.log(error.text);
      Swal.fire({
        icon: 'error',
        title: 'Ooops, something went wrong',
        text: error.text,
      });
    }
    e.target.reset();
  };

  return (
    <div className='cc1'>
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-md-offset-3 border rounded-3">
          <div className="well well-sm">
            <Form className="form-horizontal" onSubmit={handleOnSubmit}>
              <fieldset>
                <legend className="text-left">Contact us</legend>

                {/* Name input */}
                <div className="form-group">
                  <label className="col-md-3 control-label" htmlFor="name">
                    Name
                  </label>
                  <div className="col-md-9 m-3">
                    <Input id="name" name="name" type="text" placeholder="Your name" required />
                  </div>
                </div>

                {/* Email input */}
                <div className="form-group">
                  <label className="col-md-3 control-label" htmlFor="email">
                    Your E-mail
                  </label>
                  <div className="col-md-9 m-3">
                    <Input id="email" name="email" type="text" placeholder="Your email" required />
                  </div>
                </div>

                {/* Message body */}
                <div className="form-group">
                  <label className="col-md-6 control-label" htmlFor="message">
                    Your message
                  </label>
                  <div className="col-md-9 m-3 ui-input">
                    <TextArea
                      id="message"
                      name="message"
                      placeholder="Please enter your message here..."
                      rows="3"
                      required
                    />
                  </div>
                </div>
                 {/* Form actions */}
                 <div className="form-group">
                  <div className="col-md-12 text-right m-3">
                    <Button type="submit" color="primary" size="large">
                      Submit
                    </Button>
                  </div>
                </div>
              </fieldset>
            </Form>
                </div>
                               
          </div>
        </div>
        </div>
                {/* Social media icons */}
                <div className="social-icons-container">
                  <div className="connect-with-us">Connect with us on</div>
                  <div className="social-icons-group">
                  <div className="social-icons-item">
                    <div className="sc">
                    <span>CSI Comp</span>
                    <ul>
                      <li>
                        <a className="icon-link" href="https://www.instagram.com/csifcrit/">
                          <FontAwesomeIcon icon={faInstagram} className="fa-brands fa-instagram instagram" />
                        </a>
                      </li>
                      <li>
                        <a className="icon-link" href="https://www.linkedin.com/company/csi-computer-fcrit/">
                          <FontAwesomeIcon icon={faLinkedin} className="fa-brands linkedin" />
                        </a>
                      </li>
                    </ul>
                    </div>
                    </div>
                    <div className="social-icons-item">
                      <div className="sc">
                    <span>CSI IT</span>
                    <ul>
                      <li>
                        <a className="icon-link" href="https://instagram.com/csiitfcrit/">
                          <FontAwesomeIcon icon={faInstagram} className="fa-brands  instagram" />
                        </a>
                      </li>
                      <li>
                        <a className="icon-link" href="https://www.linkedin.com/company/csi-it-fcrit/about/">
                          <FontAwesomeIcon icon={faLinkedin} className="fa-brands linkedin" />
                        </a>
                      </li>
                    </ul>
                    </div>
                    </div>
                  </div>
                  <div className="join-discord">
                  <div className="social-icons-group">
                  <div className="social-icons-item">
                    
                    <span>Join our discord for more details</span>
                    <ul>
                  <li className="discordi">
                    <a href="#">
                      <FontAwesomeIcon icon={faDiscord} className="fa-brands fa-discord " />
                    </a>
                  </li>
                  </ul>
                  </div>
                  </div>
                  </div>
                </div>


    </div>
  );
};

export default Contact;
