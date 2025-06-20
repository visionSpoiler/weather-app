# Weather Search App

> 도시 이름을 입력하면 해당 지역의 날씨 정보를 실시간으로 확인할 수 있는 React 기반 날씨 조회 애플리케이션입니다.

## 📌 주요 기능

- 도시 이름을 입력해 현재 날씨 정보를 조회
- 현재 기온, 날씨 설명, 풍속, 습도 등의 정보 제공
- 검색 시 로딩 상태 표시
- 앱 시작 시 서울의 날씨 자동 조회
- 한국어(`lang=kr`)로 날씨 설명 제공
- `OpenWeatherMap API` 사용

---
### 💻 결과 화면 예시

![결과 화면](./결과%20화면.png)

---

## 🧩 주요 기술 스택

- **React**: 컴포넌트 기반 UI 구성
- **useState / useEffect**: 상태 및 생명주기 관리
- **Fetch API**: 비동기 날씨 데이터 호출
- **OpenWeatherMap API**: 날씨 데이터 제공
- **환경 변수 (.env)**: API 키 보호

---

## ⚙️ 사용 방법

1. `.env` 파일에 다음 환경 변수를 설정하세요:

    ```env
    VITE_WEATHER_API_KEY=당신의_오픈웨더맵_API_키
    ```

2. 프로젝트를 실행하면 기본적으로 **서울**의 날씨가 표시됩니다.

3. 검색창에 도시 이름을 입력하고 검색 버튼을 누르면 해당 지역의 날씨가 출력됩니다.


---

## 📁 주요 컴포넌트

### `Weather.jsx`

- `useState`로 검색어, 로딩 상태, 날씨 데이터를 관리
- `useEffect`를 통해 컴포넌트 마운트 시 기본 도시(`seoul`) 날씨 호출
- `fetchWeatherData`: OpenWeatherMap API를 호출하여 날씨 정보를 받아오고, 섭씨로 변환하여 출력
- `getCurrentDate`: 현재 날짜를 한국어 형식으로 반환

### `Search.jsx`

- 사용자가 도시 이름을 입력할 수 있는 검색창 제공
- 입력 필드와 `날씨 검색` 버튼으로 구성
- `props`로 전달받은 `search`, `setSearch`, `handleSearch`를 이용해 상위 컴포넌트와 상태 공유

---

## 📝 참고 사항

- 날씨 온도는 Kelvin을 섭씨(℃)로 변환하여 표시합니다:

    ```js
    Math.floor((kelvin - 273.15) * 10) / 10
    ```


---

## 📄 라이선스

본 프로젝트는 학습 및 개인 과제 목적으로 제작되었습니다.