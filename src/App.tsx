import data from "./data.json";
import { SectionTitle, EditorialCard } from "./components";

function App() {

  const designs = data.designs;
  const favorites = designs.filter(item => item.isFavorite);

  return (
    <div>
      <section>
        <SectionTitle headline="My favorites" subheadline="Lorem Ipsum dolor sit amet consectetur." />
        <div>
          {favorites.map(item => (
            <EditorialCard
              key={item.id}
              imageSrc={item.imageSrc}
              headline={item.title}
              subheadline={item.subtitle}
              authorAvatarSrc={item.author.avatarSrc}
              authorName={item.author.name} />
          ))}
        </div>
      </section>
      <section>
        <SectionTitle headline="My designs" subheadline="Lorem Ipsum dolor sit amet consectetur." />
        <div>
          {designs.map(item => (
            <EditorialCard
              key={item.id}
              imageSrc={item.imageSrc}
              headline={item.title}
              subheadline={item.subtitle}
              authorAvatarSrc={item.author.avatarSrc}
              authorName={item.author.name} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
