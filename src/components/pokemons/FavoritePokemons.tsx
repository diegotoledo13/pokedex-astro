import { createSignal, For } from "solid-js";
import type { FavoritePokemons } from "../../interfaces/favorite-pokemons";
import { FavoritePokemonsCard } from "./FavoritePokemonsCard";

const getLocalStoragePokemons = (): FavoritePokemons[] => {
  const favoritePokemons = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  return favoritePokemons;
};
export const FavoritesPokemons = () => {
  const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());
  return (
    <div class="grid grid-cols-2 sm:grid-cols-4">
      <For each={pokemons()}>
        {(pokemons) => <FavoritePokemonsCard pokemon={pokemons} />}
      </For>
    </div>
  );
};
