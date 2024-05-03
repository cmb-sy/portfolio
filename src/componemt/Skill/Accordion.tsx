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
        className={
          isActive
            ? "button accordion-toggle active"
            : "button accordion-toggle"
        }
        onClick={() => {
          onClickAccordionToggle();
          handleClick();
        }}
      >
        {props.titleNode}
      </button>
      <div
        style={{
          height: showContents
            ? `calc(${childElement.current?.scrollHeight}px + 20px)`
            : "0px",
          opacity: showContents ? 1 : 0,
          overflow: "hidden",
          transition: "height 0.5s ease, opacity 1.0s ease",
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

export default AccordionItem;
