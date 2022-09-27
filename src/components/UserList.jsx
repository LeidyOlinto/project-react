
import React, { useState, useEffect } from "react";
import api from "../servics/axios";
import FlatList from 'flatlist-react';
import '../components/UserList.css';
import Modal from "./Modal";
import Modalopen from "./Modalopen";

export default function App() {
  const [usuarios, setUsuarios] = useState([]);
  //const [isModalVisible ,setIsModalVisible] = useState(false);
  const [Modalopen, setModalopen] = useState(false)

  //Get da API
  useEffect(() => {
    getUsuarios()
    console.log(usuarios)
  }, []);

  const getUsuarios = async () => {
    const response = await api.get()
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
             
        <button className="buttonpagar" onClick={() =>setModalopen(true)}
                type=' submit'>Pagar</button> 
       
      </div>

    )
  }
 

  return (
    
    <div >
      {usuarios.forEach(item => {
        console.log(item.name)
      })}
      {
        Modalopen && (
          <Modal handleClose={setModalopen}/>
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
