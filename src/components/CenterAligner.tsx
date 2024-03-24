import * as React from "react";

interface ICenterAlignerProps {
  children: React.ReactNode;
  className: string;
}

const CenterAligner: React.FunctionComponent<ICenterAlignerProps> = (props) => {
  return (
    <section
      className={`flex items-center justify-center min-h-fit ${props.className}`}
    >
      <div className="max-w-[1000px] w-full mx-auto">{props.children}</div>
    </section>
  );
};

export default CenterAligner;
