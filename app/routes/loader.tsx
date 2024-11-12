export const loader = () => {
  throw new Error("this error broke on purpose!");
};

export const ErrorBoundary = () => {
  return (
    <div>
      Even though the loader failed you should do something here or at least
      have a root.tsx ErrorBoundary export
    </div>
  );
};

export default function Index() {
  return <div>Hello world!</div>;
}
