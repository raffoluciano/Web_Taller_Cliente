import axios from 'axios';

const createPackage = async(data) => {

    console.log(data)
    const url = `http://localhost:4000/package/package`
    const response = await axios.post(url,data);
    return response.data
};

const createUser = async(data) => {

    console.log(data)
    const url = `http://localhost:4000/user/user`
    const response = await axios.post(url,data);
    return response.data
};

const saveImagePackage = async(image) => {
    const url = `http://localhost:4000/package/packageImage`
    console.log('hola',image)
    const response = await axios.post(url,image);
    return response.data
}


export { createPackage,createUser,saveImagePackage}

