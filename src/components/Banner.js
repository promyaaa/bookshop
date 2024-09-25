const Banner = () => {
    return (
    //     <div
    //     className="flex justify-between items-center p-8 bg-cover bg-center"
    //     style={{ backgroundImage: "url('assets/block-hero.jpg')" }}
    //   >
    //     <div>
    //       <h2 className="text-4xl font-bold">Unlock a World of Stories</h2>
    //       <p>Find Your Next Favorite Book at Bookshop</p>
    //       <button className="bg-gray-800 text-white px-4 py-2 mt-4">Buy Book</button>
    //     </div>
    //     <img src="assets/bookbanner.jpg" alt="Books" />
    //   </div>

    <div
        className="flex flex-col md:flex-row justify-between items-center p-8 bg-cover bg-center"
        style={{ backgroundImage: "url('assets/block-hero.jpg')" }}
    >
        <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl md:text-4xl font-bold">Unlock a World of Stories</h2>
            <p className="mt-2">Find Your Next Favorite Book at Bookshop</p>
            <button className="bg-gray-800 text-white px-4 py-2 mt-4">Buy Book</button>
        </div>
        <img
            src="assets/bookbanner.jpg"
            alt="Books"
            className="md:object-cover mt-4 md:mt-0"
            />
    </div>

    );
  };
  
  export default Banner;
  