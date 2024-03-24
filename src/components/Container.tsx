interface IContainerProps {
  children: any;
}

const Container: React.FunctionComponent<IContainerProps> = (props) => {
  return (
    <div className="max-w-[1440px] px-0 md:px-[50px] mx-auto">
      {props.children}
    </div>
  );
};

export default Container;
