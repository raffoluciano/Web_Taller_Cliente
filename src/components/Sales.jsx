import '../App.css';
import logo from '../../public/logoAHORA.png';

const Sales = () => {
    return(
        <div className="App">
            <div className="container">
                <div className="container">
                    <div className="row row-cols-4">
                    <div className="card-packages">
                        <img src={logo} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h6 className="card-title">Nombre del Paquete</h6>
                        <h6 className="card-title1">Destino</h6>
                        <h6 className="card-title1">Duración</h6>
                        <h6 className="card-title-price">Precio</h6>
                        </div>
                    </div>
                    </div>
                </div>
                    <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                    </nav>
                </div>
                </div>

    );
}

export default Sales;