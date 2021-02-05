import React from 'react';
import Filter from './Filter';
import Items from './Items';

import './Main.css';

const Main = props => {
    return (
        <main className='main_container'>
            <Filter />
            <Items />
        </main>
    );
}

export default Main;