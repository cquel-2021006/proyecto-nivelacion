import Swal from "sweetalert2";
import { createJuego } from "../Api/apiJuego";

export const sendData = async (state, option) => {
  let resultado;
  console.log(state.juego);
  switch (option) {
    case 1:
      resultado = await createJuego({
        nombre: state.juego.nombre,
        descripcion: state.juego.descripcion,
      });
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: "Se agrego VideoJuego",
          showConfirmButton: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/";
          } else {
            window.location.href = "/";
          }
        });
      }

      break;
  }
};
