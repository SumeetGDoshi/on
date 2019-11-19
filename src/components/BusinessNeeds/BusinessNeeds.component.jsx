import React from 'react';
import Top from '../../assets/images/top2.png'
import './BusinessNeeds.styles.css'

class BusinessNeeds extends React.Component{
    render(){
        return(
            <div>
                <div className="Form">
                    <aside>
                    <img src={Top} width ={'250px'} height={'auto'}/>
                    </aside>
                    <form>
                        <div className="Whole-Form">
                            <div className="Inside-Form">
                            <input className="Input1" type='text' placeholder="What Does your Business Needs?"/>
                            </div>
                            <div className="Inside-Form2">
                                <input className="Input2" type="text" placeholder="Contact Number"/>
                            </div>
                            <div className="Form-Button">
                            <button>Get It Done</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default BusinessNeeds;