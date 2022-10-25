import React, { useState, useEffect } from 'react';
import Modalopen from './Modalopen';
import './Modal.css';
import api from "../servics/axios";
import ModalPagamento from "./Modal/ModalPagament"

const Card = [
    // valid card
    {
        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18',
    },
    // invalid card
    {
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20',
    },
];


function Modal(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [Value, setValue] = useState("R$ 0,00");
    const [Card, setSelectedCard] = useState('0');
    const [userID, userSelectedId] = useState('');
    const [Modalopen, setModalopen] = useState(false);
    const [retornoModal, setRetornoModal] = useState(false)
  
    //MASK 
    const currencyMask = (e) => {
        e.preventDefault();

        if (/[0-9]+/g.test(e.key) && e.target.value.length < 14) {
            e.target.value += e.key;
        }

        var myInput = Number(e.target.value.replace(/[^0-9]+/g, "") / 100);
        var formatInput = myInput.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
        });
        e.target.value = formatInput;

        setValue(formatInput);
        myInput(myInput);
        
        userSelectedId(userID);

    };
    const POSTObject = {
        userID,
        Value,
        Card,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(POSTObject);

        api
            .post(
                "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989",
                POSTObject
            )
            .then((response) => {
                console.log(response);
                if (response.data.status === "Aprovada" && Card == 1) {
                  let itemAux = { resp: "O pagamento foi concluido com sucesso." };
                  console.log("Aprovado");
                  setModalopen(true);
                  setRetornoModal(itemAux);
                } else if (response.data.status === "Aprovada" && Card == 0) {
                  var retornoNegado = {
                    response: "O pagamento não foi concluido com sucesso.",
                  };
                  console.log("negado");
                  setModalopen(true);
                  setRetornoModal(retornoNegado);
                }

              })
              .catch((error) => {
                console.log(error);
            });
          };
    return (
        <div className='Modal'>
            <form className='ModalContainer' onSubmit={handleSubmit}>
                <h2 className='pagamentoP'>Pagamento para
                    <span className='usuarioSelecionado'>{props.userSelected.name}</span></h2>

                <input
                    className="valor"
                    value={Value}
                    name="Value"
                    onChange={currencyMask}
                />

                <select className='NumeroCartao' onChange={(e) => { setSelectedCard(e.target.value) }}>
                    <option value='0'> Cartão com o final 0123</option>
                    <option value='1'> Cartão com o final 1111</option>

                </select>


                <div className='ButtonDiv' >
                    <button className='CloseButton' onClick={() => props.handleClose(false)}>Fechar</button>

                    <button className='button'
                        onClick={(e) => {
                            handleSubmit();
                            ModalPagamento(true);

                        }}
                    >Pagar</button> {isModalVisible ? <h1><Modalopen /><ModalPagamento /></h1> : null}
                </div>
            </form>
            {
                Modalopen && (
                    <ModalPagamento handleClose={
                        setModalopen}
                        retornoModal={retornoModal}
                    />
                )
            }
        </div>
    );
}
export default Modal;