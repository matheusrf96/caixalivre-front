import React from 'react';

export const Purchase = () => {
    return (
        <div style={{ height: 90 + 'vh' }}>
            <p>Dados da Venda</p>

            <div className="form-group">
                <label for="seller-select">Escolha um vendedor</label>
                <select className="form-control" id="seller-select">
                    <option value='' disabled></option>
                </select>

                <br />

                <label for="customer-select">Escolha um cliente</label>
                <select className="form-control" id="customer-select">
                    <option value='' disabled></option>
                </select>
            </div>

            <div className="price-footer">
                <div>
                    <div className="float-left">Valor total da venda: </div>
                    <div className="float-right">R$ 136,10</div>
                </div>

                <div>
                    <div className="float-left">
                        <button type="button" class="btn btn-primary">Cancelar</button>
                    </div>

                    <div className="float-right">
                        <button type="button" class="btn btn-success">Finalizar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purchase