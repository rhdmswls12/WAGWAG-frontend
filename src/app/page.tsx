import styles from "./page.module.css";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button />
      <div style={{ margin: '20px 0' }}>
        <h2>SVG 아이콘 사용 예제</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {/* 기본 아이콘 */}
          <Icon type="edit" />
          
          {/* 크기 조정 */}
          <Icon type="edit" size={32} />
          
          {/* 색상 변경 */}
          <Icon type="edit" color="#57F98E" />
          
          {/* 여러 속성 조합 */}
          <Icon 
            type="edit" 
            size={48}
            color="red"
            style={{ opacity: 0.7 }}
          />
        </div>
      </div>
    </div>
  );
}
