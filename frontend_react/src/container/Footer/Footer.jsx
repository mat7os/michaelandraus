import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client'
import { images } from '../../constants';
import './Footer.scss';
import { send } from 'emailjs-com';

const Footer = () => {

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    setLoading(true);

    e.preventDefault();
    send(
      'SERVICE',
      'TEMPLATE',
      toSend,
      'ID'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    
      const contact = {
        _type: 'contact',
        name: toSend.from_name,
        email: toSend.email,
        message: toSend.message
      }
  
      client.create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);
      })
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2 className='head-text'><span>Ponte En Contacto</span></h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href='mailto:andrausmichael@gmail.com' className='p-text'>andrausmichael@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href='tel:+34 603312529' className='p-text'>+34 603312529</a>
        </div>
      </div>

    {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Nombre" name="from_name" value={toSend.from_name} onChange={handleChange} required />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Email" name="reply_to" value={toSend.reply_to} onChange={handleChange} required />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Mensaje"
              value={toSend.message}
              name="message"
              onChange={handleChange}
              required
            />
          </div>
          <button type="button" className="p-text" onClick={onSubmit}>{loading ? 'Enviando...' : 'Enviar Mensaje'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Gracias por ponerte en contacto.
          </h3>
        </div>
      )}
    </>
  );
};


export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contacto',  'app__whitebg')

