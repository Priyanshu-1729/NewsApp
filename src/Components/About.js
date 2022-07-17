// import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    let myStyle = {
        color : (props.mode === 'dark')?'white':'black',
        backgroundColor : (props.mode === 'light')?'white':'rgb(30 15 185)',
        border : '1px solid',
        borderColor : (props.mode === 'dark')?'white':'black'
    }
    // const [btnText,setbtnText] = useState("Dark Mode")
    // const toggleMode = () =>{
    //     if(myStyle.color ='== 'black')
    //     {
    //         setMyStyle({
    //             color : 'white',
    //             backgroundColor :'black',
    //             border : '1px solid white'
    //         })
    //         setbtnText("Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color : 'black',
    //             backgroundColor :'white',
    //         })
    //         setbtnText("Dark Mode")
    //     }
    // }
    
    return (
        <div className='container my-2' style={{color : (props.mode === 'dark')?'white':'black'}}>
            <h1>{props.title}</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            Free to use
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                        <div className="accordion-body">
                            <strong>This App is free to use</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            Easy and optimized
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Optimization is our top priority.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            Browser compatibility
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Compatible with all platforms.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container my-2' >
                <button type="button" className="btn btn-primary" onClick={toggleMode}>{btnText}</button>

            </div> */}
        </div>
    )
}
About.defaultProps = {
    title: 'About NewsMonkey :)'
  };







































//   import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// export default class News extends Component {
//   static propTypes = {
//     apiKey: PropTypes.string,
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   }
//   static defaultProps = {
//     category: ""
//   }
//   constructor() {
//     super();
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0
//     }
//   }

//   async updateNews() {
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     let parsedData = await data.json() 
//     this.setState({
//         articles: parsedData.articles,
//         totalResults: parsedData.totalResults,
//         loading: false
//     })
//   }

//   async componentDidMount() {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     // this.setState({
//     //   loading: true
//     // })
//     // let data = await fetch(url);
//     // let parsedData = await data.json()
//     // this.setState({
//     //   loading: false
//     // })
//     // this.setState({
//     //   articles: parsedData.articles,
//     //   totalResults: parsedData.totalResults
//     // })
//     this.updateNews();
//   }

//   changePageBackward = async () => {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
//     // this.setState({
//     //   loading: true
//     // })
//     // let data = await fetch(url);
//     // let parsedData = await data.json()
//     // this.setState({
//     //   loading: false
//     // })
//     // this.setState({
//     //   articles: parsedData.articles
//     // })
//     this.setState({ page: this.state.page - 1 });
//     this.updateNews()
//   }
//   changePageForward = async () => {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//     // this.setState({
//     //   loading: true
//     // })
//     // let data = await fetch(url);
//     // let parsedData = await data.json()
//     // this.setState({
//     //   loading: false
//     // })
//     // this.setState({
//     //   articles: parsedData.articles
//     // })
//     this.setState({ page: this.state.page + 1 });
//     this.updateNews()
//   }

//   render() {
//     return (
//       <div className='container my-3'>
//         <h1 className='text-center' style={{ margin: "35px" }}>NewsMonkey - See latest news here! {(this.props.category.length) ? `-${this.props.category}` : ""}</h1>
//         {this.state.loading && <Spinner />}
//         <div className="row">
//           {!this.state.loading && this.state.articles.map((e) => {
//             return <div className="col-md-4 my-2" key={e.url} > <NewsItem title={e.title ? e.title.slice(0, 21) + "...." : ""} description={e.description ? e.description.slice(0, 45) + "...." : ""} imageUrl={e.urlToImage} newsUrl={e.url} publishedAt={e.publishedAt} source={e.source.name} author={e.author} /></div>
//           })}
//         </div>
//         <div className='d-flex justify-content-between'>
//           <button type="button" disabled={this.state.page <= 1} className="btn btn-warning mx-5" onClick={this.changePageBackward}>&laquo; Previous</button>
//           <button type="button" disabled={(this.state.page) === (Math.ceil(this.state.totalResults / this.props.pageSize))} className="btn btn-warning" onClick={this.changePageForward}>Next &raquo;</button>
//         </div>
//       </div>
//     )
//   }
// }
