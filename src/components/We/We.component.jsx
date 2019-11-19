import React from 'react';
import './We.styles.css'
import Second from '../../assets/images/second.png'

class We extends React.Component{
    render(){
        return(
            <div className="Second">
                <div className="Second-Image">
                    <img src={Second} height={'auto'} width={'500px'}/>
                </div>
                <div className='Second-Text'>
                    <h1>We are Like Google For Your Business Needs</h1>
                </div>
            </div>
        )
    }
}

export default We;