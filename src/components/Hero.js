import React from "react"
import group from '../images/group.png';

export default function Hero(){
    return(
        <section className="hero">
            <img className="hero--image" src={group} />
            <h1>Online Experiences</h1>
            <p>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}