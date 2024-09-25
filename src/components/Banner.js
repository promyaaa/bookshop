const Banner = () => {
    return (
        <div
        className="flex justify-between items-center p-8 bg-cover bg-center"
        style={{ backgroundImage: "url('assets/block-hero.jpg')" }}
      >
        <div>
          <h2 className="text-4xl font-bold">Unlock a World of Stories</h2>
          <p>Find Your Next Favorite Book at Bookshop</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4">Buy Book</button>
        </div>
        <img src="assets/bookbanner.jpg" alt="Books" />
      </div>
    );
  };
  
  export default Banner;
  