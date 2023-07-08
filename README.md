# ☀ 오늘 날씨 어때?

![메인](https://github.com/sowonHan/today-weather/assets/100406001/4affe953-6fb1-4cde-955a-7e8f058f093c)

리액트 기반의 일기예보 사이트

> [배포링크](https://sowonhan.github.io/today-weather/)

## 🌡 프로젝트 소개

`오늘날씨어때?`는 도시별로 실시간 날씨 정보와 3시간 간격의 단기 예보를 검색할 수 있는 웹사이트입니다.

`오늘날씨어때?`는 PC 화면에 최적화되어 있으며, BBC Weather를 참고하여 제작되었습니다.

> **개발 기간** : 2022년 5월 13일 ~ 2022년 5월 31일

## ⚙ 기술 스택

`언어`

- Javascript
- HTML5
- CSS3

`라이브러리`

- 프레임워크 : React
- 비동기 작업 처리 도구 : Axios
- 라우팅 도구 : React Router v6.3
- 스타일 도구
  - Styled Components
  - styled-reset
  - Ant Design
  - React Icons

`디자인`

- [Figma](https://www.figma.com/file/mL5vY1XKdclbiJNB5GDKBy/Today-Weather?type=design&node-id=0%3A1&t=7ZLVSGoitkyA8oRV-1)

## ☔ 소스

`OPEN API`

- [OpenWeatherMap One Call API 2.5](https://openweathermap.org/)

`이미지 소스`

- [Unsplash](https://unsplash.com/ko)

## 🗂 디렉터리 구조

<details>
  <summary>접기/펼치기</summary>
  
    📦today-weather
    ┣📂src
    ┃ ┣ 📂components
    ┃ ┃ ┣ 📜Footer.js
    ┃ ┃ ┣ 📜Header.js
    ┃ ┃ ┣ 📜Hourly.js
    ┃ ┃ ┣ 📜NotFound.js
    ┃ ┃ ┣ 📜SearchBar.js
    ┃ ┃ ┣ 📜Tab.css
    ┃ ┃ ┣ 📜Tab.js
    ┃ ┃ ┗ 📜Today.js
    ┃ ┣ 📂images
    ┃ ┃ ┣ 📜main.jpg
    ┃ ┃ ┣ 📜night.jpg
    ┃ ┃ ┗ 📜sunny.jpg
    ┃ ┣ 📂pages
    ┃ ┃ ┣ 📜MainPage.js
    ┃ ┃ ┗ 📜ResultPage.js
    ┃ ┣ 📜App.js
    ┃ ┣ 📜index.css
    ┃ ┣ 📜index.js
    ┗ 📜.env

</details>

## ❄ 주요 기능

### 도시 검색

![검색](https://github.com/sowonHan/today-weather/assets/100406001/df0a52ba-aff3-42d5-bc1e-919db28dedb4)

- datalist 태그로 추천 선택지와 입력 예시를 제공.
- 아이콘 마우스 클릭, Enter 키 입력 2가지 방식으로 작동되도록 구현.
- 결과 페이지로 이동시키면서 입력받은 영문 도시명을 상태값으로 전달.

### 검색 결과 페이지

- URL을 통해 전달받은 상태값으로 OpenWeatherMap One Call API를 호출하여 받아온 데이터를 클라이언트단에 렌더링.
- 실시간 예보와 단기 예보를 탭 형식으로 디자인하고, 실제로는 페이지와 경로가 변경되도록 라우팅 처리.

#### (1) 실시간 예보

- Date 내장 객체로 현재의 연월일, 요일, 시간을 화면에 출력.

#### (2) 시간별 단기 예보

![슬라이드](https://github.com/sowonHan/today-weather/assets/100406001/9e536c3f-3d3a-4091-b2cb-39db0dd08604)

- 호출한 API 데이터를 가로형 슬라이드 형태로 클라이언트단에 렌더링.
- Styled Component로 스타일에 props를 전달해, 온도에 따라 아이콘의 위치가 변동되도록 처리. 슬라이드 전체를 보았을 때 아이콘이 곡선 그래프 형태로 표시.
- Styled Component로 스타일에 props를 전달하여, 슬라이드의 각 항목을 클릭 시 항목 우측으로 세부 정보가 보이거나 숨겨진다.

### 스타일

![낮밤](https://github.com/sowonHan/today-weather/assets/100406001/68b13783-4213-40be-9963-632fbb4583dc)

- Date 내장 객체로 현재 시간을 확인하고 Styled Component로 스타일에 props를 전달하여, 오후 6시를 기준으로 2가지 배경을 출력.

## 🌈 얻은 경험

- 상태 관리 라이브러리를 쓰지 않고도 useState 훅과 React Router의 Context 훅을 이용하여 클라이언트 데이터를 관리할 수 있게 되었습니다. 그러나 관리 규모에 한계가 있고 편의성이 떨어진다는 점에서 Redux, React Query, Recoil 등 라이브러리의 중요성 또한 실감하였습니다.
- CSS-in-JS 스타일링 기법으로 코드의 유지보수성을 높이는 방법을 알게 되었습니다.
- React를 사용하여 컴포넌트 기반의 SPA를 제작할 수 있습니다.
- React Router를 사용하여 SPA 환경에서 라우팅 작업을 할 수 있게 되었습니다.
- Axios를 사용하여 OPEN API를 호출하고 받아온 데이터를 정제하여 클라이언트 사이드에 렌더링할 수 있게 되었습니다.
- UI 프레임워크를 활용하여 컴포넌트를 제작할 수 있게 되었습니다.

## ⚡ 트러블 슈팅

<details>
  <summary>컴포넌트간의 상태 공유</summary>

**목표**

1. 검색한 도시명(이하 상태값 'parents')이 URL 파라미터로 보이지 않는다.
2. React 내장 Context API와 Redux 라이브러리를 사용하지 않는다.

위의 목표를 전제로 실시간 예보(이하 'Today') 컴포넌트와 단기 예보(이하 'Hourly') 컴포넌트에서 상태값 parents를 공유시키는 것이 `오늘날씨어때?` 프로젝트의 가장 중대한 과제였습니다.

- 우선 검색결과 페이지는 중첩 라우팅된 상태이기 때문에, React Router의 useOutletContext 훅을 사용해서 상태값 parents를 Outlet의 자식 Route인 Today와 Hourly 컴포넌트에 전달할 수 있도록 했습니다.
- 또한 사용자에게 선노출되는 Today 컴포넌트에서는, 검색창를 통해 URL에 담긴 정보를 확인하고 오류가 없을 시 이와 동일한 내용으로 상태값 parents가 갱신되도록 처리하는 함수를 만들었습니다.
- 그리고 API를 호출할 때 해당 함수를 실행시켜 사용자가 입력한 도시 이름이 API 주소의 쿼리스트링에 반영되도록 했습니다.
- 위 과정을 거침으로써 사용자가 탭을 이동할 때 렌더링되는 Hourly 컴포넌트에서는, 공유된 상태값 parents로 손쉽게 API 요청을 할 수 있게 되었습니다.

</details>

<details>
  <summary>날씨 아이콘 출력 문제</summary>
  
- OpenWeatherMap에서 제공하는 날씨 상태 id값은 백 단위의 그룹으로 분류되어 있습니다. 따라서 id를 100으로 나눈 다음, 결과값을 switch 문으로 비교하여 그룹별로 아이콘을 출력시키는 함수를 만들었습니다.
- 그런데 id가 800인 경우를 제외하고는 전부 default case로 넘어가는 문제를 발견했습니다.
- 원인은 toFixed()가 숫자 객체 메소드지만 반환하는 값은 문자열 자료형이기 때문이었습니다.
- switch 문의 비교값을 문자열로 변경하여 오류를 해결했습니다.

</details>

<details>
  <summary>세부 정보란 표시 문제</summary>

- 단기 예보 슬라이드 항목을 클릭하면 우측으로 세부 정보란이 나타나긴 하지만, 아무 시간대나 선택해도 항목마다 전부 세부정보가 열리는 문제를 발견했습니다.
- 이를 보완하기 위해 우선 API 호출로 받아온 데이터 배열에 map 메소드를 사용하여 각 객체마다 isOpen이라는 key를 추가해주었습니다.
- 그리고 특정 슬라이드 항목에 onClick 이벤트가 발생하면, useState로 상태값을 갱신하는 과정에서 map 메소드를 다시 한 번 실행해 이벤트가 발생한 항목만 isOpen 값이 변경되도록 처리하여 문제를 해결했습니다.

</details>
