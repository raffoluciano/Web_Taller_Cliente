import axios from 'axios';

const createLocation = async(data) => {

    console.log(data)
    const url = `http://localhost:4000/location/location`
    const response = await axios.post(url,data);
    return response.data
};

const createDestiny = async(data) => {

    console.log(data)
    const url = `http://localhost:4000/destiny/destiny`
    const response = await axios.post(url,data);
    return response.data
};

const createCountry = async(data) => {

    console.log(data)
    const url = `http://localhost:4000/country/country`
    const response = await axios.post(url,data);
    return response.data
};

const createExcursion = async(data) => {

    console.log(data)
    const url = `http://localhost:4000/excursion/excursion`
    const response = await axios.post(url,data);
    return response.data
};

const createHotel = async(data) => {

    console.log(data)
    const url = `http://localhost:4000/hotel/hotel`
    const response = await axios.post(url,data);
    return response.data
};

const createLine = async(data) => {

    console.log(data)
    const url = `http://localhost:4000/line/line`
    const response = await axios.post(url,data);
    return response.data
};

const createMeanoftransport = async(data) => {

    console.log(data)
    const url = `http://localhost:4000/meanOfTransport/meanOfTransport`
    const response = await axios.post(url,data);
    return response.data
};

const createPackage = async(data) => {

    console.log(data)
    const url = `http://localhost:4000/package/package`
    const response = await axios.post(url,data);
    return response.data
};

const createShoppingcart = async(data) => {

    console.log(data)
    const url = `http://localhost:4000/shopping_cart/shopping_cart`
    const response = await axios.post(url,data);
    return response.data
};

const createTypetransport = async(data) => {

    console.log(data)
    const url = `http://localhost:4000/type_transport/type_transport`
    const response = await axios.post(url,data);
    return response.data
};

const createUser = async(data) => {

    console.log(data)
    const url = `http://localhost:4000/user/user`
    const response = await axios.post(url,data);
    return response.data
};
const createTransportxpackage = async(data) => {

    console.log(data)
    const url = `http://localhost:4000/package/transportxpackage`
    const response = await axios.post(url,data);
    return response.data
};

const createDestinyxpackage = async(data) => {

    console.log(data)
    const url = `http://localhost:4000/package/destinyxpackage`
    const response = await axios.post(url,data);
    return response.data
};

const createExcursionxpackage = async(data) => {

    console.log(data)
    const url = `http://localhost:4000/package/excursionxpackage`
    const response = await axios.post(url,data);
    return response.data
};

const createHotelxpackage = async(data) => {

    console.log(data)
    const url = `http://localhost:4000/package/hotelxpackage`
    const response = await axios.post(url,data);
    return response.data
};

const createPlacexexcursion = async(data) => {

    console.log(data)
    const url = `http://localhost:4000/package/placexexcursion`
    const response = await axios.post(url,data);
    return response.data
};


export { createLocation,createDestiny,createCountry,createExcursion, createHotel, createLine,createMeanoftransport,createPackage,createShoppingcart,createTypetransport,createUser,createTransportxpackage,createDestinyxpackage,createExcursionxpackage,createHotelxpackage,createPlacexexcursion}

