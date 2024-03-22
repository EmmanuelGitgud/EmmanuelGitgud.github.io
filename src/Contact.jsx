import './Contact.css'
import { Link, useNavigate } from 'react-router-dom'

function ContactMe(){
    let navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        let myForm = document.getElementById("contact-form");
        let formData = new FormData(myForm);
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
        .then(() => navigate('/success'))
        .catch((error) => alert(error));
    }

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
                    <form id='contact-form' className='form-wrapper'onSubmit={submitHandler}>
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