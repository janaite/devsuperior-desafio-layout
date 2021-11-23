import ProductCard from 'components/ProductCard';

import './styles.css';

const Catalog = () => {
  return (
    <div className="catalog-container">
      <div className="container my-4">
        <div className="catalog-search-container">
          <input type="text" placeholder="Digite sua busca"/>
          <button className="btn btn-primary">Buscar</button>
        </div>
        <div className="catalog-card-container">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <ProductCard />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <ProductCard />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <ProductCard />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <ProductCard />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <ProductCard />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <ProductCard />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <ProductCard />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <ProductCard />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
