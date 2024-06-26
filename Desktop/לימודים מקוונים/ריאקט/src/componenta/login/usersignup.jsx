import React from "react";
import { sighnUp } from '../../api';

export const SighnUp = () => {

    const data = (event) => {
        event.preventDefault();
        //להכניס 
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const phone = event.target.elements.phone.value;
        const email = event.target.elements.email.value;

        const user={
            username:username,
            password:password,
            phone:phone,
            email:email
        }
        sighnUp(user);

    }

    return <div>
        <form onSubmit={e => data(e)}>
            <label htmlFor="username">Enter A user name</label>
            <input type="text" id="username"/>
            <label htmlFor="password">Enter your password</label>
            <input type="text" id="password"/>
            <label htmlFor="phone">Enter your phone number</label>
            <input type="text" id="phone" />
            <label htmlFor="email">Enter your email</label>
            <input type="text" id="email"/>
            <button type="submit" >sighn up</button>
        </form>


    </div>

}