const FAQ = () => {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">1. What is the Book Shop?</h2>
          <p>
            The Book Shop is an online platform where you can find a wide variety of books across different genres. 
            Browse, read reviews, and buy your next favorite book!
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">2. How do I purchase books?</h2>
          <p>
            You can browse the available books on our homepage. When you find a book you like, click "Buy Book" to proceed.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">3. Can I add books to a wishlist?</h2>
          <p>
            Yes! Each book has a "Wish to Read" button on its details page, which allows you to add it to your wishlist.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">4. How do I view my cart?</h2>
          <p>
            Currently, the cart functionality is under development. You will soon be able to view and manage your cart from the navigation bar.
          </p>
        </div>
      </div>
    );
  };
  
  export default FAQ;
  