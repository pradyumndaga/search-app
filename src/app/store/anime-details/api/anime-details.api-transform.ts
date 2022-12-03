import { AppState } from '../../types';
import { Data } from '../../types/data.type';
import { Pagination } from '../../types/pagination.type';

export function transformAnimeList(response: any): AppState {
  const pagination: Pagination = response.pagination;
  const data: Data[] = response.data.map(
    (res: {
      mal_id: any;
      url: any;
      images: { jpg: any };
      name: any;
      nicknames: any;
      favorites: any;
    }) => {
      return {
        id: res.mal_id,
        url: res.url,
        img: res.images.jpg.image_url,
        name: res.name,
        nicknames: res.nicknames,
        favorites: res.favorites,
      };
    }
  );
  return { pagination, data };
}
