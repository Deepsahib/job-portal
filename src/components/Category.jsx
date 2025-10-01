import React from 'react';

const Category = () => {
  const categories = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Build amazing user interfaces",
      icon: "🎨",
      jobCount: "1,200+ jobs",
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Server-side and database management",
      icon: "⚙️",
      jobCount: "950+ jobs",
      color: "from-green-400 to-green-600"
    },
    {
      id: 3,
      title: "Data Science",
      description: "Analytics and machine learning",
      icon: "📊",
      jobCount: "750+ jobs",
      color: "from-purple-400 to-purple-600"
    },
   
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Browse Jobs by Category
          </h2>
          <p className="text-gray-600 text-lg">
            Find your perfect job in your favorite technology stack
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {category.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-blue-600 font-medium text-sm">
                  {category.jobCount}
                </span>
                <span className="text-gray-400 group-hover:text-blue-500 transition-colors">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
        
      
      </div>
    </section>
  );
};

export default Category;