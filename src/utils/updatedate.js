import axios from 'axios';

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

export const updatePackageCupos = async (id, cupos) => {
  try {
    // Realizar una solicitud PUT a tu API para actualizar los cupos
    await axios.put(`http://localhost:4000/package/package/${id}`,cupos, { decrement: 1 });
    console.log('Cupos actualizados correctamente');
  } catch (error) {
    console.log('Error al actualizar los cupos:', error);
    throw error; // Lanzar el error para manejarlo en la función llamante
  }
};

export default {
  updatePackage,
}