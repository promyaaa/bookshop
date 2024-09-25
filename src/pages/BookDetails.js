import { useParams } from 'react-router-dom';
import books from '../data.json';
import { toast } from 'react-toastify';

const BookDetails = () => {
  const { bookId } = useParams();
  const book = books.find(b => b.bookId === parseInt(bookId));

  const handleWishlist = () => toast(`${book.bookName} has been added to Wishlist!`);
  const handleCart = () => toast(`${book.bookName} has been added to Cart!`);

  return (
    <div className="container mx-auto p-8 flex">
      <img src={book.image} alt={book.bookName} className="w-1/3" />
      <div className="ml-8">
        <h2 className="text-3xl font-bold">{book.bookName}</h2>
        <p>By {book.author}</p>
        <p>Category: {book.category}</p>
        <p>Review: {book.review}</p>
        <p>Pages: {book.totalPages}</p>
        <p>Publisher: {book.publisher} ({book.yearOfPublishing})</p>
        <p>Rating: {book.rating}</p>
        <div className="mt-4 space-x-4">
          <button onClick={handleWishlist} className="bg-blue-500 text-white px-4 py-2">Wish to Read</button>
          <button onClick={handleCart} className="bg-green-500 text-white px-4 py-2">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
