<h1>🎬 Movie App<h1>

<h2>📌 프로젝트 소개</h2>
영화, 드라마, 애니메이션 콘텐츠를 검색하고 탐색할 수 있는 웹 플랫폼 입니다.
트렌딩 콘텐츠와 상세 정보를 직관적으로 확인할 수 있습니다.

<hr />
<h2>🚀 주요 기능</h2>
-

<hr />
<h2>📂 폴더 구조 (FSD)</h2>

src/
├── app/ # 애플리케이션 레벨 설정 및 초기화
│ ├── providers/ # 글로벌 상태 관리, 라우팅 설정
│ ├── routes/ # 페이지별 라우트 정의
│ ├── App.tsx # 루트 컴포넌트
│ └── index.tsx # 엔트리 포인트
│
├── pages/ # 각 페이지 (라우트)별로 구성
│ ├── Home/ # 홈 페이지 (예: 인기 콘텐츠)
│ │ ├── index.tsx # 페이지 엔트리
│ │ └── model/ # 상태 관리 (예: 트렌딩 데이터 로드)
│ ├── Movie/ # 영화 상세 페이지
│ │ ├── index.tsx
│ │ └── model/
│ ├── TVShow/ # 드라마 상세 페이지
│ │ ├── index.tsx
│ │ └── model/
│ └── Anime/ # 애니메이션 상세 페이지
│ ├── index.tsx
│ └── model/
│
├── features/ # 재사용 가능한 주요 기능 단위ß
│ ├── SearchBar/ # 검색창 기능
│ │ ├── ui/ # 컴포넌트 (UI)
│ │ ├── model/ # 상태, 비즈니스 로직
│ │ └── lib/ # 유틸 함수 (검색 쿼리 생성 등)
│ ├── ContentCarousel/ # 콘텐츠 캐러셀
│ │ ├── ui/
│ │ ├── model/
│ │ └── lib/
│ └── FilterPanel/ # 필터 패널 (예: 장르, 평점 등)
│ ├── ui/
│ ├── model/
│ └── lib/
│
├── entities/ # 도메인별 핵심 데이터 단위
│ ├── Movie/ # 영화 엔터티
│ │ ├── ui/ # 영화 카드 컴포넌트
│ │ ├── model/ # 영화 데이터 처리 로직
│ │ └── lib/ # 데이터 파싱/정리 유틸리티
│ ├── TVShow/
│ │ ├── ui/
│ │ ├── model/
│ │ └── lib/
│ └── Anime/
│ ├── ui/
│ ├── model/
│ └── lib/
│
├── f_shared/ # 글로벌 재사용 가능 리소스
│ ├── ui/ # 버튼, 카드 같은 공용 컴포넌트
│ ├── lib/ # 공통 유틸리티 (API 호출 등)
│ ├── api/ # API 요청 및 설정
│ │ ├── tmdb.ts # TMDB API 통신 로직
│ ├── config/ # 글로벌 설정값 (환경 변수 등)
│ └── styles/ # 글로벌 스타일 (SCSS 또는 CSS)
│
└── widgets/ # UI 위젯 (조합형 UI 요소)
├── Header/ # 헤더
│ ├── ui/
│ └── model/
├── Footer/ # 푸터
│ ├── ui/
│ └── model/
└── TrendingSection/ # 인기 콘텐츠 섹션
├── ui/
├── model/
└── lib/

<hr />
<h2>✨ 사용 방법</h2>

<hr />
<h2>📄 라이선스</h2>
