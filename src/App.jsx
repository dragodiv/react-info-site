import React from 'react';
import Content from './Content';

function App(){
  const [Theme, setTheme] = React.useState(false)
  function ToggleTheme(){
      setTheme(prevTheme => !prevTheme);
  }
  return(
      <Content Theme={Theme} ToggleTheme={ToggleTheme}/>
      // <Content/>
  )
}
export default App;