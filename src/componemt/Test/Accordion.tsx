/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useRef, useState } from "react";
import { AccordionType } from "./Menu";

const AccordionItem = ({ overview, detail }: AccordionType) => {
  const [showContents, setShowContents] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const childElement = useRef<HTMLDivElement>(null);

  const onClickAccordionToggle = () => {
    if (childElement.current) {
      const childHeight = childElement.current?.clientHeight; // 対象要素の高さの取得
      setContentHeight(childHeight); // 対象要素の高さの代入
      setShowContents(!showContents); // アコーディオン表示
    }
  };

  return (
    <div css={wrapper}>
      <button onClick={onClickAccordionToggle} css={button}>
        {overview}
        {/* showContents: booleanを基に切り替える */}
        <span className={showContents ? "isOpen" : "isClose"} css={touchIcon} />
      </button>
      {/* インラインスタイルで高さの動的変更をする */}
      <div
        style={{
          height: showContents ? `${contentHeight}px` : "0px",
          opacity: showContents ? 1 : 0,
        }}
        css={innerContent}
      >
        <div ref={childElement} className={showContents ? "isOpen" : "isClose"}>
          {detail}
        </div>
      </div>
    </div>
  );
};

const wrapper = css`
  margin-bottom: 40px;
  width: 400px;
`;

const button = css`
  width: 100%;
  height: 50px;
  color: #fff;
  background-color: teal;
  border: none;
  cursor: pointer;
`;

const touchIcon = css`
  transition: height 0.2s linear, opacity 0.2s ease-in;
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    width: 20px;
    height: 1px;
    position: absolute;
    top: 50%;
    background-color: #fff;
    right: -150px;
  }
  &::after {
    transform: rotate(90deg);
    transition: transform 0.4s ease;
  }

  // オープンの場合
  &.isOpen {
    &::after {
      transform: rotate(0);
    }
  }
`;

const innerContent = css`
  transition: height 0.2s linear, opacity 0.2s ease-in;
  overflow: hidden;
  padding: 10px;
  background-color: whitesmoke;
`;

export default AccordionItem;
