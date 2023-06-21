import React, { useEffect, useState } from 'react';
import { DestinyCard } from './DestinyCard';
import { HotelCard } from './HotelCard';
import { getHotel, getDestiny, getPackage } from '../utils/getdata';
import foto1 from '../../public/descarga.jpg';


export const Home = () => {

  const [hotel, setHotel] = useState([]);

 
  useEffect(() => {
      getPackage().then( data => {
          setHotel(data);
      })
      .catch( error => console.log(error));
  }, [])

  const [destiny, setDestiny] = useState([]);

  useEffect(() => {
      getPackage().then( data => {
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
        <h6 className="title">Algunos de nuestros destinos</h6>
        <hr className="title"/>
        <div className="row row-cols-4">
          {
                destiny.map( (element) => (                    
                  <div key={element.id}>
                      <DestinyCard { ...element }/>
                  </div>
              ))
             }
          </div>
   
      </div>
      
      <div className="container1">
      <h6 className="title1">Algunos de nuestros hoteles</h6>
      <hr className="title1"/>
            {
              hotel.map( (element) => (
                <div key={element.id} className='hoteles-item'>
                  <HotelCard { ...element}/>
                </div>
              ))
            }
      </div>


    </>
    );
}

export default Home;