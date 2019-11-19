import React from 'react';
import './How.styles.css';

import block1 from '../../assets/images/b1.png';
import block2 from '../../assets/images/b2.png';
import block3 from '../../assets/images/b3.png';
import block4 from '../../assets/images/b4.png';


function How(){
    return (
        <div className="how-do-we-do-it">
            <h2>so how would this work?</h2>
            <div className="block">
                <div className="small-blocks">
                    <img className="block-img1" src={block1} height={189} width={124} />
                    <div className="block-text1"> 
                    <p>Tell us all that your business currently needs</p>
                    </div>
                </div>

                <div className="small-blocks">
                    <img className="block-img2" src={block2} width={125} height={176}/>
                    <div className="block-text2">
                    <p>We reach out to you on Whatsapp to understand your needs fully.</p>
                    </div>
                </div>

                <div className="small-blocks">
                    <img className="block-img3" src={block3} width={135} height={169} />
                    <p>We analyze your needs and give you solutions.</p>
                </div>

                <div className="small-blocks">
                    <img className="block-img4" src={block4} width={164} height={176}/>
                    <div className="block-text4">
                    <p>guaranteed quality at the most affordable prices, your need is solved!</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default How;