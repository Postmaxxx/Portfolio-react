import './themeSwitcher.scss';
import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../assets/redux/actions'
import { bindActionCreators } from 'redux';

const ThemeSwitcher = props => {

    const body = document.getElementsByTagName("BODY")[0];
    props.store.theme === 'dark' ? body.classList.add('dark') : body.classList.remove('dark')

    function changeTheme () {
        if (props.store.theme === 'light') {
            props.setStore.setTheme('dark')
            console.log('to dark', props  );
        } else {
            props.setStore.setTheme('light')
            console.log('to light', props);
        }
    }


    return (
        <div className='theme-switcher__container' onClick={() => changeTheme()}>
            <input type="checkbox" 
                id='theme-checkbox'
                checked={props.store.theme === 'dark' ? true : false}
            />
            <p>{props.store.theme}</p>
        </div>
    )
   
}


const mapStateToProps = (store) => ({store: store})


const mapDispatchToProps = (dispatch) => ({
    setStore: bindActionCreators(actions, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);