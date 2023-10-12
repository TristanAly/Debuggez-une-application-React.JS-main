import { fireEvent, render, screen } from "@testing-library/react";
import Menu from "./index";

describe("When Menu is created", () => {
  it("a list of mandatories links and the logo are displayed", async () => {
    render(<Menu />);
    await screen.findByText("Nos services");
    await screen.findByText("Nos réalisations");
    await screen.findByText("Notre équipe");
    await screen.findByText("Contact");
  });

  describe("and a click is triggered on contact button", () => {
    it("document location  href change", async () => {
      render(<Menu />);
      fireEvent(
        await screen.findByText("Contact"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      expect(window.document.location.hash).toEqual("#contact");
    });
  });
  describe(`should navigate to "Nos services" when link is clicked`, () => {
    it("document location  href change", async () => {
      const { getByText } = render(<a href="#nos-services">Nos services</a>);
      const link = getByText("Nos services");
      fireEvent.click(link);
      expect(screen.getByText("Nos services").closest("a")).toHaveAttribute(
        "href",
        "#nos-services"
      );
    });
  });
  describe(`should navigate to "Nos réalisations" when link is clicked`, () => {
    it("document location  href change", async () => {
      const { getByText } = render(
        <a href="#nos-realisations">Nos réalisations</a>
      );
      const link = getByText("Nos réalisations");
      fireEvent.click(link);
      expect(screen.getByText("Nos réalisations").closest("a")).toHaveAttribute(
        "href",
        "#nos-realisations"
      );
    });
  });
  describe(`should navigate to "Notre équipe" when link is clicked`, () => {
    it("document location  href change", async () => {
      const { getByText } = render(<a href="#notre-equipe">Notre équipe</a>);
      const link = getByText("Notre équipe");
      fireEvent.click(link);
      expect(screen.getByText("Notre équipe").closest("a")).toHaveAttribute(
        "href",
        "#notre-equipe"
      );
    });
  });
});
