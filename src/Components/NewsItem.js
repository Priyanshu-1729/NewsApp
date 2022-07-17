import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    // let {this.props.title}= this.props;
    return (
      <div className='conatiner mx-5'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={(this.props.imageUrl == null) ? "https://media2.gmgroup.be/00_nm_logo.png" : this.props.imageUrl} className="card-img-top" alt="..." />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style = {{left : '90%' , zIndex:'1'}}>
            {this.props.source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <div className="card-body">

            <h5 className="card-this.props.title">{this.props.title}</h5>
            <p className="card-text">{this.props.description}</p>
            <p className="card-text"><small className="text-muted"> By {(this.props.author === null)?"Unknown":`${this.props.author}`} {new Date(this.props.publishedAt).toLocaleDateString()} | {new Date(this.props.publishedAt).toLocaleTimeString()}</small></p>
            <a href={this.props.newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}
