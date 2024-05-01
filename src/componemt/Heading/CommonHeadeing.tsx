export type Props = {
  headingTitle: string;
  description?: string;
};

function CommonHeadeing(props: Props) {
  return (
    <div>
      <div style={{ marginBottom: `10px` }}>
        <h1
          style={{
            color: `#02942b`,
            fontSize: `4rem`,
            fontWeight: `bold`,
          }}
        >
          {props.headingTitle}
        </h1>
      </div>

      <p
        style={{
          lineHeight: `2`,
          margin: `10px`,
          wordBreak: `break-all`,
          color: `#424242`,
          marginBottom: `7vh`,
        }}
      >
        {props.description}
      </p>
    </div>
  );
}

export default CommonHeadeing;
