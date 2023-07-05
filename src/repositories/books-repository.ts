import { Book, CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";

import prisma from "../database";

export async function getBooks() {
  const result = await prisma.books.findMany();
  return result;
}

export async function getBook(id: number) {
  const query = `SELECT * FROM books WHERE id = $1`;

  const result = await prisma.books.findUnique({
    where: {
      id
    }
  });
  return result;
}

export async function createBook(book: CreateBook) {
  const result = await prisma.books.create({
    data: book
  });
  return result;

}


export async function reviewBook(bookReview: CreateReview) {
  const update = {
    grade: bookReview.grade,
    review: bookReview.review,
    read: true
  }
  const result = await prisma.books.update({
    data: update,
    where: {
      id: bookReview.bookId
    }
  });
  return result;
}