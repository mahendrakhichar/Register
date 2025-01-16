import React from "react";
import Container from "./components/Container";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Form from "./components/form/Form";
import './App.css'

function App()  {
  return (
      <Router>
        <Routes>
          <Route path="/" element= {<Container/>}/>
          <Route path = "/add-student" element={<Form/>} />
        </Routes>
      </Router>
  );
}

export default App;