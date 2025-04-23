import React from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/restauranfood.jpg";

function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="call-to-action">
      <div className="cta-text">
        <h1>Little Lemon</h1>
        <h2>Ortona</h2>
        <p>Ristorante con cucina tradizionale, tipica del posto e dove ogni tuo desiderio verrà realizzato!</p>
        <button onClick={() => navigate("/Reservations")}>Reserve a table</button>
      </div>
      <div className="cta-img-container">
        <img src={heroImg} alt="Chef with bruschetta" className="cta-image" />
      </div>
    </section>
  );
}

export default CallToAction;

