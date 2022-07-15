import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    // let {this.props.title}= this.props;
    return (
      <div className='conatiner mx-5'>
        <div className="card" style={{width: "18rem"}}>
        <img src={(this.props.imageUrl==null)?"https://media2.gmgroup.be/00_nm_logo.png":this.props.imageUrl} className="card-img-top" alt="..."/>
         
          <div className="card-body">
            <h5 className="card-this.props.title">{this.props.title}</h5>
            <p className="card-text">{this.props.description}</p>
            <a href={this.props.newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read more</a>
          </div>
      </div>
      </div>
    )
  }
}
