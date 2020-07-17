import React from "react";

import SmurfList from './components/SmurfList';
import SmurfAdd from './components/SmurfAdd';


function App() {
  return (

    <div >
      <div >
        <SmurfAdd />
      </div>
      <div>
        <SmurfList />
      </div>
    </div>
  );
}

export default App;
