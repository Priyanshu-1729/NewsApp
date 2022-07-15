// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
// import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './Components/About';

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<News apiKey="269fc3ff40c54bc8a3879577db246176" category="" pageSize={6} country="in" />} />
            <Route path="/about" element={<About mode="light"/>} />
            <Route path="/business" element={<News apiKey="269fc3ff40c54bc8a3879577db246176" category="business" pageSize={6} source="business" country="in" />} />
            <Route path="/entertainment" element={<News apiKey="269fc3ff40c54bc8a3879577db246176" category="entertainment" pageSize={6} source="entertainment" country="in" />} />
            <Route path="/general" element={<News apiKey="269fc3ff40c54bc8a3879577db246176" category="general" pageSize={6} source="general" country="in" />} />
            <Route path="/health" element={<News apiKey="269fc3ff40c54bc8a3879577db246176" category="health" pageSize={6} source="health" country="in" />} />
            <Route path="/science" element={<News apiKey="269fc3ff40c54bc8a3879577db246176" category="science" pageSize={6} source="science" country="in" />} />
            <Route path="/sports" element={<News apiKey="269fc3ff40c54bc8a3879577db246176" category="sports" pageSize={6} source="sports" country="in" />} />
            <Route path="/technology" element={<News apiKey="269fc3ff40c54bc8a3879577db246176" category="technology" source="technology" pageSize={6} country="in" />} />
          </Routes>
        </BrowserRouter>
      </>

      // <div>
      //     <Navbar/>
      //     <News apiKey="269fc3ff40c54bc8a3879577db246176" category="science" pageSize={5} country = "in"/>
      // </div>
    )
  }
}
