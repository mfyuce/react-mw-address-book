/**
 * Created by alex on 28/09/2016.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AddressBook from './components/AddressBook'

injectTapEventPlugin();

const getInitialAddresses = () => {
    if (localStorage.getItem('addresses') === null)
        localStorage.setItem('addresses', JSON.stringify([
            {
                id: 'c0001',
                name: 'Tim',
                email: 'tim@uts.edu.au'
            }, {
                id: 'c0002',
                name: 'Wilson',
                email: 'wilson@uts.edu.au'
            }
        ]))
    return JSON.parse(localStorage.getItem('addresses'))
}

ReactDOM.render(
    <AddressBook
        addresses={getInitialAddresses()}
    />,
    document.getElementById('root')
);
