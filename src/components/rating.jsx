import React, {Component} from 'react';

class Rating extends Component {

  constructor(){
    super();
    this.defaultProps = {
        max: 5,
        rating: 0
    };
  }

  rate(point){
    this.props.onRate(point);
  }

  render(){
    var rating = [];
    for(let i = 0; i < this.props.rating; i++){
      rating.push(<i id="star" className="star icon" key={i} ></i>);
    };
    return (
        <div className="ui star rating">
          {this.props.rating > 0 ? rating : <p>尚未評分</p>}
        </div>
    );
  }
}

export default Rating;
