import React from "react";
import Landingpage from "./Component/Landingpage";
import HomePage from "./Component/homepage/HomePage";

class App extends React.Component{
  constructor(props){
   super (props);
  }
  
  render(){
    return(
      <>
       {/* Landing Page*/}
      <HomePage/>
       {/* <Name/> */}
       {/* <Landingpage/> */}
      </>
    )
  }
}

export default App;
