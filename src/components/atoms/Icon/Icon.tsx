import React from 'react';

// 에디트 아이콘 임포트
import EditIcon from '@/assets/images/Edit.svg';

// 다른 SVG 아이콘도 필요에 따라 추가할 수 있습니다.
// import OtherIcon from '@/assets/images/OtherIcon.svg';

// 아이콘 종류 타입 정의
export type IconType = 'edit' | 'other';

// 아이콘 매핑 객체 정의
const iconComponents: Record<IconType, React.FC<React.SVGProps<SVGSVGElement>>> = {
  edit: EditIcon,
  // 다른 아이콘들도 필요에 따라 추가
  other: EditIcon, // 일단 임시로 EditIcon으로 설정
};

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** 아이콘 종류 */
  type: IconType;
  /** 아이콘 크기 (width, height 모두 적용) */
  size?: number;
  /** 아이콘 색상 */
  color?: string;
  /** 추가 클래스명 */
  className?: string;
}

/**
 * SVG 아이콘을 쉽게 사용할 수 있는 컴포넌트
 */
export const Icon: React.FC<IconProps> = ({
  type,
  size = 24,
  color = 'currentColor',
  className = '',
  ...props
}) => {
  const IconComponent = iconComponents[type];

  return (
    <IconComponent
      width={size}
      height={size}
      fill={color}
      className={className}
      {...props}
    />
  );
};

export default Icon; 