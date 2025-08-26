import "./style.css"

interface ICard {
  titulo: string,
  texto: string,
  imagem: string,
  link: string
}

export default function Card({titulo, texto, imagem, link} : ICard) {
  return (
    <div className="card">
      <div>
          <img src={imagem} alt="Prato do dia" className="card-imagem" width={387}/>
      </div>
      <div>
          <h2 className="card-titulo">{titulo}</h2>
      </div>
      <div>
          <p className="card-texto">{texto}</p>
      </div>
      <div>
          <a href={link} className="card-link">Saiba Mais</a>
      </div>
    </div>
  );
}