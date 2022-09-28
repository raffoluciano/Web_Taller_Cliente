import '../App.css';
import logo from '../../public/logoAHORA.png';

const Sales = () => {
    return(
        <div className="App">
            <div class="container">
                <div class="container">
                    <div class="row row-cols-4">
                    <div class="card-packages">
                        <img src={logo} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h6 class="card-title">Nombre del Paquete</h6>
                        <h6 class="card-title1">Destino</h6>
                        <h6 class="card-title1">Duración</h6>
                        <h6 class="card-title-price">Precio</h6>
                        </div>
                    </div>
                    </div>
                </div>
                    <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
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