
const RecipeList = ({ cakes }) => {
    return (
      <>
        <section>
          {cakes.map((cake, index) => (
            <div key={index}>
              <h3>{cake.cakeName}</h3>
              <ul>
                {cake.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section>
          <h4>Average cake rating: </h4>
          <p>{(cakes.reduce((total, cake) => total + cake.rating, 0) / cakes.length).toFixed(2)}</p>
        </section>
      </>
    );
  };
  
  export default RecipeList;