import React,{Component} from 'react';
import './Contact.styles.css'
import contact from '../../assets/images/contact.png'
class Contact extends Component{
    render(){
        return(
            <div className="Contact">
                <div className='contact-image'>
                    <img src={contact} width={'auto'} height={'400px'}/>
                </div>
                <div className="contact-text">
                <p>Contact US!</p>
                </div>
                <div className="Contact-form">
                    <form action="">
                        <input placeholder="Name" type="text"/>
                        <input type="text" placeholder="Email Id "/>
                        <input type='text' placeholder="Number"/>

                        <button>Get In Touch</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;