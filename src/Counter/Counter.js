import React from 'react';
import './Counter.css';
import PropType from 'prop-types'

const Counter = ({ counter, gameState }) => (
    <div className="count">Nompbre de tentative : {counter}/10
    <div className="state">
            Partie {gameState}
        </div>
    </div>
)

Counter.propType = {
counter: PropType.number.isRequired,
gameState: PropType.oneOf([
    'en cours',
    'perdu',
    'gagné',
]).isRequired,
}

export default Counter
