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
  pageSize = 6;
  apiKey = "1844a5c147db4e7d9c4d9a714995142a"
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key = "home" apiKey={this.apiKey} category="" pageSize={this.pageSize} country="in" />} />
            <Route exact path="/about" element={<About mode="light"/>} />
            <Route exact path="/business" element={<News key = "business" apiKey={this.apiKey}  category="business" pageSize={this.pageSize}  country="in" />} />
            <Route exact path="/entertainment" element={<News key = "entertainment" apiKey={this.apiKey} category="entertainment" pageSize={this.pageSize} country="in" />} />
            <Route exact path="/general" element={<News key = "general" apiKey={this.apiKey} category="general" pageSize={this.pageSize}  country="in" />} />
            <Route exact path="/health" element={<News key = "health" apiKey={this.apiKey} category="health" pageSize={this.pageSize}  country="in" />} />
            <Route exact path="/science" element={<News key = "science" apiKey={this.apiKey} category="science" pageSize={this.pageSize}  country="in" />} />
            <Route exact path="/sports" element={<News key = "sports" apiKey={this.apiKey} category="sports" pageSize={this.pageSize}  country="in" />} />
            <Route exact path="/technology" element={<News key = "technology" apiKey={this.apiKey} category="technology"  pageSize={this.pageSize} country="in" />} />
          </Routes> 
        </BrowserRouter>
      </>

    )
  }
}
