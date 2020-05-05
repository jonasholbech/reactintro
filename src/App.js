import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { RestDB } from "./modules/restdb";

export default function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    RestDB.getCards(setCards);
  }, []);

  function onFormSubmit(data) {
    console.log("form submitted", data);
    RestDB.addCard(setCards, cards, data);
  }

  function onCardMove(_id, whereTo) {
    console.log(_id, whereTo);
    const nextCards = cards.map((card) => {
      if (card._id === _id) {
        console.log("match");
        card.list = whereTo;
      }
      return card;
    });
    RestDB.moveCard(
      {
        list: whereTo,
      },
      _id
    );
    setCards(nextCards);
  }
  function onCardDelete(_id) {
    const nextCards = cards.filter((card) => card._id !== _id);
    RestDB.deleteCard(_id);
    setCards(nextCards);
  }
  return (
    <div className="App">
      <Nav>
        <a href="#">Home</a>
        <a href="#">Home</a>
        <a href="#">Home</a>
        <a href="#">Home</a>
      </Nav>

      {cards.length === 0 && <h2>Loading</h2>}
      <Main
        onCardDelete={onCardDelete}
        onCardMove={onCardMove}
        onFormSubmit={onFormSubmit}
        cards={cards}
      />
    </div>
  );
}
