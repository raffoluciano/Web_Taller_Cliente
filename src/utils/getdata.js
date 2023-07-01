import axios from 'axios';

const getCountry = async() => {
    const url = `http://localhost:4000/country/country`
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


const getRoleUserByEmail = async(email) => {
    const url = `http://localhost:4000/user/role/${email}`
    const response = await axios.get(url)
    return response.data
};
const getUser = async() => {
    const url = `http://localhost:4000/user/users`
    const response = await axios.get(url)
    return response.data
};


export {
    getCountry,
    getPackage,
    getPackageById,
    getPackageByDestiny,
    getUser, 
    getRoleUserByEmail
}