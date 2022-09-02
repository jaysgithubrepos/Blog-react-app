import "./login.css";

function login() {
  return (
    <div className='div-container'>
        <div className="headertitle"><span>Good to See you again</span></div>
        <div className='login-container'>
            
            <form>
                <div className="email-div">
                    <label className="label-email">Your Email</label>
                    <input type="email" placeholder="e.g elon@tesla.com" className="input-email-div" autofocus="true"></input>
                </div>
                <div className="password-div">
                <label className="label-password">Your Password</label>
                    <input type="password" placeholder="e.g ilovereact@123" className="input-password-div" autofocus="true"></input>
                </div>
                <div className="button=div">
                    <button className="button-button-div">Sign In</button>
                </div>
                <div className="link-div">
                    <span>Dont have a account</span>
                    <span>Forget Password</span>

                </div>

            </form>

        </div>
    </div>
  )
}
export default  login


