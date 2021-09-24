import { render, screen } from "@testing-library/react";
import Voter from "./Voter";

test("renders learn react link", () => {
  render(<Voter />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
