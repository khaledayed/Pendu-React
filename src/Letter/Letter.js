import React from 'react';
import './Letter.css';

const Hidden_Symbol = '_';

const Letter =({ letter, feedback})=>(
    <div className={`letter ${feedback}`}>
        <span className="symbol">
            {feedback === 'hidden' ? Hidden_Symbol : letter}
        </span>
    </div>
)

export default Letter