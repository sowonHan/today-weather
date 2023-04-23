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
- Styled Component에 props를 전달하여 슬라이드의 각 항목을 클릭 시 항목 우측으로 세부 정보가 출력.
- 슬라이드 항목에 제공되는 내용
  > 시간 · 날씨 아이콘 · 온도 · 풍속 · 강수 확률 · 강우량
- 세부 정보란에 제공되는 내용
  > 날씨 설명 · 체감 온도 · 습도 · 구름량 · 강우량 · 적설량

## ⚡ 트러블 슈팅

<details>
  <summary>접기/펼치기</summary>
  내용 추가할 예정
</details>
