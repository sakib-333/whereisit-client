import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-text flex items-center justify-center p-6">
      <div className="max-w-3xl border border-text  shadow-xl rounded-2xl p-8 space-y-6">
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>
        <p className="text-lg  text-center">
          Have any questions or need assistance? Feel free to reach out to us!
        </p>
        <form className="space-y-4">
          <div>
            <label className="block  font-semibold">Your Name</label>
            <input
              type="text"
              className="input border-text w-full bg-background"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block  font-semibold">Your Email</label>
            <input
              type="email"
              className="input border-text w-full bg-background"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block  font-semibold">Message</label>
            <textarea
              className="textarea border-text w-full bg-background"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button className="btn btn-primary w-full">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
