import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import nonImage from './nonImage.png'
import './OtherNews.css';

function OtherNews ({news,isSignedIn,onLoginBtnClick,category}) {
	
	const [show,setShow] = useState(false);
	const [index,setIndex] = useState(0);
	const [btext,setBtext] = useState("");
	const handleClose = () => setShow(false);
	const handleShow = (i) => {
		setIndex(i);
		setShow(true);
	}

	
	let newsImage = nonImage;
	// If newsApi not working !!!!!!
	if(!news) {
		let cards = [];
		for (let i = 1 ; i<11 ; i++) {
			cards.push(<Card id = "cardContainer" key= {i}  >
			<Card.Img id = 'cardImg' variant="top" src={newsImage} />
			<Card.Body>
			  <Card.Title id ="cardTitle">Title #{i} - {category} </Card.Title>
			  {isSignedIn === true ?
				  <div id = "buttons">
					  <Button variant="primary" style = {{cursor:'pointer'}} onClick ={()=> handleShow(i)}>Summary</Button>
					  <Button variant="outline-success" style = {{margin:'10px'}}
					  onClick ={()=>window.open('https://api.whatsapp.com/send?text=Title_'+i, '_blank').focus()}>
					  Share via Whatsapp</Button>
				  </div>
				  :<div id = "buttons">
							 <Button variant="primary" style = {{cursor:'pointer'}} 
									onClick ={()=>{setBtext("Full articles are available for registered friends only")
										handleShow(i)}}>Summary</Button>
							<Button variant="outline-success" style = {{margin:'10px'}}
									onClick ={()=>{setBtext("You can't share in guest mode")
									handleShow(i)}}>Share via Whatsapp</Button>
			  </div> }
			</Card.Body>
		  </Card>)
		}
		return(
			<div id = "cardsModalContainer" >
					{isSignedIn === true ? // modal for user
					<Modal id = "modal" show={show} onHide={handleClose} size = "lg" animation = 'true'>
						<Modal.Header closeButton>
					<Modal.Title style = {{textAlign:'center'}}>title # {index}</Modal.Title>
						</Modal.Header>
							<Modal.Body>
								<h3 style ={{color:'gray',fontSize : '11px',textAlign:'right'}}>Dudi Levi<br></br></h3>
								<img src = {newsImage} style = {{width: '100%'}} alt = 'YourNews'/>
									<p  style = {{textAlign:'center'}}>This is demo verison! </p>	
									<div style = {{color:'gray',fontSize : '11px'}}>YourNews<br></br>
										08/06/2020
									</div>
							</Modal.Body>
						<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
							<Button variant="primary" style = {{marginBlock:'10px'}}>
										To article</Button>
						<Button variant="outline-success"
								onClick ={()=>window.open('https://api.whatsapp.com/send?text=Title_'+index, '_blank').focus()}>
								Share via Whatsapp</Button>
						</Modal.Footer>
					</Modal>
					: // modal for guest
					<Modal show={show} onHide={handleClose}>
							<Modal.Header closeButton>
								<Modal.Title>YourNews</Modal.Title>
							</Modal.Header>

							<Modal.Body>
								<p>{btext}</p>
							</Modal.Body>

							<Modal.Footer>
								<Button variant="secondary"onClick = {handleClose}>Close</Button>
								<Button variant="primary" onClick = {()=>onLoginBtnClick("login")}>Login</Button>
								<Button variant = "dark" onClick = {()=> onLoginBtnClick("register")}>Register</Button>
							</Modal.Footer>
							</Modal>}
				<div id = "cardsContainer">
					{cards}
				</div>
			</div>
		);
	}
	//if newsApi working!!!
	var otherNews = [];
	for (let index = 5 ; index<news.length ; index++){
		otherNews.push(news[index]);
	}
	const newsArray = otherNews.map((user,i) => {
			if (otherNews[i].urlToImage) newsImage = otherNews[i].urlToImage;
			return (
				<Card id = "cardContainer" key= {i}  >
					  <Card.Img id = 'cardImg' variant="top" src={newsImage} />
					  <Card.Body>
					    <Card.Title id ="cardTitle">{otherNews[i].title}</Card.Title>
						{isSignedIn === true ?
							<div id = "buttons">
								<Button variant="primary" style = {{cursor:'pointer'}} onClick ={()=> handleShow(i)}>Summary</Button>
								<Button variant="outline-success" style = {{margin:'10px'}}
								onClick ={()=>window.open('https://api.whatsapp.com/send?text='+otherNews[i].url, '_blank').focus()}>
								Share via Whatsapp</Button>
							</div>
							:<div id = "buttons">
							<Button variant="primary" style = {{cursor:'pointer'}} 
							onClick ={()=>{setBtext("Full articles are available for registered friends only")
								handleShow(i)}}>Summary</Button>
							<Button variant="outline-success" style = {{margin:'10px'}}
							onClick ={()=>{setBtext("You can't share in guest mode")
							handleShow(i)}}>
							Share via Whatsapp</Button>
						</div> }
					  </Card.Body>
					</Card>
				);
	});

	if (otherNews[index].urlToImage) newsImage = otherNews[index].urlToImage;
	else newsImage = nonImage;
	return (
		<div id = "cardsModalContainer" >
			{isSignedIn === true ? // modal for user
			<Modal id = "modal" show={show} onHide={handleClose} size = "lg" animation = 'true'>
				<Modal.Header closeButton>
				<Modal.Title style = {{textAlign:'center'}}>{otherNews[index].title}</Modal.Title>
				</Modal.Header>
					<Modal.Body>
						<h3 style ={{color:'gray',fontSize : '11px',textAlign:'right'}}>{otherNews[index].author}<br></br></h3>
						<img src = {newsImage} style = {{width: '100%'}} alt = 'YourNews'/>
							<p  style = {{textAlign:'center'}}>{otherNews[index].description}</p>	
							<div style = {{color:'gray',fontSize : '11px'}}>{otherNews[index].source.name}<br></br>
							{otherNews[index].publishedAt}
							</div>
					</Modal.Body>
				<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
					<Button variant="primary"
								onClick ={()=>window.open(otherNews[index].url, '_blank').focus()} style = {{marginBlock:'10px'}}>
								To article</Button>
				<Button variant="outline-success"
					   	  onClick ={()=>window.open('https://api.whatsapp.com/send?text='+otherNews[index].url, '_blank').focus()}>
					   	  Share via Whatsapp</Button>
				</Modal.Footer>
			</Modal>
			: // modal for guest
			<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>YourNews</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<p>{btext}</p>
					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary"onClick = {handleClose}>Close</Button>
						<Button variant="primary" onClick = {()=>onLoginBtnClick("login")}>Login</Button>
						<Button variant = "dark" onClick = {()=> onLoginBtnClick("register")}>Register</Button>
					</Modal.Footer>
					</Modal>}

			<div id = "cardsContainer">
				{newsArray}
			</div>
		</div>
		);
}
export default OtherNews;
