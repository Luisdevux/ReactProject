import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <main className="card-galeria">
        <Card titulo="Arroz com vaca atolada" texto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, itaque qua0m quidem nulla iste assumenda sequi iusto enim, cumque illo ipsa tenetur dolore distinctio explicabo atque perspiciatis provident hic eveniet?" imagem="/images.jpeg" link="#https://meucardapiodigital/ifro/edu/br" />
        <Card titulo="Arroz com vaca atolada" texto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, itaque qua0m quidem nulla iste assumenda sequi iusto enim, cumque illo ipsa tenetur dolore distinctio explicabo atque perspiciatis provident hic eveniet?" imagem="/images.jpeg" link="#https://meucardapiodigital/ifro/edu/br" />
        <Card titulo="Arroz com vaca atolada" texto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, itaque qua0m quidem nulla iste assumenda sequi iusto enim, cumque illo ipsa tenetur dolore distinctio explicabo atque perspiciatis provident hic eveniet?" imagem="/images.jpeg" link="#https://meucardapiodigital/ifro/edu/br" />
        <Card titulo="Arroz com vaca atolada" texto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, itaque qua0m quidem nulla iste assumenda sequi iusto enim, cumque illo ipsa tenetur dolore distinctio explicabo atque perspiciatis provident hic eveniet?" imagem="/images.jpeg" link="#https://meucardapiodigital/ifro/edu/br" />
      </main>
    </div>
  );
}