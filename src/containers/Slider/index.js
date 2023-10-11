import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    // changement de sens du trie du plus ancien au plus récent
    new Date(evtB.date) > new Date(evtA.date) ? 1 : -1
  );
  const nextCard = () => {
    if (byDateDesc !== undefined) {
      setTimeout(
        // index inferieur a la taille de mon tableau.
        // ajout de - 1 à byDateDesc.length pour éviter l'erreur de débordement.
        () => setIndex(index < byDateDesc.length - 1 ? index + 1 : 0),
        5000
      );
    }
  };
  useEffect(() => {
    nextCard();
  });
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        // déplacer ma key props dans la div du dessus
        <div key={event.title}>
          <div
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                  key={`${_.title}`}
                  type="radio"
                  name="radio-button"
                  checked={index === radioIdx}
                  // ajout readOnly un attribut booléen, pour empêcher un utilisateur de modifier la valeur.
                  readOnly
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
