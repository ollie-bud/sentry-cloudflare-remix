import { Form } from "@remix-run/react";

export const action = () => {
  throw new Error("action error");
};

export default function Index() {
  return (
    <Form method="post">
      <button type="submit">Break me!</button>
    </Form>
  );
}
