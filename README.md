# WAGWAG-FE

## 설치 방법

본 프로젝트는 `npm`을 패키지 매니저로 사용합니다.

```bash
# 저장소 클론
git clone https://github.com/WAGWAG-REBOOT/WAGWAG-frontend.git
cd wagwag-frontend

# 의존성 설치
npm install
```

## 실행 방법

```bash
# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 결과물 미리보기
npm run start

# 린트 검사
npm run lint

# 코드 포맷팅
npm run format
```

## 기술 스택

- **패키지 매니저:** `npm`
- **프레임워크:** `Next.js 15`
- **언어:** `TypeScript`
- **스타일링:** `sass`
- **상태 관리:**
  - `zustand` (전역 상태 관리)
  - `@tanstack/react-query` (서버 상태 관리)
- **HTTP 클라이언트:** `axios`
- **코드 품질:**
  - `ESLint` (린팅)
  - `Prettier` (코드 포맷팅)
- **렌더링 방식:** SSR, CSR 혼합

## 디렉토리 구조

```
src/
├── app/            # Next.js App Router 구조
├── assets/         # 정적 리소스
├── components/     # UI 컴포넌트
│   ├── atoms/        # 가장 작은 단위의 컴포넌트
│   ├── molecules/    # 재사용 가능한 atoms 조합 컴포넌트
│   ├── (domain)/     # 도메인별 컴포넌트 (organism 단위)
│   └── layouts/      # 레이아웃 관련 컴포넌트
├── viewModels/     # 비즈니스 로직 커스텀 훅 (ViewModel 담당)
├── queries/        # React Query 관련 커스텀 훅 
├── stores/         # Zustand 스토어
├── apis/           # API 통신 함수
│   └── axios.instance.ts # axios 인스턴스 설정
├── types/          # 공통 타입 정의
└── utils/          # 유틸리티 함수
    ├── constants/    # 상수, 한-영 매핑함수 등 정의
    └── helpers/      # 헬퍼 역할의 함수 혹은 커스텀 훅

public/             # 정적 파일 (이미지, 아이콘 등)
```

## 레이어 아키텍처

- **Page Layer:** `/src/app`
- **Component Layer:** `/src/components`
- **Business Layer:** `/src/viewModels`
- **Store Layer:** `/src/queries`, `/src/stores`
- **Utility Layer:** `/src/apis`, `/src/utils`, `/src/types`

레이어 간 의존성은 단방향으로 유지됩니다:
Page Layer → Component Layer → Business Layer → Store Layer

단, 부모에서 관리하는 state가 자식으로 넘겨질 때 너무 잦은 리렌더링이 발생하는 경우에서는 ref를 사용하여 의존성을 깰 수 있습니다.

## 컨벤션

- **코드 스타일:**
  - ESLint + TypeScript-ESLint
  - Prettier (.prettierrc.json 참조)
- **네이밍 규칙:**
  - 컴포넌트: PascalCase
  - 훅: camelCase, use 접두사
  - react query: camelCase, use 접두사, query/mutation 접미사
- **커밋 메시지:** [Conventional Commits](https://www.conventionalcommits.org/) 형식

## 라이센스

이 프로젝트는 비공개 프로젝트로, 모든 권리는 보호됩니다.
