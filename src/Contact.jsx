import './Contact.css'

function ContactMe(){
    return(
        <>
            <div class="bottom-banner">
            <div class="container">
                <div class="screen">
                    <div class="screen-header">
                        <div class="screen-header-left">
                            <div class="screen-header-button close"></div>
                            <div class="screen-header-button maximize"></div>
                            <div class="screen-header-button minimize"></div>
                        </div>
                        <div class="screen-header-right">
                            <div class="screen-header-ellipsis"></div>
                            <div class="screen-header-ellipsis"></div>
                            <div class="screen-header-ellipsis"></div>
                        </div>
                    </div>
                    <div class="screen-body">
                        <div class="screen-body-item left">
                            <div class="app-title">
                                <span>Contact Me</span>
                            </div>
                            <div id="contact-wrapper">
                                <div class="app-contact"><b>Contact No.:</b> +63 956 098 6716</div>
                                <div class="app-contact"><b>Email:</b> contact@emmanarabit.online</div>
                                <div class="app-contact"><b>Github:</b> github.com/EmmanuelGitgud</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        </>
    )
}

export default ContactMe