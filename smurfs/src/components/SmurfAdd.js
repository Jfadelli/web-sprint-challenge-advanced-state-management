import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postSmurf } from '../store/actions/smurfActions';

function SmurfAdd(props) {
    const [formData, setFormData] = useState({})

    function addSmurf(e) {
        e.preventDefault();
        console.log('data: ', formData)
        props.postSmurf(formData)
    }

    function formChangeHandler(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className='uk-flex uk-flex-column uk-flex-center uk-flex-auto'>
            <form
                className='uk-width-medium'
                onSubmit={(e) => addSmurf(e)}
            >
                <h2 className='uk-flex-center'>Add a Smurf</h2>
                <div className='uk-margin'>
                    <input
                        placeholder='Name'
                        name='name'
                        type='text'
                        onChange={formChangeHandler}
                    />
                </div>

                <div className='uk-margin'>
                    <input
                        placeholder='Age'
                        name='age'
                        type='text'
                        onChange={formChangeHandler}
                    />
                </div>

                <div className='uk-margin'>
                    <input
                        placeholder='Height'
                        name='height'
                        type='text'
                        onChange={formChangeHandler}
                    />
                </div>

                <button className='uk-button' >Submit</button>
            </form>
        </div>
    )
}

function mapToProps() {
    return {}
}

export default connect(mapToProps, {
    postSmurf
})(SmurfAdd);