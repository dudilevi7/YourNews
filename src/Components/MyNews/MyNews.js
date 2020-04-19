import React , {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Spinner from 'react-bootstrap/Spinner'
import Toast from 'react-bootstrap/Toast'
import Nav from 'react-bootstrap/Nav'
import OtherNews from './OtherNews';
import nonImage from './nonImage.png'
import './MyNews.css';

class MyNews extends Component {
	_isMounted = false;
	constructor(props){
		super(props);
		this.state = {
			category: '',
			apiKey: '3580620b7e0341c0aac4bc7d8754db54',
			url : 'https://newsapi.org/v2/top-headlines?country=il&apiKey=3580620b7e0341c0aac4bc7d8754db54&category=',
			data : {},
			toastDisplay : true
		}
	}
	componentDidMount() {
		this._isMounted = true;
		let category = this.props.user.category;
		var url = this.state.url + category;
		var req = new Request(url);
		fetch(req).then(response => response.json())
		.then(newData=>{
			if (this._isMounted){
				this.setState({data : newData})
			}
		});	
	}
	componentWillUnmount() {
   		 this._isMounted = false;
  	}
	onCloseToast = () => {
		this.setState({toastDisplay : false});
	}
	onSelectCategory = (selectedCategory)=> {
		var url = this.state.url + selectedCategory;
		var req = new Request(url);
		fetch(req).then(response => response.json())
		.then(newData=>{
			if (this._isMounted){
				this.setState({data : newData})
			}
		});
	}
	render() {
		if (!this.props.user.isSignedIn) {
			this.props.history.push('/');
			}
		if (!this.state.data.articles) return <Spinner animation="border" />;

			var news = this.state.data.articles;
			let newsImage = nonImage;
			var topNews = [];
				for (let index = 0 ; index<5 ; index++){
					topNews.push(news[index]);
				}
			const newsArray = topNews.map((user,i) => {
				let newsImage = nonImage;
				if (topNews[i].urlToImage) newsImage = topNews[i].urlToImage;
				return (
					  <Carousel.Item onClick ={()=>window.open(news[i].url, '_blank').focus()} key = {i}>
					    <img
					      id = "mainImg"
					      src={newsImage}
					      alt="slide"
					    />

					    <Carousel.Caption>
					      	<h3 style = {{background: ' black',fontSize: 20}}>{topNews[i].title}</h3>
					      	<p style = {{background: ' black' ,fontSize : 15}}>{topNews[i].description}</p>
					    </Carousel.Caption>
					  </Carousel.Item>
					);
			});
		//console.log(newsArray)
		return (
			<div id = 'myNewsContainer'>
				<Toast id="toastDisplay" show = {this.state.toastDisplay} onClose = {this.onCloseToast}>
	  					<Toast.Header>
						    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
						    <strong className="mr-auto">YourNews</strong>
						    <small>now</small>
				  		</Toast.Header>
			  		<Toast.Body>Hello, {this.props.user.username} ! your'e logged in.</Toast.Body>
				</Toast>
					<Carousel id = "mainArticles" >
						  {newsArray}
					</Carousel>

				<div id = "navContainer"style = {{margin :'20px'}}>
					<Nav variant="pills" defaultActiveKey= {this.props.user.category}
						onSelect={this.onSelectCategory}>
						  <Nav.Item>
						    <Nav.Link eventKey="general">General</Nav.Link>
						  </Nav.Item>
						  <Nav.Item>
						    <Nav.Link eventKey="sports">Sports</Nav.Link>
						  </Nav.Item>
						   <Nav.Item>
						    <Nav.Link eventKey="technology">Technology</Nav.Link>
						  </Nav.Item>
						  <Nav.Item>
						    <Nav.Link eventKey="entertainment">Entertainment</Nav.Link>
						  </Nav.Item>
						    <Nav.Item>
						    <Nav.Link eventKey="business">Business</Nav.Link>
						  </Nav.Item>
					</Nav>
				</div>
				<OtherNews news = {this.state.data.articles}/>
			</div>
		);
	
	}
}
export default MyNews;