import React, { useState, useEffect } from 'react';
import Modalopen from './Modalopen';
import './Modal.css';
//import api from "../servics/axios";

function Modal(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [Value, setValue] = useState("R$ 0,00");
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
    };
    //CARTÃO CARDS
    

    return (
        <div className='Modal'>
            <form className='ModalContainer'>
                <h2 className='pagamentoP'>Pagamento para
                    <span className='usuarioSelecionado'>{props.userSelected.name}</span></h2>

                <input
                    className="valor"
                    value={Value}
                    name="Value"
                    onChange={currencyMask}
                />

                <input className='NumeroCartao' type='number'
                    placeholder='Cartão com o final 0123' />
                <div className='ButtonDiv'>
                    <button className='CloseButton' onClick={() => props.handleClose(false)}>Fechar</button>

                    <button className='button'
                        onClick={() => setIsModalVisible(true)}
                    >Pagar</button> {isModalVisible ? <h1><Modalopen /></h1> : null}
                </div>
            </form>
        </div>
    );
}
export default Modal;