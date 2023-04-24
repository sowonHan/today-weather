# ☀ 오늘 날씨 어때?

리액트 기반의 일기예보 사이트

## 🌡 프로젝트 소개

오늘날씨어때?는 도시별로 실시간 날씨 정보와 3시간 간격의 단기 예보를 검색할 수 있는 웹사이트입니다.

오늘날씨어때?는 BBC Weather를 참고하여 제작되었습니다.

> **개발 기간** : 2022년 5월 13일 ~ 2022년 5월 31일

## ⚙ 기술 스택

`언어`

- Javascript
- HTML5
- CSS3 / Styled Components / styled-reset

`라이브러리`

- React
- Axios
- React Router v6
- Ant Design
- React Icons

## ☔ 소스

`OPEN API`

- [OpenWeatherMap One Call API](https://openweathermap.org/)

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

#### 도시 검색

- datalist 태그로 추천 선택지를 제공하여 국내의 특별, 광역시를 간편하게 검색할 수 있도록 돕는다. 또한 도내 도시에 대한 입력 방식을 참고할 수 있도록 경기도 예시를 함께 제공.

#### 검색 결과 페이지

- 현재 시간을 체크하여 오후 6시를 기준으로 낮과 밤 2가지 배경을 출력.
- 실시간 예보와 단기 예보를 탭으로 구분.

#### 실시간 예보

- 현재 날짜와 시간 출력. OpenWeatherMap API를 연동하여 실시간 일기예보 출력.
- 제공되는 내용
  > 온도 · 체감 온도 · 습도 · 날씨 설명 · 날씨 아이콘 · 풍속 · 강우량 · 적설량

#### 시간별 단기 예보

- OpenWeatherMap API를 연동하여 현재로부터 전후 최대 40시간, 2~3일치 단기 예보를 3시간 단위의 가로 슬라이드 화면으로 출력.
- Styled Component에 props를 전달해 온도에 따라 아이콘의 위치가 변동되도록 처리함으로써, 슬라이드 전체를 보았을 때 아이콘이 곡선 그래프 형태로 표시.
- Styled Component에 props를 전달하여 슬라이드의 각 항목을 클릭 시 항목 우측으로 세부 정보가 표시.
- 슬라이드 항목에 제공되는 내용
  > 시간 · 날씨 아이콘 · 온도 · 풍속 · 강수 확률 · 강우량
- 세부 정보란에 제공되는 내용
  > 날씨 설명 · 체감 온도 · 습도 · 구름량 · 강우량 · 적설량

## ⚡ 트러블 슈팅

<details>
  <summary>탭 메뉴 간의 status 공유 문제</summary>

- API 요청에 필요한 도시명(이하 상태값 'parents')이 URL 파라미터로 보이지 않으면서, 동시에 이것이 실시간 예보와 단기 예보 탭에서 서로 공유되어야 했습니다.
- 검색결과 페이지는 중첩 라우팅된 상태이기 때문에, React Router의 useOutletContext 훅을 사용해서 상태값 'parents'를 Outlet의 자식 Route인 탭 메뉴 모두에게 전달할 수 있도록 했습니다.
- 또한 사용자에게 선노출되는 실시간 예보 컴포넌트에서는, 검색창를 통해 URL에 담긴 정보를 확인하고 오류가 없을 시 이와 동일한 내용으로 상태값 'parents'가 갱신되도록 처리하는 함수를 만들었습니다. 그리고 API를 요청할 때 해당 함수를 실행시켜 사용자가 입력한 도시 이름이 API 주소의 쿼리스트링에 반영되도록 했습니다.
- 위 과정을 거침으로써 사용자가 탭을 이동할 때 렌더링되는 단기 예보 컴포넌트에서는 공유된 상태값 'parents'로 손쉽게 API 요청을 할 수 있게 되었습니다.

</details>

<details>
  <summary>날씨 아이콘 출력 문제</summary>
  
- OpenWeatherMap에서 제공하는 날씨 상태 id값은 백 단위의 그룹으로 분류되어 있습니다. 따라서 id를 100으로 나눈 다음, 결과값을 switch 문으로 비교하여 그룹별로 아이콘을 출력시키는 함수를 만들었습니다.
- 그런데 id가 800인 경우를 제외하고는 전부 default case로 넘어가는 문제를 발견했습니다.
- 원인은 toFixed()가 숫자 객체 메소드지만 반환하는 값은 문자열 자료형이기 때문이었습니다. switch 문의 비교값을 문자열로 변경하여 오류를 해결했습니다.

</details>

<details>
  <summary>세부 정보란 표시 문제</summary>

- 단기 예보 슬라이드 항목을 클릭하면 우측으로 세부 정보란이 나타나긴 하지만, 아무 시간대나 선택해도 항목마다 전부 세부정보가 나와버리는 문제를 발견했습니다.
- 이를 보완하기 위해 우선 API 요청으로 받아온 데이터 배열에 map 메소드를 사용하여 각 객체마다 isOpen이라는 key를 추가해주었습니다.
- 그리고 특정 슬라이드 항목에 onClick 이벤트가 발생하면, useState로 상태값을 갱신하는 과정에서 map 메소드를 다시 한 번 실행해 이벤트가 발생한 항목만 isOpen 값이 변경되도록 처리하여 문제를 해결했습니다.

</details>
