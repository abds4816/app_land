import React from 'react';

function About(props) {
    return (
        <div id='about'>
            <div className="about-image">
                <img src={props.image} alt="hh" />
            </div>
            <div className="about-text">
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum ex nihil iure earum aut facere iusto et nulla inventore ut commodi repellat, cum ducimus dolor recusandae illum iste nemo exercitationem ipsa. Voluptate, repellat? Sed?</p>
                <button>{props.button}</button>
            </div>
        </div>
    )
}

export default About