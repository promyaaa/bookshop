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
        <div className="container mx-auto p-4 md:p-8 flex flex-col md:flex-row items-center md:items-start">
            <img src={book.image} alt={book.bookName} className="w-full md:w-1/3 object-cover mb-4 md:mb-0" />
            <div className="md:ml-8 w-full md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold">{book.bookName}</h2>
                <p className="italic mt-2">By {book.author}</p>
                <p className="mt-2"><span className="font-bold">Category:</span> {book.category}</p>
                <p className="mt-2"><span className="font-bold">Review:</span> {book.review}</p>
                <p className="mt-2"><span className="font-bold">Pages:</span> {book.totalPages}</p>
                <p className="mt-2"><span className="font-bold">Publisher:</span> {book.publisher} ({book.yearOfPublishing})</p>
                <p className="mt-2"><span className="font-bold">Ratings:</span> {book.rating}</p>

                <div className="mt-4">
                    {book.tags.map((tag, index) => (
                        <div
                        key={index}
                        className="inline-block border border-solid text-xs font-semibold px-2 py-1 mr-2 mt-2 bg-gray-100"
                        >
                        {tag}
                        </div>
                    ))}
                </div>

                <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-[100px]">
                    <button onClick={handleWishlist} className="bg-gray-800 text-white px-4 py-2">
                        Wish to Read
                    </button>
                    <button onClick={handleCart} className="bg-gray-800 text-white px-4 py-2">
                        Add to Cart
                    </button>
                    <ToastContainer />
                </div>
            </div>
        </div>
        <Footer></Footer>
    </>
  );
};

export default BookDetails;
