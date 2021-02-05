import React from 'react';
import { connect } from 'react-redux';

import { onLandSuccess, onLaunchSuccess, onLaunchYear } from './action';
import './Filter.css';

const years = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020',];

const Filter = props => {

    const displayYearsFilter = years.map(year => (
        <button
            key={year}
            onClick={() => props.launchYear === year ? props.onLaunchYear(null) : props.onLaunchYear(year)}
            className={props.launchYear === year ? 'active' : ''}
        >
            {year}
        </button>
    ));

    return (
        <div className='filter'>
            <h2 className='filter__title'>Filters</h2>
            <div className='filter__name'>
                <p className='title'>Launch Year</p>
                <div className='filter__grid'>
                    {displayYearsFilter}
                </div>
            </div>
            <div className='filter__name'>
                <p className='title'>Successful Launch</p>
                <div className='filter__grid'>
                    <button
                        onClick={() => props.launchSuccess === 'true' ? props.onLaunchSuccess(null) : props.onLaunchSuccess('true')}
                        className={props.launchSuccess === 'true' ? 'active' : ''}
                    >
                        True
                    </button>
                    <button
                        onClick={() => props.launchSuccess === 'false' ? props.onLaunchSuccess(null) : props.onLaunchSuccess('false')}
                        className={props.launchSuccess === 'false' ? 'active' : ''}
                    >
                        Flase
                    </button>
                </div>
            </div>
            <div className='filter__name'>
                <p className='title'>Successful Landing</p>
                <div className='filter__grid'>
                    <button
                        onClick={() => props.landSuccess === 'true' ? props.onLandSuccess(null) : props.onLandSuccess('true')}
                        className={props.landSuccess === 'true' ? 'active' : ''}
                    >
                        True
                    </button>
                    <button
                        onClick={() => props.landSuccess === 'false' ? props.onLandSuccess(null) : props.onLandSuccess('false')}
                        className={props.landSuccess === 'false' ? 'active' : ''}
                    >
                        Flase
                    </button>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        launchYear: state.launchYear,
        landSuccess: state.landSuccess,
        launchSuccess: state.launchSuccess
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onLandSuccess: (data) => dispatch(onLandSuccess(data)),
        onLaunchYear: (year) => dispatch(onLaunchYear(year)),
        onLaunchSuccess: (data) => dispatch(onLaunchSuccess(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);