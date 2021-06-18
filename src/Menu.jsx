import React from 'react';
import {NavLink} from 'react-router-dom'
import { Component } from 'react';
const Menu = () =>
{
    return(
        <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Df">Df</NavLink>
        <NavLink to="/New">New</NavLink>
        </>
    )
}