export const loader = () => {
  throw new Error("this error broke on purpose!");
};

export default function Index() {
  return <div>Hello world!</div>;
}
