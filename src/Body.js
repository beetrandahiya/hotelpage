import parisian_img from "./image/homecar01-640w.webp";
import montmarte from "./image/montmarte-1920w.jpg";
import paris_img_1 from "./image/homecar11-640w.webp";
import paris_img_2 from "./image/homecar21-640w.webp";


function Body() {
    return (
      <div className="main">
        <div className="container-parisian">
          <div className="text">
            {" "}
            <h1>HÉDONISME PARISIEN</h1> Bienvenue à l'Hôtel Particulier
            Montmartre,{" "}
            <strong>le plus privé et le plus petit des hôtels parisiens</strong>.
            Cette grande demeure familiale ayant appartenue à la famille Hermès et
            devenue hôtel particulier vous accueille dans un
            <strong> écrin de verdure, protégé et classé</strong>, car faisant
            partie des derniers vestiges du Maquis de Montmartre. <p>&nbsp;</p> Au
            fur et à mesure des années, cette ancienne maison qu'on dénommait
            autrefois “ une folie ” a su s'imposer comme une{" "}
            <strong>référence parisienne</strong>. <p>&nbsp;</p> Que cela soit{" "}
            <strong>pour un verre, pour un dîner ou pour une nuit</strong>,
            l'Hôtel Particulier vous attend à Montmartre dans ce que de nombreuses
            personnes nomment à juste titre{" "}
            <strong>“ une campagne en plein Paris ”</strong>.{" "}
          </div>
          <div className="container-parisian-img">
            <img src={parisian_img} alt="parisian" />
          </div>
        </div>
  
        <div className="container-sacre-coeur">
          {" "}
          <h2>
            NOTRE QUARTIER
            <br />
            <br />
            Sacré-Coeur Montmartre Paris Paris Paris Paris Paris Mon Amour
          </h2>{" "}
          <img src={montmarte} />{" "}
        </div>
        <div className="container-paris">
          <img src={paris_img_1}></img>
          <img src={paris_img_2}></img>
        </div>
  
        <div className="container-cya">
          <div className="text">
            <h2>see you (very) soon</h2> <h3>love</h3>
          </div>
        </div>
      </div>
    );
  }

  
  export default Body;