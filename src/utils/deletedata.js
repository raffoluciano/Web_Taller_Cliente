import axios from 'axios';
//para rol de admin

//falta probar y ver que devolver
//REVISAR QUE OTRO DELETE HACER
const deleteCountry = async(nombre) => {
    const url = `http://localhost:4000/country/country/${nombre}`
    const response = await axios.delete(url)
    return response.data
};

const deleteDestiny = async(id) => {
    const url = `http://localhost:4000/destiny/destiny/${id}`
    const response = await axios.delete(url)
    return response
};

const deleteExcursion = async(id) => {
    const url = `http://localhost:4000/excursion/excursion/${id}`
    const response = await axios.delete(url)
    return response
};

const deleteHotel = async(nombre) => {
    const url = `http://localhost:4000/hotel/hotel/${nombre}`
    const response = await axios.delete(url)
    return response
};

const deleteLocation = async(id) => {
    const url = `http://localhost:4000/location/location/${id}`
    const response = await axios.delete(url)
    return response
};

const deleteMeanOfTransport = async(id) => {
    const url = `http://localhost:4000/meanOfTransport/meanOfTransport/${id}`
    const response = await axios.delete(url)
    return response
};

const deletePackage = async(id) => {
    const url = `http://localhost:4000/package/packageAdm/${id}`
    const response = await axios.delete(url)
    return
}


export {
    deleteCountry,
    deleteDestiny,
    deleteExcursion,
    deleteHotel,
    deleteLocation,
    deleteMeanOfTransport,
    deletePackage,

}