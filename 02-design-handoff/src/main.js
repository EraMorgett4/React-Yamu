//STEP 1. Vanilla Script(ES + DOM API)
//STEP 2. Class Programming
//STEP 3. Web Components API

//TODO: 드래깅 상테 제어 위한 상수 선언
const DRAGGING_CLASSNAME = "dragging";

// TODO: .list 요소 찾기
const list = document.querySelector(".list");

// TODO: .list 자식들 찾기
const listItems = list.querySelectorAll("li");
// listItems = Array.from(listItems);
// console.log(Array.isArray(listItems));
const listItems = Array.from(list.querySelectorAll("li"));

//TODO: listItems 집합 순환 드래그 가능하게 처리
listItems.forEach((item) => {
  item.setAttribute("draggable", true);

  //TODO: 각 li 아이템을 드래그 시작, 끝 이벤트 핸들링
  item.addEventListener("dragstart", (e) => {
    e.currentTarget.classList.add(DRAGGING_CLASSNAME);
  });
  item.addEventListener("dragend", (e) => {
    e.currentTarget.classList.remove(DRAGGING_CLASSNAME);
  });
});

//TODO: list 드래그 이벤트 핸들링

list.addEventListener("dragover", (e) => {
  e.preventDefault();

  //TODO: 현재 드래깅 중인 아이템 찾기
  const draggedItem = listItems.find((item) => {
    item.classList.contains(DRAGGING_CLASSNAME);
  });

  //TODO: 드래깅 중인 요소가 아닌 나머지 아이템 집합 찾기
  const restItems = listItems.filter((item) => {
    !Object.is(item, draggedItem);
  });

  //TODO: 나머지 아이템 중에 드래깅 요소가 드래깅 중인 화면 상의 높이와 드롭 대상 요소의 화면에서의 top위치+
  // 높이 * 0.5 비교해서 교체할 아이템 찾기
  console.log(e.clientY);
  const replaceItem = restItems.find((item) => {
    // console.log(item.offsetTop);
    // console.log(item.offsetHeight);
    // console.log(item.offsetHeight * 0.5);
    return e.clientY <= item.offsetTop + item.offsetHeight * 0.5;
  });

  if (replaceItem) {
    list.insertBefore(draggedItem, replaceItem);
  } else {
    list.appendChild(draggedItem);
  }
});
