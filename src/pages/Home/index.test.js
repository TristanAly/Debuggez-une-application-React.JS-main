import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
import EventList from "../../containers/Events";
import PeopleCard from "../../components/PeopleCard";
import EventCard from "../../components/EventCard";
import Logo from "../../components/Logo";
import Icon from "../../components/Icon";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    render(<Home />);
    screen.findByText("Nos réalisations");
    screen.findByText("Categories");
    expect(EventList).toBeInTheDocument;
  });
  it("a list a people is displayed", () => {
    render(<Home />);
    screen.findByText("Notre équipe");
    screen.findByText(
      "Une équipe d’experts dédiés à l’ogranisation de vos événements"
    );
    expect(PeopleCard).toBeInTheDocument;
  });
  it("a footer is displayed", () => {
    screen.findByText("Notre derniére prestation");
    screen.findByText("Contactez-nous");
    expect(Logo).toBeInTheDocument;
    expect(Icon).toBeInTheDocument;
  });
  it("an event card, with the last event, is displayed", () => {
    render(<Home />);
    screen.findByText("Notre derniére prestation");
    expect(EventCard).toBeInTheDocument;
  });
});
