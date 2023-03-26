import axios from 'axios';
 /*
const updatePackage = async(id, data) => {
    const url = 
    const response = await axios.put(url)
    return
}
*/
const updatePackage = async (id, data) => {
  try {
    const response = await axios.put(`http://localhost:4000/package/package/${id}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error updating package in database');
  }
};

export default updatePackage;