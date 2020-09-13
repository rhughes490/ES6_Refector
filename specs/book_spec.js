import { strictEqual } from 'assert';
import Book from '../book';

describe('Book', function () {
  let book;

  beforeEach(function () {
    book = new Book('Charles Dickens', 'A Tale of Two Cities', 'Historical');
  });

  it('should have a title', function () {
    strictEqual(book.title, 'A Tale of Two Cities');
  });

  it('should have an author', function () {
    strictEqual(book.author, 'Charles Dickens');
  });

  it('should have a genre', function () {
    strictEqual(book.genre, 'Historical');
  });
});
