import { wrapper } from '../../store';
import {
  getPokemonName,
  getRunningOperationPromises,
} from '../../api/pokemonApi';
import { useRouter } from 'next/router';
import Head from 'next/head';


import { useGetPokemonNameQuery } from '../../api/pokemonApi';

export default function PockemonPage() {
  const router = useRouter();

  const name = router.query.name as string;
  const { isLoading, error, data } = useGetPokemonNameQuery(name);

  const title = data?.species.name || '';
  const image = data?.sprites.front_shiny || '';
  const description = `Pockemon ${data?.species.name || ''}`;
  const  type = 'website';
  const url =  'https://metatags.io/';


  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        ></meta>
        <meta name='msvalidate.01' content='89BD029DD5EC8184F0505CBB28C0A7D8' />
        <meta
          name='google-site-verification'
          content='vaAaDH_-3EJGyAe78gu1ysTNYEhIkosQZytMoORLuvY'
        />
        <title>{title}</title>
        <meta property='og:title' content={title}></meta>
        <meta property='og:type' content={type} />
        <meta property='og:image' content={image}></meta>
        <meta property='og:url' content={url}></meta>

        {description && (
          <>
            <meta property='og:description' content={description}></meta>
            <meta name='description' content={description}></meta>
          </>
        )}
      </Head>
      <article>
        {error && <>Oh no, there was an error</>}
        {isLoading && <>Loading...</>}
        {!isLoading && !error && data && (
          <>
            <h3>{data.species.name}</h3>
            <div>
              <img src={data.sprites.front_shiny} alt={data.species.name} />
              <img src={data.sprites.back_default} alt={data.species.name} />
              <img src={data.sprites.front_default} alt={data.species.name} />
            </div>
            <div>{data.height}</div>
            <div>
              <h1>Movments</h1>
              {data.moves.map((move) => (
                <div key={move.move.url}>
                  <a href={move.move.url}>{move.move.name}</a>
                </div>
              ))}
            </div>
            <div>
              <h1>Game</h1>
              {data.game_indices.map((game) => (
                <div key={game.version.url}>
                  <a href={game.version.url}>{game.version.name}</a>
                </div>
              ))}
            </div>
          </>
        )}
      </article>
    </>
  );
}
