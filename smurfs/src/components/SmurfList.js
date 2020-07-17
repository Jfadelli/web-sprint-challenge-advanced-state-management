import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { getSmurfs, deleteSmurf } from '../store/actions/smurfActions';

import SmurfCard from './SmurfCard';
import Loader from 'react-loader-spinner'

function SmurfList(props) {
    useEffect(() => {
        props.getSmurfs();
    }, [])

    return (
        <div className=''>
            {props.isFetching && (
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={75}
                    width={75}
                    timeout={200}

                />
            )}

            {props.smurfs && props.smurfs.map(item => {
                return <SmurfCard
                    key={item.id}
                    smurf={item}
                    delete={() => props.deleteSmurf(item.id)} />
            })}
        </div>
    )
}

function mapToProps(state) {
    return {
        isFetching: state.isFetching,
        smurfs: state.smurfs,
    }
}

export default connect(mapToProps, {
    getSmurfs,
    deleteSmurf,
})(SmurfList);