# Vercel 배포 안내 (SJY Portfolio - Vite + React)

## 1) 사전 준비
- Vercel 계정 생성 및 로그인
- GitHub 리포지토리 준비 (옵션: 수동 업로드도 가능)

## 2) 로컬에서 설치/빌드
```bash
npm install
npm run build
```

## 3) Vercel 배포
### 방법 A) GitHub 연동
1) 이 프로젝트를 GitHub에 푸시합니다.
2) Vercel에서 "New Project" → GitHub 리포지토리 선택
3) Framework: **Vite** (자동 감지됨)
4) Build Command: `npm run build`
5) Output Directory: `dist`
6) Deploy 클릭 → 완료

### 방법 B) 수동 업로드
1) `npm run build` 후 생성된 `dist/` 폴더를 zip으로 압축
2) Vercel 대시보드 → "New Project" → "Import" → "Upload" 선택
3) zip 파일 업로드 → Deploy

## 4) 환경/경로
- `vercel.json`이 포함되어 있어 빌드/출력 경로가 자동 설정됩니다.
- 정적 리소스(이력서 PDF)는 `public/resume_en.pdf`, `public/resume_kr.pdf`를 사용하세요.
