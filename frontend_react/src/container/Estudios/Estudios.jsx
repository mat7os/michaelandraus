import React, { useState, useEffect } from 'react'
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { motion } from 'framer-motion';
import './Estudios.scss';

const Estudios = () => {

  const [escuelas, setEscuelas] = useState([]);

  useEffect(() => {
    const query = '*[_type == "escuelas"] | order(order asc)';
  
    client.fetch(query)
      .then((data) => {
        setEscuelas(data)
      });

    
  }, []);
  
  return (
    <>
      <div className="grid sm:grid-cols-2 gap-8 grid-cols-1">
      <h2 className="head-text col-span-4"><span>Formación</span> Académica</h2>
        {escuelas?.map((escuela, index) => (
          <div className='col-span-3 col-start-1 grid sm:grid-cols-2 grid-cols-1 p-8 items-center'  key={escuela.nombre}>
            <motion.div
              className='row-span-2 grid place-items-center'
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              key={escuela.nombre+index}
            >
              <img src={urlFor(escuela.imagen)} alt={escuela.nombre} className={` ${escuela.nombre == "Ipartek" ? "w-60" : "w-40"}`}/>
              </motion.div>  
            {escuela?.grados.map((grado,index) => (
              <motion.div
                className={`pl-0 sm:pl-9 sm:pt-0 pt-10 ${escuela.nombre == "Ipartek" ? "row-span-2" : ""}`}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                key={grado.nombre+index}
              >
                <p className='font-medium'>{grado.desc}<br /></p>
                <p className='p-text'>{grado.nombre}<br /></p>
                <p className='app__estudios-year'>{grado.year}</p> 
              </motion.div>
            ))}
          </div>
        ))}  
        
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Estudios),
  'estudios',
  'app__primarybg'
);