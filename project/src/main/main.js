
import './main.css';
import photo from "./a/image 7.png"
import logo from "./a/wordbrand.svg"
const Main =()=>{
    return(
        <div className='all'>
            <header className="main-header">
                <div className="item">
                    <div className="item" id='item1'><a>models</a></div>
                    <div><img src={logo}/></div>
                    <div className="item" id='item2'><a>credits</a></div>
                </div>
            </header>
            <main className='main-aside'>
                <div className='photo-one'>
                    <img src={photo} style={{width:699}}/>
                </div>
                <div className='taxt-all'>
                    <h1 className='text1'>Lorem ipsum dolor</h1>
                    <p className='text2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta non pulvinar neque. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Vitae et leo duis ut diam quam nulla. Est placerat in egestas erat. Vel pharetra vel turpis nunc eget lorem.</p>
                </div>
            </main>
            <main className='main-aside2'>
                <div className='text-model'>
                    <h1>MODELS</h1>
                </div>
                <div className='photo-flex'>
                    <div className='row' >
                        <div className='photo'>
                            <div className='photo'><img src={require('./a/image 13.png')} width="85%"/></div>
                            <div className='photo'><img src={require('./a/image 12.png')} width="85%"/></div>
                            <div className='photo'><img src={require('./a/image 14.png')} width="85%"/></div>
                        </div >
                         <div className='photo'>
                            <div className='photo'><img src={require('./a/image 10.png')} width="85%"/></div>
                            <div className='photo'><img src={require('./a/image 16.png')} width="85%"/></div>
                            <div className='photo'><img src={require('./a/image 17.png')} width="85%"/></div>
                        </div>
                        <div className='photo'>
                            <div className='photo'><img src={require('./a/image 23.png')} width="85%"/></div>
                            <div className='photo'><img src={require('./a/image 22.png')} width="85%"/></div>
                            <div className='photo'><img src={require('./a/image 19.png')} width="85%%"/></div>
                        </div>
                        </div> 
                    </div>
                
                </main>
                <main>
                    <div>
                        <div className='text-credit'><h1>CREDITS</h1></div>
                    </div>
                    <div className='main-credit'>
                        <p className='text-credit-content'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta non pulvinar neque. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Vitae et leo duis ut diam quam nulla. Est placerat in egestas erat. Vel pharetra vel turpis nunc eget lorem.
                        </p>
                        <div className='photo-two'>
                            <img src={require('./a/image 24.png')} style={{width:650}}/>
                     </div>
                    </div> 
                </main>
            <footer className='footer-main'>
                <div className='footer-flex'>
                    <div className='footer-text'>
                        <div className='footer-text'><a>Github</a></div>
                        <div className='footer-text'><a>Email</a></div>
                        <div className='footer-text'><a>©SKYREF</a></div>
                    </div>
                </div>
            </footer>   
        </div>

        );
           
}
export default Main