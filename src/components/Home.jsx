import React, { useEffect, useState } from 'react';
import { DestinyCard } from './DestinyCard';
import { getPackage } from '../utils/getdata';
import { PackagesHome } from './PackagesHome';


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

  const [paquete, setPaquete] = useState([]);
  
  useEffect(() => {
    getPackage().then( data => {
        setPaquete(data);
    })
    .catch( error => console.log(error));
}, [])

    if (destiny.length > 8) {
      destiny.length = 8;
    }

    if (paquete.length > 4) {
      paquete.length = 4;
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

      <div className="container">
      <h6 className="title">Salidas próximas</h6>
      <hr className="title"/>
            {
              paquete.map( (element) => (
                <div key={element.id}>
                  <PackagesHome { ...element}/>
                </div>
              ))
            }
      </div>

    </>
    );
}

export default Home;