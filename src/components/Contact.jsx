import '../App.css';
import instagram from '../../public/instagram1.png';
import facebook from '../../public/facebook.png';
import mail from '../../public/mail.png';

const Contact = () => {
    return(
        <div className="App">
            <div className="container">
                <h6 className="title">Contacto</h6>
                <hr className="title"/>
                <div className="row justify-content-evenly">    
                    <div className="col-4">
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Nombre y apellido"/>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email"/>
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Consulta"></textarea>
                        </div>
                        <button className="btn-send" type="button">Enviar</button>
                    </div>
                    <div className="col-4">
                        <h7 className="title">Encontranos</h7>
                        <hr className="title"/>
                        <h5 className="contact"><img className="social-media" src={instagram}/>@exploreOK</h5>
                        <h5 className="contact"><img className="social-media" src={facebook}/>Viajes Explore</h5>
                        <h5 className="contact"><img className="social-media" src={mail}/>contacto@explore.com</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;