import Banner from '../components/Banner';
import Footer from './Footer';

import books from '../data.json';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Banner />
      <h2 className="text-center text-3xl font-bold my-8">Our Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mb-[100px]">
        {books.map(book => (
          <div key={book.bookId} className="bg-white p-4 border border-solid">
            <img src={book.image} alt={book.bookName} className="w-full h-60 object-cover" />
            <h3 className="font-bold text-xl mt-4">{book.bookName}</h3>
            <p>By {book.author}</p>
            <p>Category: {book.category}</p>
            <p>Rating: {book.rating}</p>

            {
                book.tags.map((tag, index) =>
                    <div key={index} className="inline-block border border-solid text-xs font-semibold px-2 py-1 mr-2 mt-2">
                        {tag}
                    </div>
                )
            }
            <Link to={`/book/${book.bookId}`} className="bg-gray-800 text-white px-4 py-2 mt-4 block text-center">Book Details</Link>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
