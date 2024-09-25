const Blog = () => {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Our Blog</h1>
        
        {/* Blog Post 1 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Why Reading is Essential for Growth</h2>
          <p className="text-gray-600 mb-2">Published on: September 20, 2024</p>
          <p>
            Reading is more than just a hobby – it's a tool for expanding knowledge, improving empathy, 
            and fostering personal development. In today's fast-paced world, reading can help us slow 
            down and reflect on what truly matters...
          </p>
          <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </div>
  
        {/* Blog Post 2 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Top 5 Books for Self-Improvement</h2>
          <p className="text-gray-600 mb-2">Published on: September 10, 2024</p>
          <p>
            Looking to improve yourself? Start with these five life-changing books that offer 
            practical advice, from habit formation to mindset shifts. Whether you’re aiming 
            for personal growth or professional success...
          </p>
          <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </div>
  
        {/* Blog Post 3 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">How to Build a Consistent Reading Habit</h2>
          <p className="text-gray-600 mb-2">Published on: August 30, 2024</p>
          <p>
            Building a consistent reading habit can be challenging in our busy lives. 
            However, with the right strategies, you can develop a love for reading that 
            will stay with you for life. Start small, stay consistent, and choose books that excite you...
          </p>
          <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </div>
      </div>
    );
  };
  
  export default Blog;
  