type filterProps = {
  title: string;
};

const CustomFilter = ({ title }: filterProps) => {
  return <div>{title}</div>;
};
export default CustomFilter;
