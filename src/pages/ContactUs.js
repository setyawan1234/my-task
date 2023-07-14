import React, {useState} from 'react'
import '../styles/ContactUs.css'

export const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const { name, email, message } = formData;
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validasi email
        if (!email.includes('@')) {
          alert('Email tidak valid');
          return;
        }
    
        // Proses pengiriman data form
        alert('Form berhasil dikirim');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      };

      
  return (
    <div>
        <h1 className="tittle">CONTACT US</h1>
        <div className="container-form">
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
                required
                />

                <label htmlFor="email">Email</label>
                <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
                />

                <label htmlFor="message">Message</label>
                <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleChange}
                required
                ></textarea>

                <button type="submit">Kirim</button>
            </form>
        </div>
    </div>
  )
}
