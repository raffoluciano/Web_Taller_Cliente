import axios from 'axios';
//para rol de admin

//falta probar y ver que devolver
//no estan todos aun
const deleteCountry = async(nombre) => {
    const url = `http://localhost:4000/country/country/${nombre}`
    const response = await axios.delete(url)
    return response.data
};

const deleteDestiny = async(id) => {
    const url = `http://localhost:4000/destiny/destiny/${id}`
    const response = await axios.delete(url)
    return 
};

const deleteExcursion = async(id) => {
    const url = `http://localhost:4000/excursion/excursion/${id}`
    const response = await axios.delete(url)
    return
};

const deletePackage = async(id) => {
    const url = `http://localhost:4000/package/package/${id}`
    const response = await axios.delete(url)
    return
}


export {
    deleteCountry,
    deleteDestiny,
    deleteExcursion
}