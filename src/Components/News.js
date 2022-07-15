import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export default class News extends Component {
  static propTypes ={
    apiKey : PropTypes.string,
    country : PropTypes.string,
    pageSize : PropTypes.number,
    source : PropTypes.string,
  }
  static defaultProps = {
    source : ""
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      loading: false
    })
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    })
  }

  changePageBackward = async () => {
    this.setState({ page: this.state.page - 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      loading: false
    })
    this.setState({
      articles: parsedData.articles
    })
    this.setState({
      page: this.state.page - 1

    })
  }
  changePageForward = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      loading: false
    })
    this.setState({
      articles: parsedData.articles
    })
    this.setState({
      page: this.state.page + 1,

    })
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin: "35px"}}>NewsMonkey - See latest news here! {(this.props.source.length)?`-${this.props.source}`:""}</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((e) => {
            return <div className="col-md-4 my-2" key={e.url} > <NewsItem title={e.title ? e.title.slice(0, 21) + "...." : ""} description={e.description ? e.description.slice(0, 45) + "...." : ""} imageUrl={e.urlToImage} newsUrl={e.url} /></div>
          })}
        </div>
        <div className='d-flex justify-content-between'>
          <button type="button" disabled={this.state.page <= 1} className="btn btn-warning mx-5" onClick={this.changePageBackward}>&laquo; Previous</button>
          <button type="button" disabled={(this.state.page) === (Math.ceil(this.state.totalResults / this.props.pageSize))} className="btn btn-warning" onClick={this.changePageForward}>Next &raquo;</button>
        </div>
      </div>
    )
  }
}
