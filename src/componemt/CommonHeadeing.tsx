export type Props = {
  headingTitle: string;
  headingSubTitle?: string;
};

function CommonHeadeing(props: Props) {
  return (
    <div style={{ marginBottom: `30px` }}>
      <h1
        style={{ color: `#02942b`, fontSize: `1.875rem`, fontWeight: `bold` }}
      >
        {props.headingTitle}
      </h1>
      <span style={{ color: `#899f91` }}>{props.headingSubTitle}</span>
    </div>
  );
}

export default CommonHeadeing;
