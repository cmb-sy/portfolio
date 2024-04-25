/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef, useState } from "react";
import "./Accordion.css";
export type Props = {
  titleNode: React.ReactNode;
  children: React.ReactNode;
};

const AccordionItem = (props: Props) => {
  const [showContents, setShowContents] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const childElement = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const onClickAccordionToggle = () => {
    if (childElement.current) {
      const childHeight = childElement.current?.clientHeight;
      setContentHeight(childHeight);
      setShowContents(!showContents);
    }
  };

  return (
    <div className="wrapper">
      <button
        className={isActive ? "button toggle active" : "button toggle"}
        onClick={() => {
          onClickAccordionToggle();
          handleClick();
        }}
      >
        {props.titleNode}
      </button>

      {/* <button onClick={onClickAccordionToggle} className="button">
        {props.titleNode}
      </button>
      <button
        className={isActive ? "toggle active" : "toggle"}
        onClick={handleClick}
      >
        Toggle
      </button> */}
      <div
        style={{
          height: showContents ? `${contentHeight}px` : "0px",
          opacity: showContents ? 1 : 0,
        }}
        className="innerConten"
      >
        <div ref={childElement} className={showContents ? "isOpen" : "isClose"}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

// const wrapper = css`
//   margin: 40px 25px 40px 25px;
// `;

// const button = css`
//   width: 100%;
//   height: 50px;
//   color: #fff;
//   background-color: teal;
//   border: none;
//   cursor: pointer;
// `;

// const touchIcon = css`
//   transition: height 0.2s linear, opacity 0.2s ease-in;
//   overflow: hidden;
//   position: relative;

//   &::before,
//   &::after {
//     content: "";
//     display: inline-block;
//     width: 20px;
//     height: 1px;
//     position: absolute;
//     top: 50%;
//     background-color: #fff;
//     right: -150px;
//   }
//   &::after {
//     transform: rotate(90deg);
//     transition: transform 0.4s ease;
//   }

//   // オープンの場合
//   &.isOpen {
//     &::after {
//       transform: rotate(0);
//     }
//   }
// `;

// const innerContent = css`
//   transition: height 0.2s linear, opacity 0.2s ease-in;
//   overflow: hidden;
//   background-color: whitesmoke;
// `;

export default AccordionItem;
