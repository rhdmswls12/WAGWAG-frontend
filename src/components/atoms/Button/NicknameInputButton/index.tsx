import styles from "./NicknameInputButton.module.scss";

export default function NicknameInputButton() {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="닉네임을 입력해주세요"
    />
  );
}
