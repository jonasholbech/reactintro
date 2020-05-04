import React, { useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";

export default function App() {
  const [cards, setCards] = useState([
    {
      title: "Make it dynamic",
      list: "todo",
      added: 1588055291061,
      id: 1,
      color: "hotpink",
      assignedTo: ["jofh"],
    },
    {
      title: "Make it dynamic",
      list: "todo",
      added: 1588055091061,
      id: 2,
      color: "lightblue",
      assignedTo: ["jofh", "davi"],
    },
  ]);

  function onFormSubmit(data) {
    console.log("form submitted", data);
    setCards(cards.concat(data));
  }

  function onCardMove(id, whereTo) {
    console.log(id, whereTo);
    const nextCards = cards.map((card) => {
      if (card.id === id) {
        console.log("match");
        card.list = whereTo;
      }
      return card;
    });
    setCards(nextCards);
  }
  function onCardDelete(id) {
    const nextCards = cards.filter((card) => card.id !== id);
    setCards(nextCards);
  }
  return (
    <div className="App">
      <Nav />
      {/*<button
        onClick={() =>
          setCards(
            cards.concat({
              title: "OMG, did that just happen?",
              list: "todo",
              added: Date.now(),
              id: Math.random(),
              color: "lightblue",
              assignedTo: ["jofh"],
            })
          )
        }
      >
        
      </button>*/}
      <Main
        onCardDelete={onCardDelete}
        onCardMove={onCardMove}
        onFormSubmit={onFormSubmit}
        cards={cards}
      />
    </div>
  );
}
