import React, { useEffect, useState } from 'react';
import { HotelCard } from './HotelCard';
import { DestinyCard } from './DestinyCard';
import { getHotel, getDestiny } from '../utils/getdata';
import foto1 from '../../public/descarga.jpg';


export const Home = () => {

  const [hotel, setHotel] = useState([]);
  
  useEffect(() => {
      getHotel().then( data => {
          setHotel(data);
      })
      .catch( error => console.log(error));
  }, [])

  const [destiny, setDestiny] = useState([]);

  useEffect(() => {
      getDestiny().then( data => {
          setDestiny(data);
      })
      .catch( error => console.log(error));
  }, [])
    
    if (hotel.length > 4) {
      hotel.length = 4;
    }

    if (destiny.length > 4) {
      destiny.length = 4;
    }
  return(
    <>
      <div className="container">
        <h6 className="title">Algunos de nuestros hoteles</h6>
        <hr className="title"/>
        <div className="row row-cols-4">
          {
                hotel.map( (element) => (                    
                        <div>
                            <HotelCard { ...element }/>
                        </div>
                    ))
             }
          </div>
      </div>
      <div className="container1">
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={foto1} className="imagen-carrusel" alt="..."/>
          </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h6 className="title">Algunos de nuestros destinos</h6>
        <hr className="title"/>
        <div className="row row-cols-4">
          {
                destiny.map( (element) => (                    
                        <div>
                            <DestinyCard { ...element }/>
                        </div>
                    ))
             }
          </div>
      </div>
    </>
    );
}

export default Home;