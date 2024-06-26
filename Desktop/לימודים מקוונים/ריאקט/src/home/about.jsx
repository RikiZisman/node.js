import React from "react";
import { getUser } from '../api'
import './home.css'

export const About = () => {

    const getUserById =(event)=> {
        event.preventDefault();
        const password = event.target.elements.password.value;
        getUser(password);
    }

    return (
        <>

            <h1>T.R.L architecture</h1>
            <h2>מעצבים בשבילכם את החלום שלכם</h2>
        

            <form onSubmit={e => getUserById}>
                <label htmlFor="id">enter password</label>
                <input type="text" id="id" />
                <br />
                <button type="submit">get user by password</button>
            </form>

        </>

    )

}