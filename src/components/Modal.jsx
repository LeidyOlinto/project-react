import React, { useState } from 'react';
import Modalopen from './Modalopen';
import './Modal.css';


function Modal(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    

    return (
        <div className='Modal'>
             <form className='ModalContainer'>
            <h1 className='pagamentoP'>Pagamento para <span>{props.name}</span></h1>
           
                <input className='valor' type='number'
                    placeholder='R$ 0,00'

                />
                
                <input className='NumeroCartao' type='number'
                    placeholder='Cartão co o final 0123' />
                    <div className='ButtonDiv'>
                <button className='CloseButton' onClick={() => props.handleClose(false)}>Fechar</button>

                <button className='button'
                    onClick={() => setIsModalVisible(true)}
                    type=' submit'>Pagar</button> {isModalVisible ? <h1><Modalopen /></h1> : null}
                    </div>
            </form>
        </div>
    );
}
export default Modal;