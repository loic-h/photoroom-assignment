import data from "./data.json";

function App() {

  const designs = data.designs;
  const favorites = designs.filter(item => item.isFavorite);

  return (
    <div>
      <section>
        <div>
          <h2>My favorites</h2>
          <p>Lorem Ipsum dolor sit amet consectetur.</p>
        </div>
        <div>
          {favorites.map(item => (
            <div key={item.id}>
              <div>
                <img src={item.imageSrc} alt="" />
              </div>
              <div>
                <div>
                  <h4>Category</h4>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
                <div>
                  <img src={item.author.avatarSrc} alt="" />
                  <h5>{item.author.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div>
          <h2>My designs</h2>
          <p>Lorem Ipsum dolor sit amet consectetur.</p>
        </div>
        <div>
          {designs.map(item => (
            <div key={item.id}>
              <div>
                <img src={item.imageSrc} alt="" />
              </div>
              <div>
                <div>
                  <h4>Category</h4>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
                <div>
                  <img src={item.author.avatarSrc} alt="" />
                  <h5>{item.author.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
