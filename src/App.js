import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";

export default function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://frontendspring20-9cc3.restdb.io/rest/kanban", {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": "5e90ac94111788414066c8d9",
        "cache-control": "no-cache",
      },
    })
      .then((e) => e.json())
      .then((data) => setCards(data));
  }, []);
  /*
{
      title: "Make it dynamic",
      list: "todo",
      added: 1588055291061,
      _id: 1,
      color: "hotpink",
      assignedTo: ["jofh"],
    },
    {
      title: "Make it dynamic",
      list: "todo",
      added: 1588055091061,
      _id: 2,
      color: "lightblue",
      assignedTo: ["jofh", "davi"],
    },
*/
  function onFormSubmit(data) {
    console.log("form submitted", data);
    setCards(cards.concat(data));
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
    setCards(nextCards);
  }
  function onCardDelete(_id) {
    const nextCards = cards.filter((card) => card._id !== _id);
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
