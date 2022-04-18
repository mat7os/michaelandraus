import React from 'react'
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import {AppWrap} from '../../wrapper'

const scaleVariants = {
  whileInView:{
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease:'easeInOut'
    }
  }
}
const Header = () => {
  return (
    <div className='grid grid-cols-3 h-full w-full pt-12'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className=" col-span-3 pb-20 pt-20"
      >
        <div className='app__header-badge pl-5 sm:pl-0'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 10 }}>
              <p className='p-text'>Hola, Me llamo</p>
              <p className='head-text'>Michael</p>
              <p className='text-right text-indigo-900 font-bold'>Fullstack Developer</p>
            </div>
          </div>
        </div>
      </motion.div>

     

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles col-span-3  w-9/12 sm:w-7/12 justify-self-center"
      >
        {[images.java, images.react, images.tailwind].map((circle, index) => (
          <div className="app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" className={`${index == 0 ? 'w-7/12' : 'w-9/12'}`}/>
          </div>
        ))}
      </motion.div>
      
      <motion.div
       whileInView={{opacity: [0, 1] }}
       transition={{ duration: 0.5, delayChildren:0.5 }}
       className="col-span-3 justify-self-center grid content-end max-w-6xl "
      >
        <img src={images.profile} alt="profile_bg"/>
      </motion.div>
    </div>

   
  )
}

export default AppWrap(Header, 'home');
