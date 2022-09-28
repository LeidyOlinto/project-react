import React, { useState, useEffect } from 'react';
import Modalopen from './Modalopen';
import './Modal.css';
import api from "../servics/axios";



function Modal(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    return (
        <div className='Modal'>
            <form className='ModalContainer'>
                <h2 className='pagamentoP'>Pagamento para
                    <span className='usuarioSelecionado'>{props.userSelected.name}</span></h2>

                <input className='valor' type='number'
                    placeholder='R$ 0,00' 
                    
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