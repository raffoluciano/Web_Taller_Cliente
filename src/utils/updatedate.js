import axios from 'axios';

const updatePackage = async(id) => {
    const url = `http://localhost:4000/package/package/${id}`
    const response = await axios.put(url)
    return
}

export default updatePackage;