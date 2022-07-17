import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
  static propTypes = {
    apiKey: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  static defaultProps = {
    category: "general"
  }
  capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.props.category}` === "" ? "NewsMonkey" : `NewsMonkey |  ${this.capitalizeFirstLetter(this.props.category)} `;
    // console.log(this.capitalizeFirstLetter(this.props.category))
  }

  // async updateNews() {
  //   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json() 
  //   this.setState({
  //       articles: parsedData.articles,
  //       totalResults: parsedData.totalResults,
  //       loading: false
  //   })
  // }

  async componentDidMount() {
    console.log(this.state.page)
    console.log("cdm")
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
    // this.updateNews();
  }

  changePageBackward = async () => {

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
    this.setState({ page: this.state.page - 1 });
    // this.updateNews()
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
    this.setState({ page: this.state.page + 1 });
    // this.updateNews()
  }
  // fetchMoreData = async () => {
  //   // console.log(this.state.page)
  //   this.setState({page : this.state.page +1})
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({
  //     loading: true
  //   })
  //   let data = await fetch(url);
  //   let parsedData = await data.json()
  //   this.setState({
  //     articles: this.state.articles.concat(parsedData.articles),
  //     totalResults: parsedData.totalResults,
  //     loading : false
  //   })
  // };
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{ margin: "35px" }}>NewsMonkey - See latest news here! {(this.props.category.length) ? `-${this.capitalizeFirstLetter(this.props.category)}` : ""}</h1>


        


        {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.page != this.state.totalResults}
          loader={<Spinner/>}
        > */}


          <div className="row">
            { !this.state.loading && this.state.articles.map((e,index) => {
              return <div className="col-md-4 my-2" key={index} > <NewsItem title={e.title ? e.title.slice(0, 21) + "...." : ""} description={e.description ? e.description.slice(0, 45) + "...." : ""} imageUrl={e.urlToImage} newsUrl={e.url} publishedAt={e.publishedAt} source={e.source.name} author={e.author} /></div>
            })}
          </div>


        {/* </InfiniteScroll> */}


        <div className='d-flex justify-content-between'>
          <button type="button" disabled={this.state.page <= 1} className="btn btn-warning mx-5" onClick={this.changePageBackward}>&laquo; Previous</button>
          <button type="button" disabled={(this.state.page) === (Math.ceil(this.state.totalResults / this.props.pageSize))} className="btn btn-warning" onClick={this.changePageForward}>Next &raquo;</button>
        </div>
        {this.state.loading && <Spinner />}


      </div>
    )
  }
}


