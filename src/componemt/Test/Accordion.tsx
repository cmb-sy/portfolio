/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useRef, useState } from "react";
// import { AccordionType } from "./Menu";

// { overview, detail }: AccordionType

export type Props = {
  titleNode: React.ReactNode;
  children: React.ReactNode;
};

const AccordionItem = (props: Props) => {
  const [showContents, setShowContents] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const childElement = useRef<HTMLDivElement>(null);

  const onClickAccordionToggle = () => {
    if (childElement.current) {
      const childHeight = childElement.current?.clientHeight;
      setContentHeight(childHeight);
      setShowContents(!showContents);
    }
  };

  return (
    <div css={wrapper}>
      <button onClick={onClickAccordionToggle} css={button}>
        {props.titleNode}
        <span className={showContents ? "isOpen" : "isClose"} css={touchIcon} />
      </button>
      <div
        style={{
          height: showContents ? `${contentHeight}px` : "0px",
          opacity: showContents ? 1 : 0,
        }}
        css={innerContent}
      >
        <div ref={childElement} className={showContents ? "isOpen" : "isClose"}>
          {props.children}
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
