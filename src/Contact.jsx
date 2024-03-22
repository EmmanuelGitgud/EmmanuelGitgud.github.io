import './Contact.css'

function ContactMe(){
    return(
        <>
           <div className='contact-wrapper'>
                <h1 className='contact-banner'>Looking forward to hearing from you!</h1>
                <form className='form-wrapper' name='contact-form' netlify>
                    <input type="text" name='name' placeholder='Name' required/>
                    <input type="email" name='email' placeholder='Email' required/>
                    <textarea name="message" cols="30" rows="10" placeholder='Message' required/>
                    <button type='submit'>Send</button>
                </form>
           </div>
        </>
    )
}

export default ContactMe