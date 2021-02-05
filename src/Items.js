import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Item from './Item';
import { fetchItems } from './action';
import './Items.css';

const Items = props => {

    let baseUrl = 'https://api.spacexdata.com/v3/launches';
    let getParams = () => {
        let params = '?limit=100';
        if (props.launchSuccess) {
            params += `&launch_success=${props.launchSuccess}`
        }
        if (props.landSuccess) {
            params += `&land_success=${props.landSuccess}`
        }
        if (props.launchYear) {
            params += `&launch_year=${props.launchYear}`
        }
        return params;
    }

    useEffect(() => {
        const par = getParams();
        const url = baseUrl + par;
        props.onFetch(url);

    }, [props.launchYear, props.landSuccess, props.launchSuccess]);

    let displayItems;
    if (!props.loading) {
        displayItems = props.data.length > 0 ? props.data.map(obj => (
            <Item
                key={obj.flight_number}
                missionName={obj.mission_name}
                flightNumber={obj.flight_number}
                launchYear={obj.launch_year}
                successfulLaunch={obj.launch_success ? 'true' : 'false'}
                successfulLanding={obj.rocket.first_stage.cores[0].land_success !== null ? obj.rocket.first_stage.cores[0].land_success.toString() : ''}
                missionId={obj.mission_id}
                imgsrc={obj.links.mission_patch_small}
            />
        )) : <h1>No Record Found</h1>;
    } else {
        displayItems = <p>Loading...</p>
    }


    return (
        <div className='items'>
            {displayItems}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        data: state.data,
        launchYear: state.launchYear,
        launchSuccess: state.launchSuccess,
        landSuccess: state.landSuccess,
        loading: state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetch: (url) => dispatch(fetchItems(url))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);