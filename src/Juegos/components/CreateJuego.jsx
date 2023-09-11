import React, { useState } from "react"
import Swal from "sweetalert2";

import { juego} from "../models/juego";
import { sendData } from "../helpers/formJuego";


export const CreateJuego = () => {
    const [agregar, setAgregar] = useState(juego);

    console.log(agregar)
    const handleSubmit = (event) => {
        event.preventDefault();
        sendData(agregar, 1);
    };

    return (
        <>
            <br />
            <div className="container" style={{ width: "50%" }}>
                <h1 id='create-evento' style={{ textAlign: "center" }}>Agregar VideoJuego</h1>
                <br />
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label className="text-black">Nombre</label>
                        <br />
                        <input
                            required
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                            onChange={(event) =>
                                setAgregar({
                                    juego: {
                                        ...agregar.juego,
                                        nombre: event.target.value
                                    }
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label className="text-black">Descripcion</label>
                        <br />
                        <input
                            required
                            type="text"
                            className="form-control"
                            placeholder="Descripcion"
                            onChange={(event) =>
                                setAgregar({
                                    juego: {
                                        ...agregar.juego,
                                        descripcion: event.target.value
                                    }
                                })
                            }
                        />
                    </div>

                    <br />
                    <div className="container text-center">
                        <button id='btn-enviar' type="submit" className="btn">
                            Enviar
                        </button>
                    </div>

                </form>
            </div>

        </>
    )
}