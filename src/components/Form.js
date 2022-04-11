import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'
import * as vaildData from './validator'
import axios from 'axios';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

function Form() {
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const formRef = useRef()

  const handeldata = (text) => {
    const target = text.target;
    const value = target.value;
    const name = target.name;

    formData[name] = value;
    console.log("ggggggggggggggggg", formData)
    setFormData(formData);

  }

  const validForm = (e) => {
    console.log("Aliddddddddd")
    let errors = {};

    if (vaildData.isEmpty(formData.name)) {
      errors.name = "please enter the name";
    }

    if (vaildData.isEmpty(formData.email)) {
      errors.email = "please enter the email";
    }
    else if (!vaildData.isEmail(formData.email)) {
      errors.email = "please enter vaild email";
    }

    if (vaildData.isEmpty(formData.message)) {
      errors.message = "please enter the message";
    }

    if (vaildData.isEmpty(errors)) {
      return null;
    }
    else {
      return errors;
    }

  }

  const submitLogin = (e) => {

    setLoading(true)
    setErrors({});
    let errors = validForm();
    e.preventDefault();

    if (!errors) {
      axios.post('http://192.168.29.101:5100/contactus', formData).then((response) => {
        if (response.status) {
          setLoading(false)
          setFormData({});
          formRef.current.reset()
          // alert('Submitted Sucessfully')
          alertify.success('Submitted Sucessfully')
          console.log("response", response)
        }
        else {          
          setLoading(false)
          // alert(response)
        alertify.error(response.message);


        }
      }).catch((error) => { console.log(error) })

    } else {
      console.log(":::::::::::::::failed")
      setErrors(errors);
      setLoading(false)
    }
  }
  return (
    <section>
      <div id="contact-section" className="pad-sec">
        <div className="container">
          <div className="title-section text-center animated out" data-animation="fadeInUp" data-delay="0">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2">
                <h2>Get in touch</h2>
                <p>Fill out this form to see more Contact Us Pages.</p>
              </div>
            </div>
          </div>
          <div className="form-wrapper">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <form onSubmit={submitLogin} ref={formRef}>
                  <fieldset>
                    <div className="form-group" >
                      <input className="form-control br-b"
                        // defaultValue={formData.name}
                        type="text" name="name" id="name" placeholder="Enter Name" onChange={handeldata} />
                      {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <input className="form-control br-b"
                        //  defaultValue={formData.email}
                        type="email" name="email" id="email" placeholder="Enter Email" onChange={handeldata} />
                      {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                      <textarea className="form-control br-b"
                        // defaultValue={formData.message} 
                        name="message" id="message" placeholder="Enter Message..." onChange={handeldata}></textarea>
                      {errors.message && <span className="error">{errors.message}</span>}
                    </div>
                  </fieldset>
                  <div className="form-group button">
                    {/* {!loading ?
                      <input type="submit" name="submit" value="Send message" id="submit" className="btn btn-sm btn-dark" />
                      : */}
                    <input type="submit" name="submit" disabled={loading} value={!loading ? "Send message" : "Loading...."} id="submit" className="btn btn-sm btn-dark" />
                    {/* } */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Form;