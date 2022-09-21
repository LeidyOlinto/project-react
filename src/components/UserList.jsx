
import React, { useState, useEffect } from "react";
import api from "../servics/axios";
import FlatList from 'flatlist-react';
import '../components/UserList.css';


export default function App() {
  const [usuarios, setUsuarios] = useState([]);

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
  const listaUsuario = (item, idx) => {
    return (

      <div className="clients" key={idx}>
        <img className="fotoUsuario" src={item.img}></img>
        <div className="informacaoUsuario">
          <p className="nomeusuario">{item.name}</p>
        </div>
        <button className="buttonpagar" onClick={() => console.log(item.id)}>Pagar</button>
      </div>

    )
  }

  return (
    <div >
      {usuarios.forEach(item => {
        console.log(item.name)
      })}
      <FlatList
        list={usuarios}
        key={item => item.id}
        renderItem={listaUsuario}
      />
    </div>
  );
}
