import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jill Johnson',
                email: 'jill@gmail.com',
                phone: '111-111-111',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Fill Pop',
                email: 'pop@gmail.com',
                phone: '123-111-111',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Pieter Lap',
                email: 'lap@gmail.com',
                phone: '234-311-141',
                type: 'personal'
            },
            {
                id: 4,
                name: 'Koos Botha',
                email: 'kb@gmail.com',
                phone: '222-511-511',
                type: 'professional'
            }
        ],
        current: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add contact
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({ type: ADD_CONTACT, payload: contact });
    }

    // Delete contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    }

    // Set current contact
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact });
    }

    // Clear current contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    }

    // Update contact

    // Filter contacts

    // Clear filter

    return (
        <ContactContext.Provider value={{
            contacts: state.contacts,
            current: state.current,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent
        }}>
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContactState;