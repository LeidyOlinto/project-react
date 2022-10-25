import React, { useState } from 'react';
import './ModalPag.css';

function ModalPagamento(props) {
   
    return (
        <div className='Modal'>
            <form className='ModalContaine'>
                <h2 className='pagamentoP'>Recibo de Pagamento  </h2>
                <div className='menssage '>
                <div className='menssage'><h4>{props.retornoModal.resp}</h4></div>
                <div className='menssage'><h4>{props.retornoModal.response}</h4></div>

                </div>
                <div className='ButtonDiv' >
                    <button className='CloseButton' onClick={() => props.handleClose(false)}>Fechar</button>
                </div>
            </form>
        </div>
    );
}
export default ModalPagamento;