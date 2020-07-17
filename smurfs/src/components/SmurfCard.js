import React from 'react'

function SmurfCard(props) {
    return (
        <div className='uk-card uk-card-default uk-card-body'>
            <div className='uk-card-title'>
                {props.smurf.name}
            </div>

            <div>
                {props.smurf.age} years old
            </div>

            <div>
                {props.smurf.height} tall
            </div>
            <button onClick={props.delete}>Delete</button>
        </div>
    )
}

export default SmurfCard;