import React from "react";
import { Footer, Navbar } from "../components";
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <header>
        <h2 class="h2 ">Contact Us</h2>
      </header>
      <hr/>

      <div className="contact-container">
        <div className="contact-container1">
          <section class="mapbox" data-mapbox>
            <figure>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.0177657773875!2d96.41438781393602!3d18.97482278714605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c5d8ae692c8389%3A0x5e6a5c4f57dd5e05!2sUniversity+of+Computer+Studies%2C+Taungoo!5e0!3m2!1sen!2smm!4v1561390376100!5m2!1sen!2smm"
                width="400" height="300" loading="lazy"></iframe>
            </figure>
          </section>
        </div>
        <div className="contact-container2">
          <h3 class="h3 form-title">Contact Form</h3>
         
          <div className="form-container">
            <form>
              <div className="form my-3 name">
                <label for="Name">Name</label>
                <input
                  type="email"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form my-3 email">
                <label for="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form  my-3 message">
                <label for="Password">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Password"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>


        </div>
      
      <Footer />
    </>
  );
};

export default ContactPage;
