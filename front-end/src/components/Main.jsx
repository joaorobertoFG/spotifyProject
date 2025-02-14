import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import SideBar from "./SideBar";

const Main = ({ type }) => {
  return (
    <>
      <div className="main">
        {/* Item list de Artistas */}

        {type === "artists" || type === undefined ? (
          <ItemList
            title="Artistas"
            items={8}
            itemsArray={artistArray}
            path="/artists"
            idPath="/artist"
          />
        ) : (
          <></>
        )}

        {/* Item list de Músicas */}
        {type === "songs" || type === undefined ? (
          <ItemList
            title="Músicas"
            items={16}
            itemsArray={songsArray}
            path="/songs"
            idPath="/song"
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Main;
