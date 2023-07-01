import axios from 'axios';

const deletePackage = async(id) => {
    const url = `http://localhost:4000/package/package/${id}`
    const response = await axios.delete(url)
    return
}


export default deletePackage