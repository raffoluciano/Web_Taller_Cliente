import axios from 'axios';

const createLocation = async(data) => {

    console.log(data)
    const url = `http://localhost:4000/location/location`
    const response = await axios.post(url,data);
    return response.data
};

export { createLocation }

