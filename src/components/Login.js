import React from "react";

export default function Login(){
    //map through array of projects
    return (
            <div class="container">
    <div class="float">
        <div class="stack-g">
        <div class="inline" id="login">
            <input type="text" id="username" placeholder="Username"/>
            <input type="password" id="password" placeholder="Password"/>
            <button type="button" id="login">Login</button>
        </div>
        <div class="divider inline"></div>
        <div class="inline" id="register">
            <input type="text" id="username" placeholder="Username"/>
            <input type="password" id="password1" placeholder="Password"/>
            <input type="password" id="password2" placeholder="Confirm Password"/>
            <button type="button" id="register">Register</button>
        </div>
        </div>
    </div>
    </div>
    )
}