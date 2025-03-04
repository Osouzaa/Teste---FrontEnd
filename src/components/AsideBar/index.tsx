import { useEffect, useState } from "react";
import { Menu, Check } from "lucide-react";
import { InputFilter, ListStyles, Sidebar } from "./styles";
import { api } from "../../lib/axios";

interface Station {
  name: string;
  stationuuid: string;
  url?: string;
  country?: string;
  tags?: string;
}

export function AsideBar() {
  const [stations, setStations] = useState<Station[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState<Station[]>([]);

  const loadFavorites = () => {
    const savedFavorites = localStorage.getItem("favoriteStations");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    } else {
      setFavorites([]); // Limpa se não tiver nada
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

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await api.get("/json/stations/search", {
          params: {
            country: "Brazil",
            limit: 10,
          },
        });
        setStations(response.data);
      } catch (error) {
        console.error("Erro ao buscar estações:", error);
      }
    };

    fetchStations();
  }, []);

  const toggleFavorite = (station: Station) => {
    const isFavorite = favorites.some((fav) => fav.stationuuid === station.stationuuid);
    const updatedFavorites = isFavorite
      ? favorites.filter((fav) => fav.stationuuid !== station.stationuuid)
      : [...favorites, station];

    setFavorites(updatedFavorites);
    localStorage.setItem("favoriteStations", JSON.stringify(updatedFavorites));
    window.dispatchEvent(new Event("favoritesUpdated")); // Emite evento personalizado
  };

  const filteredStations = stations.filter((station) =>
    station.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Sidebar>
      <Menu size={24} />
      <InputFilter
        type="text"
        placeholder="Search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ListStyles>
        {filteredStations.length > 0 ? (
          filteredStations.map((station) => (
            <li
              key={station.stationuuid}
              onClick={() => toggleFavorite(station)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
            >
              <span>{station.name}</span>
              {favorites.some((fav) => fav.stationuuid === station.stationuuid) && (
                <Check size={24} />
              )}
            </li>
          ))
        ) : (
          <li>Nenhuma estação encontrada</li>
        )}
      </ListStyles>
    </Sidebar>
  );
}
