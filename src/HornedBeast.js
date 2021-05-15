// Create state inside of the HornedBeast component that keeps track of the number of times an image was clicked.

// Put a heart in each horned beast with the number of times it was “favorited” next to it.


import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    // this.state sets the initial value of state 
    this.state = {
      // key : value pair
      favorites: 0
    }
  }

  addFavorite = () => {
    // this.setState updates the value of state
    this.setState({ favorites: this.state.favorites + 1 });
    console.log('This is favorites after we updated state', this.state.favorites);
  }


  render() {
    return (
      <Card
        style={{ width: '18rem'}} bg='primary' >


        <Card.Img src={this.props.src} alt={this.props.alt} title={this.props.title} onClick={this.addFavorite} />
        <Card.Body>

          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>{this.state.favorites}❤️</Card.Text>
        </Card.Body>


      </Card>
    )
  }

}

export default HornedBeast;