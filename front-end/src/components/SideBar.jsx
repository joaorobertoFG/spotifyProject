import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faGlobe, faPlus } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="library-header library-title">
        <h3 className="library-title--2">
          <FontAwesomeIcon  icon={faBook} /> Sua Biblioteca
        </h3>
        <FontAwesomeIcon className="library-header--plus" icon={faPlus} />
      </div>
      <div className="biblioteca">
        <div className="library-title--blocks">
          <h3>Crie sua primeira playlist</h3>
          <p>É fácil, vamos te ajudar.</p>
          <button className="library-link">Criar Playlist</button>
        </div>
        <div className="library-title--blocks">
          <h3>Que tal seguir um podcast novo?</h3>
          <p>Avisaremos você sobre novos episódios.</p>
          <button className="library-link">Explore podcasts</button>
        </div>
        <button className="idioma-link"><FontAwesomeIcon icon={faGlobe} />Português do Brasil</button>
      </div>
    </div>
  );
};

export default SideBar;
