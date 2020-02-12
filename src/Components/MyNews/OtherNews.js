import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import nonImage from './nonImage.png'
const OtherNews = ({ news }) => { 
	let newsImage = nonImage;
	var otherNews = [];
	for (let index = 5 ; index<news.length ; index++){
		otherNews.push(news[index]);
	}
	const newsArray = otherNews.map((user,i) => {
			if (otherNews[i].urlToImage) newsImage = otherNews[i].urlToImage;
			return (
				<Card style={{width: '18rem' , margin : '10px' }} key= {i}>
					  <Card.Img variant="top" src={newsImage} />
					  <Card.Body>
					    <Card.Title>{otherNews[i].title}</Card.Title>
					    <Card.Text>
					      {otherNews[i].description}
					    </Card.Text>
					   	 <Button variant="primary" onClick ={()=>window.open(otherNews[i].url, '_blank').focus()}>Click for More</Button><br/><br/>
					   	 <Button variant="outline-success"
					   	  onClick ={()=>window.open('https://api.whatsapp.com/send?text='+otherNews[i].url, '_blank').focus()}>
					   	  Share via Whatsapp</Button>
					  </Card.Body>
					</Card>
				);
	});
	return (
		<div className="row align-items-center justify-content-center">
			{newsArray}
		</div>
		);
}
export default OtherNews;