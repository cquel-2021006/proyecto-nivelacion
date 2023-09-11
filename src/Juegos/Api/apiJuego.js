import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:4000/api/juegos/";

export const apiJuego = async () => {
  try {
    const response = await axios.get(`${URL}mostrar`);
    console.log("trabajadores:", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const DeleteJuego = async (id) => {
  try {
    const { data } = await axios.delete(`${URL}eliminar/${id}`);

    return true;
  } catch ({
    response: {
      data: { message },
    },
  }) {
    if (message === "Juego Eliminado") {
      window.location.href = "/";
    }
    if (message) {
      return message;
    }
  }
};

export const createJuego = async (nombre, descripcion) => {
  console.log(nombre);
  try {
    const { juegoGuardado } = await axios.post(`${URL}agregar`, {
      nombre: nombre.nombre,
      descripcion: nombre.descripcion,
    });
    return true;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se pudo agregar el usuario",
    });
  }
};

export const PutJuego = async (id, nombre, descripcion) => {
  try {
    const listaJuego = await axios.put(`${URL}editar/${id}`, {
      nombre,
      descripcion,
    });
    return listaJuego.data;
  } catch ({
    response: {
      data: { message },
    },
  }) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      showConfirmButton: true,
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
      } else {
      }
    });
  }
};
