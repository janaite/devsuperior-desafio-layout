import ProductImage from 'assets/images/car-card.png';

import './styles.css'

const ProductCard = () => {
  return (
    <div className="product-card">
      <img src={ProductImage} alt="Nome do produto" />
      <h1>Audi Supra TT</h1>
      <p>
        Lorem ipsum sit amet, consectetur adipisicing elit. Cupiditate, nisi
      </p>
      <button className="btn btn-primary">Comprar</button>
    </div>
  );
};

export default ProductCard;
