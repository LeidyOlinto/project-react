import React, { useState } from 'react';
import './ModalPag.css';

function ModalPagamento(props) {
   
    return (
        <div className='Modal'>
            <form className='ModalContaine'>
                <h2 className='pagamentoP'>Recibo de Pagamento  </h2>
                <div className='menssage'><h3>{
               (props.retornoModal.resp == true) ? 'Pagamento efetuado com sucesso' :
                'Seu pagamento não foi aprovado' }</h3>
                </div>
                <div className='ButtonDiv' >
                    <button className='CloseButton' onClick={() => props.handleClose(false)}>Fechar</button>
                </div>
            </form>
        </div>
    );
}
export default ModalPagamento;