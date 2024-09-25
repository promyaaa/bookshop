import { useParams } from 'react-router-dom';
import books from '../data.json';
import { ToastContainer, toast } from 'react-toastify';
import Footer from './Footer';


import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
  const { bookId } = useParams();
  const book = books.find(b => b.bookId === parseInt(bookId));

  const handleWishlist = () => toast(`${book.bookName} has been added to Wishlist!`);
  const handleCart = () => toast(`${book.bookName} has been added to Cart!`);

  return (
    <>
    <div className="container mx-auto p-8 flex">
      <img src={book.image} alt={book.bookName} className="w-1/3" />
      <div className="ml-8">
        <h2 className="text-3xl font-bold">{book.bookName}</h2>
        <p className="italic">By {book.author}</p>
        <p><span className="font-bold">Category:</span> {book.category}</p>
        <p><span className="font-bold">Review:</span> {book.review}</p>
        <p><span className="font-bold">Pages:</span> {book.totalPages}</p>
        <p><span className="font-bold">Publisher:</span> {book.publisher} ({book.yearOfPublishing})</p>
        <p><span className="font-bold">Ratings:</span>  {book.rating}</p>

        {
            book.tags.map((tag, index) =>
                <div key={index} className="inline-block border border-solid text-xs font-semibold px-2 py-1 mr-2 mt-2">
                    {tag}
                </div>
            )
        }
        <div className="mt-4 space-x-4">
          <button onClick={handleWishlist} className="bg-gray-800 text-white px-4 py-2">Wish to Read</button>
          <button onClick={handleCart} className="bg-gray-800 text-white px-4 py-2">Add to Cart</button>
          <ToastContainer />
        </div>
      </div>
      
    </div>
    <Footer></Footer>
    </>
  );
};

export default BookDetails;
