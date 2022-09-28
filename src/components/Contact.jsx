import '../App.css';
import instagram from '../../public/instagram1.png';
import facebook from '../../public/facebook.png';
import mail from '../../public/mail.png';

const Contact = () => {
    return(
        <div className="App">
            <div class="container">
                <h6 class="title">Contacto</h6>
                <hr class="title"/>
                <div class="row justify-content-evenly">    
                    <div class="col-4">
                        <div class="mb-3">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Nombre y apellido"/>
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Consulta"></textarea>
                        </div>
                        <button class="btn-send" type="button">Enviar</button>
                    </div>
                    <div class="col-4">
                        <h7 class="title">Encontranos</h7>
                        <hr class="title"/>
                        <h5 class="contact"><img class="social-media" src={instagram}/>@exploreOK</h5>
                        <h5 class="contact"><img class="social-media" src={facebook}/>Viajes Explore</h5>
                        <h5 class="contact"><img class="social-media" src={mail}/>contacto@explore.com</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;