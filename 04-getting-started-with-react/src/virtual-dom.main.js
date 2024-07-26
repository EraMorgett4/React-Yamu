//Virtual DOM
//실제 DOM을 추상화
import { createElement } from "./lib/virtual/index.js";
import { createRoot } from "./lib/virtual-dom/index.js";

//----------------------------
// 가상 요소 생성
console.log(typeof createElement);

//자식 요소
const figcaptionVElement = createElement("figcaption");
console.log(figcaptionVElement);

//부모 요소
//API: createElement(type, props, ...children) : props : attirbute,
const figureVElement = createElement("figure", null, figcaptionVElement);
console.log(figureVElement);

// 실제 DOM의 children을 흉내내어 나타냄

//virtual-dom /createRoot
// 가상요소를 실제 DOM 요소로 렌더링
// API: createRoot(container)
const virtualRootElement = document.getElementById("virtual-dom");
const vRoot = createRoot(virtualRootElement);
console.log(vRoot);
vRoot.render(figureVElement);

//-----------------------

// 실제 DOM
// 웹 API를 사용해 문서 객체 생성
// <figure> 요소 생성
const figureElement = document.createElement("figure");

const figcaptionElement = document.createElement("figcaption");
figureElement.append(figcaptionElement);

console.dir(figureElement); // 문서 객체

// 실제 DOM에 마운트
const actualDomElement = document.getElementById("actual-dom");
console.log(actualDomElement);
actualDomElement.append(figureElement);

// 가상 요소 생성
// const figureVElement = createElement("figure");
// console.dir(figureVElement);

// 실습
// ul 만들어보기
// <ul class=architectures"> 가상요소 생성
// import { createElement } from "./lib/virtual/index.js";

const listData = {
  items: [
    { id: "1", title: "Climatology" },
    { id: "2", title: "History of Architecture" },
    { id: "3", title: "Design" },
  ],
};

const listItems = listData.items.map(({ id, title }) => {
  // 가상 요소 반환
  const itemElement = createElement(
    "li",
    { className: "item" },
    createElement("img", {
      src: `/architectures/architecture-${id}.jpg`,
      alt: "",
    }),
    createElement("span", { className: "content" }, title),
    createElement(
      "button",
      {
        type: "button",
        title: "아이템 이동 (위/아래 화살표 키 활용)",
      },
      createElement("img", {
        src: "/icons/handle.svg",
        alt: "아이템 이동 (위/아래 화살표 키 활용)",
      })
    )
  );
  return itemElement;
});

console.log(listItems);

//API:createElement(type, props, ...children)
const list = createElement(
  //type
  "ul",
  //props
  { className: "architectures", lang: "en" },
  //...children
  //<li class></li> 가상요소 추가

  createElement(
    "li",
    { className: "item" },
    createElement("img", { src: "/architectures/architecture-1.jpg", alt: "" }),
    createElement("span", { className: "content" }, "Climatology"),
    createElement(
      "button",
      { type: "button", title: "아이템 이동" },
      createElement("img", { src: "icons/handle.svg", alt: "icon" })
    )
  )
);

console.log(list);

//
const root = createRoot(document.getElementById("virtual-dom"));

root.render(list);
