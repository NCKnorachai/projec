import "../allcss/Login.css";


const Login =()=>{
    return (
        <div>
            <body>
                <div className="all">
                        
                        <div className="app-logo">

                        </div>
                        
                        <div className="login">
                            <h2>LOGIN</h2> 
                        </div>

                    <form>
                        <div className="input">
                            <input type="text" placeholder = "Username"/>
                        </div>
                        <div className ="input">
                            <input type ="password" placeholder = "Password"/>
                        </div>

                        <label>
                            <div className="inputcheckbox">
                                <input type="checkbox"/> rememberme
                            </div>
                        </label>

                        <div className="Newtosky">
                            <p>New to SKYREF? Register here</p>
                        </div>

                        <div className="button">
                            <button>LOGIN</button>
                        </div>
                    </form>
                </div>
            </body>
        </div>
    )
}
export default Login