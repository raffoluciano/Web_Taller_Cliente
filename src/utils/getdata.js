import axios from 'axios';
//No hice ni linea, ni carrito. 

//Falta arreglar en servidor: tipo de paquete y tipo de transporte.


const getCountry = async() => {
    const url = `http://localhost:4000/country/country`
    const response = await axios.get(url)
    return response.data
};
//creo que no iria mas
const getDestiny = async() => {
    const url = `http://localhost:4000/destiny/destiny`
    const response = await axios.get(url)
    return response.data
};

//creo que no iria mas
const getDestinyById = async(id) => {
    //VER
    const url = `http://localhost:4000/destiny/${id}`
    const response = await axios.get(url)
    return response.data
};

const getExcursion = async() => {
    const url = `http://localhost:4000/excursion/excursion`
    const response = await axios.get(url)
    return response.data
};

const getExcursionById = async(id) => {
    //VER
    const url = `http://localhost:4000/excursion/${id}`
    const response = await axios.get(url)
    return response.data
};

const getHotel = async() => {
    const url = `http://localhost:4000/hotel/hotel`
    const response = await axios.get(url)
    return response.data
};

const getHotelByLocation = async(localidad) => {
    //VER
    const url = `http://localhost:4000/hotel/${localidad}`
    const response = await axios.get(url)
    return response.data
};

const getLocation = async() => {
    const url = `http://localhost:4000/location/location`
    const response = await axios.get(url)
    return response.data
};

const getLocationById = async(id) => {
    //VER
    const url = `http://localhost:4000/location/${id}`
    const response = await axios.get(url)
    return response.data
};

const getPackage = async() => {
    const url = `http://localhost:4000/package/package`
    const response = await axios.get(url)
    return response.data
};

const getPackageById = async(id) => {
    //VER
    const url = `http://localhost:4000/package/${id}`
    const response = await axios.get(url)
    return response.data
};

const getPackageByDestiny = async(destino) => {
    const url = `http://localhost:4000/package/destiny/${destino}`
    const response = await axios.get(url)
    return response.data
}
/*
const getPackageByDate = async(comienzo) => {
    //desde det fecha
    const url = `http://localhost:4000/package/date/${comienzo}`
    const response = await axios.get(url)
    return response.data
}

const getPackageByPrice = async(precio) => {
    //hasta det precio
    const url = `http://localhost:4000/package/price/${precio}`
    const response = await axios.get(url)
    return response.data
}*/

const getPromotion = async() => {
    //VER si es necesario
    const url = `http://localhost:4000/promotion/promotion`
    const response = await axios.get(url)
    return response.data
};

const getRoles = async() => {
    //VER si es necesario
    const url = `http://localhost:4000/role/roles`
    const response = await axios.get(url)
    return response.data
};

const getRoleUserByEmail = async(email) => {
    const url = `http://localhost:4000/user/role/${email}`
    const response = await axios.get(url)
    return response.data
};

const getRoleById = async(dni_usuario) => {
    const url = `http://localhost:4000/role/${dni_usuario}`
    const response = await axios.get(url)
    return response.data
};


const getTypePaq = async() => {
    const url = `http://localhost:4000/type/type`
    const response = await axios.get(url)
    return response.data
};


const getTypePaqById = async(id) => {
    const url = `http://localhost:4000/type/${id}`
    const response = await axios.get(url)
    return response.data
};

const getTransport = async() => {
    const url = `http://localhost:4000/meanOfTransport/meanOfTransport`
    const response = await axios.get(url)
    return response.data
};

const getTransportById = async(id) => {
    //VER
    const url = `http://localhost:4000/meanOfTransport/${id}`
    const response = await axios.get(url)
    return response.data
};

const getUser = async() => {
    const url = `http://localhost:4000/user/users`
    const response = await axios.get(url)
    return response.data
};

const getUserByDni = async(dni) => {
    //VER
    const url = `http://localhost:4000/user/${dni}`
    const response = await axios.get(url)
    return response.data
};


export {
    getCountry,
    getDestiny,
    getDestinyById,
    getExcursion,
    getExcursionById,
    getHotel,
    getHotelByLocation,
    getLocation,
    getLocationById,
    getPackage,
    getPackageById,
    getPackageByDestiny,
    getPromotion, 
    getRoles,
    getRoleById,
    getTransport, 
    getTransportById, 
    getUser, 
    getUserByDni,
    getRoleUserByEmail
}