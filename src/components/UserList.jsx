
import React, { useState, useEffect } from "react";
import api from "../servics/axios";
import FlatList from 'flatlist-react';
import '../components/UserList.css';
import Modal from './Modal';


export default function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [Modalopen, setModalopen] = useState(false);
  const [userSelected, setUserSelected] = useState({})

  useEffect(() => {
    getUsuarios()
    console.log(usuarios)
  }, []);

  const getUsuarios = async () => {
    const response = await api.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce',
      {
        'Content-type': 'application/json'
      })
    if (response.status === 200) {
      setUsuarios(response.data)
    }
  }
  //Aqui a lista de clientes
  const listaUsuario = (item, id) => {
    return (

      <div className="clients" key={id}>
        <img className="fotoUsuario" src={item.img}></img>
        <div className="informacaoUsuario">
          <p className="nomeusuario">{item.name}</p>
          <p className="infor">ID:{item.id}-Username:{item.username}</p>
        </div>

        <button className="buttonpagar" onClick={() => {
          setModalopen(true);
          setUserSelected(item);
        }
        }>Pagar</button>

      </div>
    )
  }

  return (
    <div >
     
      {
        Modalopen && (
          <Modal handleClose={
            setModalopen}
            userSelected={userSelected}
          />
        )
      }

      <FlatList
        list={usuarios}
        key={item => item.id}
        renderItem={listaUsuario}
      />
    </div>
  );
}
