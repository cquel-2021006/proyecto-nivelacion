import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useNavigate, Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import Swal from "sweetalert2";

import { DeleteJuego, apiJuego } from "../Api/apiJuego";

export const ListaJuego = () => {
  const [ListaJuego, setListaJuego] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [juego, setJuego] = useState([]);

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = (u) => {
    setShowModal(true);
    setJuego(u);
  };

  const viewJuego = async () => {
    const juegolist = await apiJuego();
    setListaJuego(juegolist);
  };

  useEffect(() => {
    viewJuego();
  }, [showModal]);

  const eliminar = async (id) => {
    const confirmacion = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará el VideoJuego permanentemente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    });

    if (confirmacion.isConfirmed) {
      let result = await DeleteJuego(id);
      if (result) {
        setListaJuego(ListaUsuario.filter((c) => c._id !== id));
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: "Se eliminó el VideoJuego correctamente!",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se pudo eliminar el VideoJuego.",
        });
      }
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: " #f8f7f6",
          textAlign: "center",
          opacity: "100%",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ opacity: "100%" }}>Lista de VideoJuegos</h1>
      </div>
      <Link to="/agregarJuego" className="nav-link" aria-current="page">
        <div
          className="d-grid gap-5 col-3 mx-auto"
          style={{ marginBottom: "10px" }}
        >
          <button
            className="btn btn-success"
            type="button"
            onClick={(event) => {
              event.preventDefault();
              navigate("/agregarJuego");
            }}
          >
            Agregar VideoJuego
          </button>
        </div>
      </Link>

        <Table striped bordered hover>
          <thead style={{ backgroundColor: "#FAD7A0" }} className="text-center">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Eliminar</th>
            </tr>
          </thead>

          {ListaJuego?.map((t) => {
            return (
              <tbody key={t._id} className="text-center">
                <tr>
                  <td>{t._id}</td>
                  <td>{t.nombre}</td>
                  <td>{t.descripcion}</td>
                

                  <td>
                    <div className="d-grid gap-2">
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => {
                          eliminar(t._id);
                        }}
                        style={{ backgroundColor: "#CD5C5C", border: "none" }}
                      >
                        <i className="fa fa-trash mx-2"></i>Eliminar
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      
        <br />
        <br />
    </div>
  );
};
