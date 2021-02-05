import React from 'react';

import './Item.css';

const Item = props => {

    const populateMissionId = (
        <ul>
            {props.missionId.map((id, index) => (
                <li key={index}>{id}</li>
            ))}
        </ul>
    );

    return (
        <div className='item'>
            <div className='item__image'>
                <img src={props.imgsrc} alt={props.imgsrc}></img>
            </div>
            <div className='item__info'>
                <p className='item__name'>{props.missionName}#{props.flightNumber}</p>
                <div className='item__mission_id'>
                    Mission ids:
                    {populateMissionId}
                </div>
                <p>Launch Year: <span>{props.launchYear}</span></p>
                <p>Successful Launch: <span>{props.successfulLaunch}</span></p>
                <p>Successful Landing: <span>{props.successfulLanding}</span></p>
            </div>
        </div>
    );
}

export default Item;