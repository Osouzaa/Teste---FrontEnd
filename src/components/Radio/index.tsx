import { useEffect, useState } from "react";
import { CirclePlay, PauseCircle, Pencil, Search, Trash } from "lucide-react";
import {
  RadioContainer,
  RadioContent,
  RadioHeader,
  RadioItem,
  RadioItemLeft,
  RadioName,
  SearchContainer,
} from "./styles";

interface Station {
  name: string;
  stationuuid: string;
  url: string;               
  country?: string;
  tags?: string;
}

export function Radio() {
  const [favorites, setFavorites] = useState<Station[]>([]);
  const [currentStation, setCurrentStation] = useState<Station | null>(null);  
  const [isPlaying, setIsPlaying] = useState(false);  
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);  

  const loadFavorites = () => {
    const savedFavorites = localStorage.getItem("favoriteStations");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    const handleFavoritesUpdate = () => loadFavorites();

    window.addEventListener("favoritesUpdated", handleFavoritesUpdate);
    return () => window.removeEventListener("favoritesUpdated", handleFavoritesUpdate);
  }, []);

  const handlePlayPause = (station: Station) => {
    if (currentStation?.stationuuid === station.stationuuid && isPlaying) {
      audio?.pause();
      setIsPlaying(false);
    } else {
      audio?.pause();  
      const newAudio = new Audio(station.url);
      newAudio.play();
      setAudio(newAudio);
      setCurrentStation(station);
      setIsPlaying(true);

      newAudio.addEventListener("ended", () => {
        setIsPlaying(false);
      });
    }
  };

  const handleDelete = (stationId: string) => {
    const updatedFavorites = favorites.filter(fav => fav.stationuuid !== stationId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favoriteStations", JSON.stringify(updatedFavorites));
    window.dispatchEvent(new Event("favoritesUpdated"));  

    if (currentStation?.stationuuid === stationId) {
      audio?.pause();
      setIsPlaying(false);
      setCurrentStation(null);
    }
  };

  return (
    <RadioContainer>
      <RadioHeader>
        <h1>Radio Browser</h1>
        <SearchContainer>
          <Search size={20} />
          <span>Search stations</span>
        </SearchContainer>
      </RadioHeader>

      <RadioContent>
        <ul>
          {favorites.length > 0 ? (
            favorites.map((station) => (
              <RadioItem key={station.stationuuid}>
                <RadioItemLeft>
                  {currentStation?.stationuuid === station.stationuuid && isPlaying ? (
                    <PauseCircle size={24} onClick={() => handlePlayPause(station)} />
                  ) : (
                    <CirclePlay size={24} onClick={() => handlePlayPause(station)} />
                  )}
                  <div>
                    <p>{station.name}</p>
                    <RadioName>{station.country || "Unknown"}, {station.tags || "Various"}</RadioName>
                  </div>
                </RadioItemLeft>
                <RadioItemLeft>
                  <Pencil size={20} />
                  <Trash size={20} onClick={() => handleDelete(station.stationuuid)} />
                </RadioItemLeft>
              </RadioItem>
            ))
          ) : (
            <p>Você não tem estações favoritas ainda.</p>
          )}
        </ul>
      </RadioContent>
    </RadioContainer>
  );
}
