import React from 'react';

export const Products = () => {
    return (
        <div>
            <p>Produtos</p>
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
        </div>
    )
}

export default Products