import styles from "./SearchInput.module.scss";
import { SearchInputProps } from "../Input.types";
import SearchSVG from "src/assets/images/Search.svg";

function SearchInput({
  inputSize,
  shape = "line",
  backgroundColor = "transparent",
  iconPosition = "none",
  placeholderColor = "#888",
  iconColor = "gray",
  ...rest
}: SearchInputProps) {
  const iconSize = inputSize === "small" ? 12 : 18;

  return (
    <div
      className={
        styles.wrapper +
        " " +
        styles[inputSize] +
        " " +
        styles[shape] +
        " " +
        styles[backgroundColor] +
        " " +
        styles[iconPosition]
      }
    >
      {iconPosition === "left" && (
        <SearchSVG
          className={`${styles.icon} ${styles[iconColor]}`}
          width={iconSize}
          height={iconSize}
        />
      )}
      <input
        className={styles.input}
        style={
          { "--placeholder-color": placeholderColor } as React.CSSProperties
        }
        {...rest}
      />
      {iconPosition === "right" && (
        <SearchSVG
          className={`${styles.icon} ${styles[iconColor]}`}
          width={iconSize}
          height={iconSize}
        />
      )}
    </div>
  );
}

export default SearchInput;
