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
			category: 'general',
			apiKey: 'abc72145994a45f19cd1781fe040f011',
			url : 'https://newsapi.org/v2/top-headlines?country=il&apiKey=abc72145994a45f19cd1781fe040f011&category=',
			data : {},
			toastDisplay : true
		}
	}
	componentDidMount() {
		this._isMounted = true;
		let category = this.props.user.category;
		var url = this.state.url + category;
		var req = new Request(url);
		fetch(req)
		.then(response => response.json())
		.then(newData=>{
			
			if (this._isMounted){
				this.setState({data : newData})
			}
		}).catch((error)=>{
			alert("Demo verison *source api error" );
			
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
		this.setState({category : selectedCategory})
	}
	onLoginBtnClick = (event) =>{
		if (event === 'login')
		this.props.history.push("/Login")
		else this.props.history.push("/Register")
	}
	render() {
		if (!this.props.user.isSignedIn) {
			this.props.history.push('/');
			}
		if (!this.state.data.articles) //When newsApi not working!!!
			return (
				<div id = 'myNewsContainer'>
						<Toast id="toastDisplay" show = {this.state.toastDisplay} onClose = {this.onCloseToast}>
								<Toast.Header>
									<img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
									<strong className="mr-auto">YourNews</strong>
									<small>now</small>
								</Toast.Header>
								{this.props.user.isSignedIn === true ? <Toast.Body>Hello, {this.props.user.username} ! your'e logged in.</Toast.Body>
								: <Toast.Body>Hello, {this.props.user.username} ! your'e in limited version.
								</Toast.Body>}
						
						</Toast>
						<Carousel id = "mainArticles" >
							<Carousel.Item>
								<img id = "mainImg" src={nonImage} alt="slide"/>
								<Carousel.Caption>
									<h3 id = "mainTitles">This is demo display</h3>
									<p id = "mainDesc">Error in NewsAPI Source , working only in localhost</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img id = "mainImg" src={nonImage} alt="slide"/>
								<Carousel.Caption onClick = {()=>this.props.history.push('/Weather')}>
									<h3 id = "mainTitles">Hey {this.props.user.username} ! check the weather today</h3>
									<p id = "mainDesc">You can search any city from every point of the earth . click on me!</p>
								</Carousel.Caption>
							</Carousel.Item>
					</Carousel>

						<div id = "navContainer" style = {{margin :'20px'}}>
							{this.props.user.isSignedIn === true ?
							<Nav id = "navGroup" variant="pills" defaultActiveKey= {this.props.user.category} onSelect={this.onSelectCategory}	>
								<Nav.Item>
									<Nav.Link eventKey="general">General</Nav.Link>
								</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="sports" >Sports</Nav.Link>
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
							</Nav> : (
								<Nav id = "navGroup" variant="pills" defaultActiveKey= {this.props.user.category}
								onSelect={this.onSelectCategory}>
								<Nav.Item>
									<Nav.Link eventKey="general">General</Nav.Link>
								</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="sports" disabled >Sports</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="technology" disabled>Technology</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="entertainment" disabled>Entertainment</Nav.Link>
									</Nav.Item>
										<Nav.Item>
										<Nav.Link eventKey="business" disabled>Business</Nav.Link>
									</Nav.Item> 	
							</Nav>)}
						</div>
						<OtherNews category = {this.state.category} news = {this.state.data.articles} isSignedIn = {this.props.user.isSignedIn} onLoginBtnClick={this.onLoginBtnClick}/>
					</div>
				 );
			// when newsApi working (from localhost...)	/////	
			////////////////////////////////////////////////
			///////////////////////////////////////////////			
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
					      	<h3 id = "mainTitles">{topNews[i].title}</h3>
					      	<p id = "mainDesc">{topNews[i].description}</p>
					    </Carousel.Caption>
					  </Carousel.Item>
					);
			});
		//else newsApi is working ...
		return (
			<div id = 'myNewsContainer'>
				<Toast id="toastDisplay" show = {this.state.toastDisplay} onClose = {this.onCloseToast}>
	  					<Toast.Header>
						    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
						    <strong className="mr-auto">YourNews</strong>
						    <small>now</small>
				  		</Toast.Header>
						  {this.props.user.isSignedIn === true ? <Toast.Body>Hello, {this.props.user.username} ! your'e logged in.</Toast.Body>
						  : <Toast.Body>Hello, {this.props.user.username} ! your'e in limited version.
						 <br></br><a href = "Login"> Login now</a></Toast.Body>}
				
				</Toast>
					<Carousel id = "mainArticles" >
						  {newsArray}
					</Carousel>

				<div id = "navContainer" style = {{margin :'20px'}}>
					{this.props.user.isSignedIn === true ?
					<Nav id = "navGroup" variant="pills" defaultActiveKey= {this.props.user.category}
						onSelect={this.onSelectCategory}>
						  <Nav.Item>
						    <Nav.Link eventKey="general">General</Nav.Link>
						  </Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="sports" >Sports</Nav.Link>
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
					</Nav> : (
						<Nav id = "navGroup" variant="pills" defaultActiveKey= {this.props.user.category}
						onSelect={this.onSelectCategory}>
						<Nav.Item>
							<Nav.Link eventKey="general">General</Nav.Link>
						</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="sports" disabled >Sports</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="technology" disabled>Technology</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="entertainment" disabled>Entertainment</Nav.Link>
							</Nav.Item>
								<Nav.Item>
								<Nav.Link eventKey="business" disabled>Business</Nav.Link>
							</Nav.Item> 	
					</Nav>)}
				</div>
				<OtherNews news = {this.state.data.articles} isSignedIn = {this.props.user.isSignedIn} onLoginBtnClick={this.onLoginBtnClick}/>
			</div>
		);
	
	}
}
export default MyNews;