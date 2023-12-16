import React, { useState } from 'react';
import './typewriter.css';

const Typewriter = ({ children }) => {
//const [text, setText] = useState('');

    return (
        <div className="typewriter">
          <h1>{children}</h1>
        </div>
      );
    };
    
export default Typewriter;