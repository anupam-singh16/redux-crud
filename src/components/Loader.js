import React from 'react'
import 'rsuite/dist/rsuite.min.css';
import { Loader } from 'rsuite'
 
export default function App() {
return (
    <div style={{
    display: 'block', width: 700, paddingLeft:"45%",paddingTop:"1.2%"
  }}>
  {/* <h1 style={{color:'green'}}>GeeksforGeeks</h1> */}
    {/* <h4>React Suite Loader Component</h4> */}
    {/* <Loader speed="fast" content="Fast" /> */}
    {/* <hr /> */}
    <Loader speed="fast"/>
    {/* <hr /> */}
    {/* <Loader speed="slow" content="Slow" /> */}
    </div>
);
}