import { FC, ReactNode, useEffect, useRef, useState } from "react";
import Chevron from "../../assets/chevron.svg";
import styles from "./Menu.module.css";

type Props = {
  title: string;
  withIcon?: boolean;
  children?: ReactNode;
};

function Menu({ title, withIcon, children }: Props) {
  const childElement = useRef<HTMLDivElement>(null);
  const [showChildren, setShowChildren] = useState(false);
  const [childHeight, setChildHeight] = useState(0);
  const [reverseIcon, setReverseIcon] = useState(false);

  useEffect(() => {
    if (childElement.current) {
      const height = childElement.current.clientHeight;
      setChildHeight(height);
    }
  }, [childHeight]);

  const handleClick = () => {
    setShowChildren(!showChildren);
    setReverseIcon(!reverseIcon);
  };

  return (
    <>
      <div onClick={handleClick} className={styles.item}>
        {title}
        {withIcon && (
          <div className={`${styles.icon} ${reverseIcon && styles.reverse}`}>
            aaaa
          </div>
        )}
      </div>
      <div
        className={styles.childItem}
        style={{
          height: children && showChildren ? `${childHeight}px` : "0px",
          opacity: children && showChildren ? 1 : 0,
        }}
      >
        <div ref={childElement}>{children}</div>
      </div>
    </>
  );
}

export default Menu;
