import './App.css';
import React from 'react';
import Location_ from './locations';

function App() {
  return (
    <div className="App">
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div className="TextTable">
        <div><h1>Star Explorer</h1></div>
        <Location_ />
      </div>
    </div>
  );
}

/*<div><p id="PName">Location: </p></div>
        <div><p>{locations["1"]}</p></div>
        */

/*<tr>
          <td>
            <h1>Star Explorer</h1>
          </td>
        </tr>
        <tr>
          <td>
            <p></p>
          </td>
        </tr>
        <tr>
          <td>
            <p id="description"></p>
          </td>
        </tr>*/

export default App;
