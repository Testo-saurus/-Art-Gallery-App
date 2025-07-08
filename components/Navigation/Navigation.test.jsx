import { render, screen } from "@testing-library/react";
import Navigation from "@/components/Navigation";
import { usePathname } from "next/navigation";

//Mock the actual next/navigation module with a fake one
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(), //Create a fake version of usePathname so we can control its return value
}));

test("renders navigation links and highlights active one", () => {
  //Mock the current route to simulate user being on "/art-pieces"
  usePathname.mockReturnValue("/art-pieces");
  render(<Navigation />);

  expect(screen.getByText("Gallery")).toBeInTheDocument();
  expect(screen.getByText("Spotlight")).toBeInTheDocument();
  expect(screen.getByText("Favorites")).toBeInTheDocument();

  //Get the "Gallery" link which should be active (since path is /art-pieces)
  const activeLink = screen.getByText("Gallery");
  //Assert that the active link has the "underline" style and a certain color
  expect(activeLink).toHaveStyle("text-decoration: underline");
  expect(activeLink).toHaveStyle("color: rgb(26, 79, 153)");
});
