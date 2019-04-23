import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container card">
        <div className="row">
          <div className="col-xl-10 col-md-10 col-sm-10 offset-xl-1 offset-md-1 offset-sm-1">
            <h2>Contact with me</h2>
            <p class="text-center w-responsive mx-auto mb-3">
              Do you have any questions?
              <br />
              Don't hesitate to contact with me.
            </p>
            <form name="contact-form">
              <div class="row">
                <div class="col-xl-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">
                  <div class="md-form mb-2">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="form-control"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">
                  <div class="md-form mb-2">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      class="form-control"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">
                  <div class="md-form mb-2">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      class="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div class="col-xl-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">
                  <div class="md-form mb-2">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      class="form-control"
                      placeholder="Your message"
                    />
                  </div>
                </div>
              </div>
              <div className="align-items-center p-2 send-button">
                <button className="btn btn-primary">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
