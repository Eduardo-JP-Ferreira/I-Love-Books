export type Review = {
  id: number;
  bookId: number;
  review: string;
  grade: number;
};

export type CreateReview = Omit<Review, "id">;

export type UpdateReview = Omit<CreateReview, "bookId">