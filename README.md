# FitContentAI - Full Website (다크/라이트 모드 지원)

피트니스 블로거를 위한 AI 기반 성장 플랫폼의 완전한 웹사이트입니다. **다크모드와 라이트모드**를 모두 지원하며, 사용자가 자유롭게 전환할 수 있습니다.

## 🌓 테마 기능

### 다크모드 (기본)
- **배경**: 깊은 검정 (#0a0a0a)
- **서피스**: 어두운 회색 (#1a1a1a)
- **텍스트**: 밝은 흰색 및 회색 톤
- **강조 효과**: 그린/블루 Glow

### 라이트모드
- **배경**: 순백색 (#ffffff)
- **서피스**: 밝은 회색 (#f8f9fa)
- **텍스트**: 어두운 검정 및 회색 톤
- **강조 효과**: 부드러운 그림자

### 테마 전환
- 네비게이션 바 우측 상단의 **해/달 아이콘** 클릭
- 모바일에서도 동일하게 작동
- 선택한 테마는 **localStorage에 자동 저장**되어 다음 방문 시에도 유지됨

## 기술 스택

- **Vite** - 빠른 빌드 도구
- **Tailwind CSS v3** - 유틸리티 기반 CSS (Dark Mode 지원)
- **Alpine.js** - 경량 JavaScript 프레임워크
- **Vanilla JavaScript** - 테마 관리 및 인터랙션

## 주요 기능

### 🎨 디자인
- 🌙 다크모드 / ☀️ 라이트모드 토글
- 📱 완전한 반응형 디자인 (모바일/태블릿/데스크톱)
- ✨ 부드러운 애니메이션 (fade-in, slide-up, float)
- 🎯 그라데이션 텍스트 효과
- 💫 Glow 효과 및 parallax 배경

### 📄 페이지 섹션
1. **Hero Section** - 메인 헤드라인, CTA, 대시보드 미리보기
2. **Problem Section** - 사용자 페인 포인트 3가지
3. **Solution Overview** - 핵심 솔루션 (시간절약, 성장, SEO)
4. **Stats Section** - 주요 통계 (10,000+ 블로거, 500K+ 콘텐츠)
5. **Features Section** - 4가지 탭 (AI 콘텐츠, SEO, 커뮤니티, 안전 발행)

### 🎭 인터랙티브 요소
- **탭 전환** (Alpine.js) - 기능 섹션에서 4가지 기능 탐색
- **모바일 메뉴** - 햄버거 메뉴로 네비게이션
- **테마 토글** - 실시간 다크/라이트 모드 전환
- **스무스 스크롤** - 앵커 링크 클릭 시 부드러운 이동
- **Parallax 효과** - 스크롤 시 배경 blob 움직임

## 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저가 자동으로 열리며 `http://localhost:3000` (또는 다른 포트)에서 확인할 수 있습니다.

### 3. 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

### 4. 프로덕션 미리보기

```bash
npm run preview
```

## 프로젝트 구조

```
blogbooster/
├── index.html              # 메인 HTML 파일 (모든 섹션 포함)
├── src/
│   ├── style.css          # Tailwind CSS 설정 및 테마 스타일
│   └── main.js            # JavaScript (테마 관리, 인터랙션)
├── tailwind.config.js     # Tailwind CSS v3 설정 (다크/라이트 색상)
├── postcss.config.js      # PostCSS 설정
├── vite.config.js         # Vite 설정
├── package.json           # 프로젝트 의존성
├── .gitignore            # Git 제외 파일
└── README.md             # 이 파일
```

## 색상 팔레트

### Dark Mode
```css
--dark-bg: #0a0a0a
--dark-surface: #1a1a1a
--dark-border: #2a2a2a
--dark-text-primary: #ffffff
--dark-text-secondary: #a0a0a0
--dark-text-muted: #666666
```

### Light Mode
```css
--light-bg: #ffffff
--light-surface: #f8f9fa
--light-border: #e9ecef
--light-text-primary: #1a1a1a
--light-text-secondary: #6c757d
--light-text-muted: #adb5bd
```

### Accent Colors (공통)
```css
--primary-500: #22c55e (Green)
--accent-blue: #3b82f6
--accent-purple: #a855f7
--accent-orange: #f97316
```

## 커스터마이징

### 기본 테마 변경

`src/main.js`의 `initTheme()` 함수에서 기본 테마를 변경할 수 있습니다:

```javascript
const savedTheme = localStorage.getItem('theme') || 'light'; // 'dark'에서 'light'로 변경
```

### 색상 변경

`tailwind.config.js` 파일의 `theme.extend.colors` 섹션에서 색상을 변경할 수 있습니다.

### 애니메이션 추가

`tailwind.config.js`의 `animation` 및 `keyframes` 섹션에서 새로운 애니메이션을 추가할 수 있습니다.

### 폰트 변경

현재 Pretendard 폰트를 사용하고 있으며, `src/style.css`에서 폰트를 변경할 수 있습니다.

## PRD 참조

이 웹사이트는 `FitContentAI_PRD.md` 문서를 기반으로 제작되었습니다.

### 주요 가치 제안
- **시간 절약**: AI가 콘텐츠를 자동 생성하여 글쓰기 시간 90% 단축
- **빠른 성장**: 커뮤니티 품앗이로 초기 트래픽 확보
- **전문성**: SEO 분석, 경쟁사 분석 등 전문 도구 제공
- **네트워킹**: 같은 분야 블로거들과 함께 성장

### 핵심 기능
1. **🤖 AI 콘텐츠 생성** - 피트니스 전문 AI 엔진
2. **🔍 SEO 분석 도구** - 키워드, 경쟁사, 블로거 순위
3. **🤝 커뮤니티 품앗이** - 30일 챌린지, 게이미피케이션
4. **🚀 안전 발행 시스템** - 원본성 100% 보장

## 테마 전환 데모

### 다크모드 (기본)
```
배경: 검정 → 흰색
텍스트: 흰색 → 검정
카드: 어두운 회색 → 밝은 회색
그림자: Glow 효과 → 일반 그림자
```

### 라이트모드
- 더 밝고 깔끔한 느낌
- 가독성 향상된 텍스트 대비
- 부드러운 그림자 효과

## 브라우저 지원

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)

## 라이선스

© 2025 FitContentAI. All rights reserved.

## 업데이트 내역

### v1.1.0 (2025-01-23)
- ✨ 라이트모드 추가
- 🎨 다크/라이트 모드 토글 스위치 구현
- 💾 테마 선택 localStorage 저장
- 🎯 모든 섹션에 테마별 스타일 적용

### v1.0.0 (2025-01-23)
- 🚀 초기 릴리스 (다크모드 전용)
- 📱 반응형 디자인
- ✨ Alpine.js 통합
- 🎨 Tailwind CSS v3 적용
