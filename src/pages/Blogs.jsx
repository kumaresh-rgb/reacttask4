import React from 'react';

const BlogSection = () => {
  const blogData = [
    {
      imageUrl:
        'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      title: 'How to use sticky note for problem solving',
      date: 'On: 20 October 2019',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      title: 'How to use sticky note for problem solving',
      date: 'On: 20 October 2019',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      title: 'Morning routine to boost your mood',
      date: 'On: 25 November 2020',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80',
      title: 'All the features you want to know',
      date: 'On: 30 September 2020',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80',
      title: 'Minimal workspace for your inspirations',
      date: 'On: 13 October 2019',
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      title: 'What do you want to know about Blockchain',
      date: 'On: 20 October 2019',
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 px-8">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
          Recent Blogs
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {blogData.map((blog, index) => (
            <div key={index} className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64 scale-110 transition-all duration-400 hover:scale-100"
                src={blog.imageUrl}
                alt=""
              />

              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a
                  href="#"
                  className="text-xl font-semibold text-gray-800 hover:underline dark:text-white"
                >
                  {blog.title}
                </a>

                <span className="text-sm text-gray-500 dark:text-gray-300">
                  {blog.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
