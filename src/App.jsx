// import reactLogo from './assets/react.svg'
import './App.css';

function App(){
  return(
    <>
    <div className="main">
      <div className="nav">
        <div className="logo"><img src="/react.svg" alt="logo" className="lg" />React facts</div>
        <div className="links">
          <ul>
            <li>Learn</li>
            <li>Reference</li>
            <li>Community</li>
            <li>Blog</li>
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
        <img src="/react.svg" alt="react-logo" />
      </div>
      </div>
    </>
  )
}
export default App;