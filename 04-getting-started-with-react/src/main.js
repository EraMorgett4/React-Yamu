//React Element 생성
const listData = {
  items: [
    { id: "3", title: "Graphics" },
    { id: "1", title: "Climatology" },
    { id: "2", title: "History of Architecture" },
    { id: "4", title: "Building design" },
  ],
};

const itemElements = listData.items.map((item) => {
  return React.createElement(
    "li",
    { className: "item" },
    React.createElement("img", {
      src: "/architectures/architecture-1.jpg",
      alt: "",
    }),
    React.createElement("span", { className: "content" }, "Climatology"),
    React.createElement(
      "button",
      { type: "button", title: "아이템 이동" },
      React.createElement("img", {
        src: "/icons/handle.svg",
        alt: "아이템 이동",
      })
    )
  );
});

const itemlist = React.createElement(
  "ul",
  { className: "architectures", lang: "en" },
  ...itemElements
);

console.log(`itemlist: ${itemlist}`);

const children = [];

const list = React.createElement(
  "ul",
  { className: "architectures", lang: "en" },
  React.createElement(
    "li",
    { className: "item" },
    React.createElement("img", {
      src: "/architectures/architecture-1.jpg",
      alt: "",
    }),
    React.createElement("span", { className: "content" }, "Climatology"),
    React.createElement(
      "button",
      { type: "button", title: "아이템 이동" },
      React.createElement("img", {
        src: "/icons/handle.svg",
        alt: "아이템 이동",
      })
    )
  )
);

console.log(list);

console.log(React.isValidElement(list));

// 리액트 앱 렌더링
// ReactDOM - client verison 사용
// ReactDOM.createRoot(container 실제 DOM 노드)

const container = document.getElementById("root");
console.log(container);

//ReactDOM Root 생성
const reactDomRoot = ReactDOM.createRoot(container);

console.log(reactDomRoot);

reactDomRoot.render(list);

function render() {
  reactDomRoot.render(itemlist);
}

setTimeout(render, 2000);

// 반응성 구현

// 개발자 -> 데이터 수정 -> 반응성(변경감지) -> 리액트 -> 화면 업데이트 구현
