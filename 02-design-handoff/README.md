# 7.22 디자인-개발 핸드오프

## 1. 마크업

- 메인 제목인 h1으로 제목을 설정함.

  - sr-only 연습용

- 한 컴포넌트를 기준으로 여러 인스턴스들을 생성한 것이며, 리스트 형식으로 구성되어있으므로, ul 태그를 사용함.
- li를 템플릿화 하여 사용할 계획을 세웠음.
- 내용 설명은 p 태그 사용, 사진은 img 태그 사용함.

## 2. 스타일링

- h1에 sr-only 클래스를 부여하여 스크린 리더에서만 읽힐 수 있도록 함.
- sr-only를 제외한 나머지 요소에선 rem을 사용함.
- ul은 flex, column, align-items: flex-start; 로 설정함(Figma에 표기되어있는대로 적용)
- ul 내에 padding-left가 적용되어있어서 이를 0으로 설정함.
- li는 flex, row; align-items: flex-start; 로 설정하였고, padding: 0.75rem; gap: 1.25rem;로 설정함.

## 3. js

- 한 컴포넌트 기준으로 여러 인스턴스들을 생성한 것이므로, li요소를 템플릿 화 시켜 js를 통해 삽입하는 방식으로 구성함. 각 인스턴스마다 다른 정보들은 인터폴레이션을 사용하여 삽입하였고, 데이터는 객체로 관리하도록였음.

## 4. 그 외

- 프로젝트 기간 사용했던 scss의 편리함을 깨닫고 scss로 스타일링 완성. vscode extension에 live-server와 live sass compile을 사용하여 전처리하였음.
