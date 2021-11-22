import ProductImage from 'assets/images/car-card.png';

import './styles.css';

const Catalog = () => {
    return (
        <div className="catalog-container">
            <div className="catalog-search-container">
                Digite sua busca
                <button className="btn btn-primary">Buscar</button>
            </div>
            <div className="catalog-card-container">
                <div className="catalog-card">
                    <img src={ProductImage} alt="Nome do produto" />
                    <h1>Audi Supra TT</h1>
                    <p>Lorem ipsum sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                </div>
                <div className="catalog-card">
                    <img src={ProductImage} alt="Nome do produto" />
                    <h1>Audi Supra TT</h1>
                    <p>Lorem ipsum sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                </div>
                <div className="catalog-card">
                    <img src={ProductImage} alt="Nome do produto" />
                    <h1>Audi Supra TT</h1>
                    <p>Lorem ipsum sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                </div>
                <div className="catalog-card">
                    <img src={ProductImage} alt="Nome do produto" />
                    <h1>Audi Supra TT</h1>
                    <p>Lorem ipsum sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                </div>
                <div className="catalog-card">
                    <img src={ProductImage} alt="Nome do produto" />
                    <h1>Audi Supra TT</h1>
                    <p>Lorem ipsum sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                </div>
                <div className="catalog-card">
                    <img src={ProductImage} alt="Nome do produto" />
                    <h1>Audi Supra TT</h1>
                    <p>Lorem ipsum sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                </div>
                <div className="catalog-card">
                    <img src={ProductImage} alt="Nome do produto" />
                    <h1>Audi Supra TT</h1>
                    <p>Lorem ipsum sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                </div>
                <div className="catalog-card">
                    <img src={ProductImage} alt="Nome do produto" />
                    <h1>Audi Supra TT</h1>
                    <p>Lorem ipsum sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                </div>
                <div className="catalog-card">
                    <img src={ProductImage} alt="Nome do produto" />
                    <h1>Audi Supra TT</h1>
                    <p>Lorem ipsum sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
                </div>
            </div>
        </div>
    );
}

export default Catalog;