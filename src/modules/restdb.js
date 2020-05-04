const url = "https://frontendspring20-9cc3.restdb.io/rest/kanban";
const APIKey = "5e90ac94111788414066c8d9";
function getCards(callback) {
  fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": APIKey,
      "cache-control": "no-cache",
    },
  })
    .then((e) => e.json())
    .then((data) => callback(data));
}

function addCard(callback, cards, data) {
  const postData = JSON.stringify(data);
  fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": APIKey,
      "cache-control": "no-cache",
    },
    body: postData,
  })
    .then((res) => res.json())
    .then((response) => callback(cards.concat(response)));
}
function moveCard(data, id) {
  let postData = JSON.stringify(data);

  fetch(url + "/" + id, {
    method: "put",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": APIKey,
      "cache-control": "no-cache",
    },
    body: postData,
  })
    .then((d) => d.json())
    .then((t) => console.log(t));
}

function deleteCard(id) {
  fetch(url + "/" + id, {
    method: "delete",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": APIKey,
      "cache-control": "no-cache",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
export const RestDB = {
  getCards,
  addCard,
  moveCard,
  deleteCard,
};
