import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FavoriteButton from "../FavoriteButton";

const mockOnToggleFavorite = jest.fn();

describe("FavoriteButton", () => {
  beforeEach(() => {
    mockOnToggleFavorite.mockClear();
  });

  it("renders button with correct aria-label", () => {
    render(
      <FavoriteButton
        isFavorite={false}
        onToggleFavorite={mockOnToggleFavorite}
        slug="test-art"
      />
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByLabelText("Toggle Favorite")).toBeInTheDocument();
  });

  it("calls onToggleFavorite with correct slug when clicked", async () => {
    const user = userEvent.setup();
    render(
      <FavoriteButton
        isFavorite={false}
        onToggleFavorite={mockOnToggleFavorite}
        slug="test-art"
      />
    );

    const button = screen.getByRole("button");
    await user.click(button);

    expect(mockOnToggleFavorite).toHaveBeenCalledWith("test-art");
    expect(mockOnToggleFavorite).toHaveBeenCalledTimes(1);
  });

  it("renders when not favorited", () => {
    render(
      <FavoriteButton
        isFavorite={false}
        onToggleFavorite={mockOnToggleFavorite}
        slug="test-art"
      />
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByLabelText("Toggle Favorite")).toBeInTheDocument();
  });

  it("renders when favorited", () => {
    render(
      <FavoriteButton
        isFavorite={true}
        onToggleFavorite={mockOnToggleFavorite}
        slug="test-art"
      />
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByLabelText("Toggle Favorite")).toBeInTheDocument();
  });

  it("handles multiple clicks correctly", async () => {
    const user = userEvent.setup();
    render(
      <FavoriteButton
        isFavorite={false}
        onToggleFavorite={mockOnToggleFavorite}
        slug="test-art"
      />
    );

    const button = screen.getByRole("button");
    await user.click(button);
    await user.click(button);

    expect(mockOnToggleFavorite).toHaveBeenCalledWith("test-art");
    expect(mockOnToggleFavorite).toHaveBeenCalledTimes(2);
  });

  it("works with different slugs", async () => {
    const user = userEvent.setup();
    render(
      <FavoriteButton
        isFavorite={false}
        onToggleFavorite={mockOnToggleFavorite}
        slug="different-art"
      />
    );

    const button = screen.getByRole("button");
    await user.click(button);

    expect(mockOnToggleFavorite).toHaveBeenCalledWith("different-art");
  });

  it("has correct button structure", () => {
    render(
      <FavoriteButton
        isFavorite={false}
        onToggleFavorite={mockOnToggleFavorite}
        slug="test-art"
      />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label", "Toggle Favorite");
  });

  it("handles rapid clicks correctly", async () => {
    const user = userEvent.setup();
    render(
      <FavoriteButton
        isFavorite={false}
        onToggleFavorite={mockOnToggleFavorite}
        slug="test-art"
      />
    );

    const button = screen.getByRole("button");

    // Simulate rapid clicking
    await user.click(button);
    await user.click(button);
    await user.click(button);

    expect(mockOnToggleFavorite).toHaveBeenCalledTimes(3);
    expect(mockOnToggleFavorite).toHaveBeenCalledWith("test-art");
  });
});
