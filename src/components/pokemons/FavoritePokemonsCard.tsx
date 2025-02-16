import type { FavoritePokemons } from "../../interfaces/favorite-pokemons";
import { createSignal, Show, type Component } from "solid-js";

interface Props {
  pokemon: FavoritePokemons;
}

export const FavoritePokemonsCard: Component<Props> = ({ pokemon }) => {
  const [isVisible, setIsVisible] = createSignal(true);
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
  const deleteFavorite = () => {
    const favoritePokemons = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    const updatedFavorites = favoritePokemons.filter(
      (favorite: FavoritePokemons) => favorite.id !== pokemon.id
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsVisible(false);
  };
  return (
    <Show when={isVisible()}>
      <div class="flex flex-col justify-center items-center">
        <a href={`/pokemons/${pokemon.name}`}>
          <img
            src={imageSrc}
            alt={pokemon.name}
            width={96}
            height={96}
            style={`view-transition-name:${pokemon.name}-image`}
          />
          <p class=" capitalize">
            #{pokemon.id} {pokemon.name}
          </p>
        </a>
        <button
          class="bg-red-500 text-white px-2 py-1 rounded mt-2"
          onClick={deleteFavorite}
        >
          Remove
        </button>
      </div>
    </Show>
  );
};
