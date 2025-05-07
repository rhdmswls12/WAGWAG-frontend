import styles from './VisibilityToggleButton.module.scss';

interface VisibilityToggleButtonProps {
  isPublic: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export default function VisibilityToggleButton({
  isPublic,
  onClick,
  disabled,
}: VisibilityToggleButtonProps) {
  const iconSrc = isPublic ? '/unlockIcon.svg' : '/lockIcon.svg';

  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      <img src={iconSrc} alt={isPublic ? '전체공개' : '비공개'} width={16} height={16} />
      <span>{isPublic ? '전체공개' : '비공개'}</span>
    </button>
  );
}