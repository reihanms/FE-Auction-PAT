import React from "react";
import Landingpage from "./Component/Landingpage";

class App extends React.Component{
  constructor(props){
   super (props);
  }
  
  render(){
    return(
      <>
       {/* Landing Page*/}
       <Landingpage/>
      </>
    )
  }
}

export default App;
