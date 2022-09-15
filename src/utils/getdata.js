import axios from 'axios';

const getPackage = async() => {
    const url = 'http://localhost:4000/package/package'
    const response = await axios.get(url)
    return response.data
}

//falta probar 
const getPackageById = async(id) => {
    const url = `http://localhost:4000/package/${id}`
    const response = await axios.get(url)
    return response.data
}


export {
    getPackage,
    getPackageById
}