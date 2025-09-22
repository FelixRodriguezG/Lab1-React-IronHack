import './Page.css'

function Contact() {
  return (
    <div className="page">
      <h1>Contact</h1>
      <p>Get in touch with us!</p>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>📧 Email: lab1@ironhack.com</p>
          <p>📱 Phone: +1 (555) 123-4567</p>
          <p>📍 Location: IronHack Campus</p>
        </div>
        
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact