import React from "react";
import './App.css'

export default function Content(props){   


    return(
    <div className={props.Theme ? "main dark" : "main"}>
      <div className="nav">
        <div className="logo"><img src="/react.svg" alt="logo" className="lg" />ReactFacts</div>
        <div className="links">
          <ul>
            <li>Learn</li>
            <li>Reference</li>
            <li>Community</li>
            <li>Blog</li>
            <li><span className="toggle-theme" onClick={props.ToggleTheme}><i class={props.Theme ? "fa-solid fa-moon":"fa-solid fa-sun"}></i></span></li>
          </ul>
        </div>
      </div>
      <div className="facts">
        <h1 className="f-txt">Fun facts about REACT</h1>
        <ul className="f-list">
          <li>Was Released in 2013</li>
          <li>Was Originally created by Jordan Walke</li>
          <li>Is maintained by Facebook</li>
          <li>Has well over 100k stars on Github</li>
          <li>Build thousands of Enterprise apps, including Mobile Apps</li>
        </ul>
      </div>
      <img src="/react.svg" className="abs-logo" alt="react-logo" />
    </div>
    )
}