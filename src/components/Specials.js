import React from "react";
import salad from "../assets/greekSalad.jpg";
import bruschetta from "../assets/bruchetta.svg";
import dessert from "../assets/lemonDessert.jpg";

const specialsData = [
  {
    title: "Insalata greca",
    price: "$12.99",
    img: salad,
    desc: "Lattuga croccante, peperoni, olive e il nostro formaggio feta in stile Chicago.",
  },
  {
    title: "Bruschetta",
    price: "$5.99",
    img: bruschetta,
    desc: "Pane grigliato spalmato di aglio e condito con sale e olio d'oliva.",
  },
  {
    title: "Dessert al limone",
    price: "$4.99",
    img: dessert,
    desc: "Direttamente dal ricettario della nonna, autentico e delizioso.",
  },
];

function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>Gli speciali di questa settimana!</h2>
        <button className="menu-btn">Menù online</button>
      </div>
      <div className="cards">
        {specialsData.map((item, index) => (
          <article className="card" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title} <span>{item.price}</span></h3>
            <p>{item.desc}</p>
            <a href="/">Ordina una consegna</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;
