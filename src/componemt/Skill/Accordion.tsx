import "./Accordion.css";
import { useRef, useState } from "react";

export type Props = {
  titleNode: React.ReactNode;
  children: React.ReactNode;
};

const AccordionItem = (props: Props) => {
  const [showContents, setShowContents] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const childElement = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const onClickAccordionToggle = () => {
    setShowContents(!showContents);
  };

  return (
    <div className="accordionWrapper">
      <button
        className={
          isActive
            ? "accordionButton accordion-toggle active"
            : "accordionButton accordion-toggle"
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
