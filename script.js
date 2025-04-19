const wrapper = document.getElementById("tiles");
const tileSize = 50;

let columns = Math.floor(document.body.clientWidth / tileSize);
let rows = Math.floor(document.body.clientHeight / tileSize);

const createTile = (index) => {
  const tile = document.createElement("div");

  tile.classList.add("tile");

  return tile;
};

const createTiles = (quantity) => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  });
};

createTiles(columns * rows);
