import React, { useState } from 'react';
import './ModalPag.css';



// const Cards = [
//     // valid card
//     {
//         card_number: '1111111111111111',
//         cvv: 789,
//         expiry_date: '01/18',
//     },
//     // invalid card
//     {
//         card_number: '4111111111111234',
//         cvv: 123,
//         expiry_date: '01/20',
//     },
// ];


function ModalPagamento(props) {
    const [Card, setSelectedCard] = useState('0');
    const [userID, userSelectedId] = useState('');

    const POSTObject = {
        userID,
        Card,
    };

    return (
        <div className='Modal'>
            <form className='ModalContaine'>
                <h2 className='pagamentoP'>Recibo de Pagamento  </h2>



                <div className='menssage'>{props.retornoModal.resp}</div>
                <div className='menssage'>{props.retornoNegado}</div>
                <div className='ButtonDiv' >
                    <button className='CloseButton' onClick={() => props.handleClose(false)}>Fechar</button>
                </div>
            </form>
        </div>
    );
}
export default ModalPagamento;