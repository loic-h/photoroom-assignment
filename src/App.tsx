import data from "./data.json";
import { SectionTitle, EditorialCard, Spacer } from "./components";

function App() {

  const designs = data.designs;
  const favorites = designs.filter(item => item.isFavorite);

  return (
    <div className=" flex flex-col items-center">
      <div className="text-content-primary px-500 max-w-[1200px] w-full">
        <Spacer size="500" />
        <section>
          <SectionTitle headline="My favorites" subheadline="Lorem Ipsum dolor sit amet consectetur." />
          <Spacer size="i500" />
          <div>
            {favorites.map(item => (
              <EditorialCard
                key={item.id}
                imageSrc={item.imageSrc}
                headline={item.title}
                subheadline={item.subtitle}
                authorAvatarSrc={item.author.avatarSrc}
                authorName={item.author.name}
                direction="horizontal" />
            ))}
          </div>
          <Spacer size="i600" />
        </section>
        <section>
          <SectionTitle headline="My designs" subheadline="Lorem Ipsum dolor sit amet consectetur." />
          <Spacer size="i500" />
          <div className="grid gap-300 grid-cols-3">
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
        <Spacer size="500" />
      </div>
    </div>
  );
}

export default App;
