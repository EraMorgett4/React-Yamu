const architectureData = [
  {
    src: "/02-design-handoff/assets/history.png",
    alt: "history",
    text: "History of Architecture",
  },
  {
    src: "/02-design-handoff/assets/building.png",
    alt: "building",
    text: "Building design",
  },
  {
    src: "/02-design-handoff/assets/graphics.png",
    alt: "graphics",
    text: "Graphics",
  },
  {
    src: "/02-design-handoff/assets/climatology.png",
    alt: "climatology",
    text: "Climatology",
  },
];

function insertList() {
  const architectureList = document.querySelector(".architecture");
  architectureData.forEach((data) => {
    const listItem = `
        <li class="architecture__item">
          <img src="${data.src}" alt="${data.alt}" class="architecture__image" />
          <p class="architecture__text">${data.text}</p>
        </li>
      `;
    architectureList.innerHTML += listItem;
  });
}

insertList();
