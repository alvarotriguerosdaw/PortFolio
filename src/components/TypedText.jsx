import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function TypedText() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
        strings: ['Desarrollador de Aplicaciones Web'],
        typeSpeed: 75,           
        startDelay: 300,       
        backSpeed: 75,          
        smartBackspace: true,    
        shuffle: false,          
        backDelay: 1500,         
        loop: true,              
        loopCount: false,        
        showCursor: true,        
        cursorChar: '|',         
        contentType: 'html'   
    });

    return () => {
      typed.current.destroy();
    };
  }, []);

  return <span ref={el} />;
}
