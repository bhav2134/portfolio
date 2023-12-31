import React from 'react';
import '../styles/Certifications.css';
import Certificatescard from '../helpers/Certificatescard';
import { Languages,Databses,Frameworks,clouds,others,projects,certificates } from '../helpers/Data';
import { Zoom, Fade } from "react-awesome-reveal";

function Certifications() {
  return (
    <div id="certifications" className='certifactions'>
      <Zoom triggerOnce>
      <h1 className='certificate-title'>
        Certifications<span className='dot'>.</span>
      </h1>
        <div className="certificate-section">
          <Zoom cascade triggerOnce>
          {certificates.map((certificate, index) => (
          <Certificatescard key={index} {...certificate} />
        ))}
        </Zoom>
        </div>
        </Zoom>
    </div>
  )
}

export default Certifications