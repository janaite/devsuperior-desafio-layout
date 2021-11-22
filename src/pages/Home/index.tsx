import MainImage from 'assets/images/car-header.png';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-card-content">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
        <div className="home-card-image">
          <img src={MainImage} alt="Nome do produto" />
        </div>
      </div>
      <div className="home-control">
        <button className="btn btn-primary">Ver catálogo</button>
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default Home;
