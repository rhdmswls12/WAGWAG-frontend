import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // TurboPack 설정 (개발 환경)
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  // webpack 설정 (빌드 환경)
  webpack: (config) => {
    // SVG 파일을 위한 기존 규칙 찾기
    // @ts-expect-error - webpack 규칙 타입 문제 무시
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // 여전히 ?url 쿼리로 URL 임포트 지원
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ['@svgr/webpack'],
      }
    );
    
    // 원래 규칙에서 SVG 제외
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
};

export default nextConfig;
