import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Products = () => {
    return (
        <div>
            <p className="block-title">Produtos</p>
            <div className="form-group">
                <div className="row">
                    <div className="col-sm-7">
                        <label for="product">Buscar pelo código de barras ou descrição</label>
                        <input type="text" className="form-control" id="product" placeholder="Produto" />
                    </div>

                    <div className="col-sm-3">
                        <label for="quantity">Quantidade de itens</label>
                        <input type="number" className="form-control" id="quantity" defaultValue='0' />
                    </div>

                    <div className="col-sm-2">
                        <label for="add-button">&nbsp;</label>
                        <button type="button" className="btn btn-primary" id="add-button">Adicionar</button>
                    </div>
                </div>
            </div>

            <div className="row product-data">
                <div className="col-sm-5">Produto/Serviço</div>
                <div className="col-sm-2">Quantidade</div>
                <div className="col-sm-3">Preço Unitário</div>
                <div className="col-sm-2">Total</div>
            </div>

            <div className="row product-items">
                <div className="col-sm-5">Produto 1</div>
                <div className="col-sm-2">1</div>
                <div className="col-sm-3">R$ 27,19</div>
                <div className="col-sm-2">
                    R$ 27,19 &nbsp;&nbsp;
                    <a onClick="">
                        <FontAwesomeIcon icon={ faTrash } color="crimson" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Products