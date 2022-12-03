import { Data } from './data.type';
import { Pagination } from './pagination.type';

export type AppState = {
  pagination: Pagination;
  data: Data[];
};
