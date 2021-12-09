import React, { Component } from 'react';
import Course from './Course';

class Coursesales extends Component {
  //(function) method to sum up total pricing
  sumPrice(price) {
    //update the state of total
    this.setState({ total: this.state.total + price });
  }
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
    }; // total amount inti = 0

    this.sumPrice = this.sumPrice.bind(this); //bind sumPrice function in constructor
  }
  render() {
    console.log(this.props.items);
    //loop through array(courses in App.js)
    const courses = this.props.items.map((item, i) => {
      //pass name, price, key, sumPrice function to Course Component, and active
      return (
        <Course
          name={item.name}
          price={item.price}
          key={i}
          sumPrice={this.sumPrice}
          active={item.active}
        />
      );
    });
    return (
      <div>
        <h1>You can buy courses: </h1>
        <div id='courses'>
          {courses}
          <p id='total'>
            Total <strong>${this.state.total}</strong>
          </p>
        </div>
      </div>
    );
  }
}

export default Coursesales;
