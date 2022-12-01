export type Pagination = {
  lastVisiblePage: number;
  hasNextPage: boolean;
  currentPage: number;
  items: {
    count: number;
    total: number;
    perPage: number;
  };
};
