import { render, screen } from "@testing-library/react";
import Manager from "./Manager";

test("renders learn react link", () => {
  render(<Manager />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
