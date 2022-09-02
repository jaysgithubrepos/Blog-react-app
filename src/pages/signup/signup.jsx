import "./signup.css";

function signup() {
  return (
    <div className='div-container'>
        <div className="headertitle"><span>Signup Page</span></div>
        <div className='login-container'>
            
            <form>
            <div className="first-div">
                    <label className="first-name">First Name</label>
                    <input type="texxt" placeholder="e.g Jaichand" className="input-first-div" autofocus="true"></input>
                </div>
                <div className="last-div">
                    <label className="last-name">Last Name</label>
                    <input type="text" placeholder="e.g Yadav" className="input-last-div" autofocus="true"></input>
                </div>
                <div className="email-div">
                    <label className="label-email">Your Email</label>
                    <input type="email" placeholder="e.g elon@tesla.com" className="input-email-div" autofocus="true"></input>
                </div>
                <div className="password-div">
                <label className="label-password">Your Password</label>
                    <input type="password" placeholder="e.g ilovereact@123" className="input-password-div" autofocus="true"></input>
                </div>
                <div className="confirm-password-div">
                <label className="label-password">Comfirm Password</label>
                    <input type="password" placeholder="e.g ilovereact@123" className="input-confirm password-div" autofocus="true"></input>
                </div>
                <div className="button=div">
                    <button className="button-button-div">Sign Up</button>
                </div>
                <div className="link-div">
                    <span>Already have a account</span>
                    <span>Please  Signin</span>

                </div>

            </form>

        </div>
    </div>
  )
}

export default signup