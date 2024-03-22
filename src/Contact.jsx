import './Contact.css'
import { Link } from 'react-router-dom'

function ContactMe(){
    return(
        <>
           <div className='contact-wrapper'>
            <div className='contact-banner-container'>
                <h1 className='contact-banner'>Looking forward to hearing from you!</h1>   
            </div>       
                <div className='form-container'>
                    <div className='contact-info'>
                        <h2>Number: +639560986716</h2>
                        <h2>Email: contact@emmanarabit.online</h2>   
                        <h2>Github: <a href="https://github.com/EmmanuelGitgud" target='_blank'>EmmanuelGitgud</a></h2>
                    </div>
                    <form className='form-wrapper' action='/success' name='contact' method='post' netlify>
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="text" name='name' placeholder='Name' required/>
                        <input type="email" name='email' placeholder='Email' required/>
                        <textarea name="message" cols="30" rows="10" placeholder='Message' required/>
                        <button type='submit'>Send</button>
                    </form>
                </div>
           </div>
        </>
    )
}

export default ContactMe