import React, { Component } from 'react';

export default class Giay extends Component {
    
  render() {
    const {image, name, price, description, quantity} = this.props.item ;
    return (
        <div className='card'>
        <img className='card-image-top' src={image} alt="" />
        <div className='card-body'>
            <h4 className='card-title'>{name}</h4>
            <p className='card-text'> {price}$</p>
            <div className='mb-3'>{this.props.children}</div>
            <button className='btn btn-info' onClick={()=> this.props.ClickDetail(description,quantity)}>XEM MO TA</button>
        </div>
    </div>
    )
  }
}
