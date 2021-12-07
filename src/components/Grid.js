import Card from "./Card";

import { cardContent } from "../cardContent";

export default function Grid() {
  return (
    <div className="cards-container">
      {cardContent.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          thumbnail={card.thumbnail}
          description={card.description}
          github={card.github}
          website={card.website}
        />
      ))}
    </div>
  );
}
