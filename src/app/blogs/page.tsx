import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Digital Payments: Trends to Watch in 2024',
      excerpt: 'Explore the latest innovations in fintech and how they\'re reshaping the payment landscape. From blockchain integration to AI-powered fraud detection.',
      image: '/blog1.jpg',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Technology'
    },
    {
      id: 2,
      title: 'Building Financial Literacy in the Digital Age',
      excerpt: 'Learn how modern tools and apps are making financial education more accessible than ever. Discover the key skills needed for financial success.',
      image: '/blog2.jpg',
      author: 'Michael Chen',
      date: 'March 12, 2024',
      readTime: '7 min read',
      category: 'Education'
    },
    {
      id: 3,
      title: 'Security First: How We Protect Your Financial Data',
      excerpt: 'An inside look at the advanced security measures that keep your money and data safe. Understanding encryption, multi-factor authentication, and more.',
      image: '/6823281d2ec5b72053879625_Group 1321316844 (2)-p-2000.webp',
      author: 'Alex Rodriguez',
      date: 'March 10, 2024',
      readTime: '6 min read',
      category: 'Security'
    },
    {
      id: 4,
      title: 'The Rise of Buy Now, Pay Later: A Complete Guide',
      excerpt: 'Understanding the BNPL revolution and how it\'s changing consumer spending habits. Learn about benefits, risks, and best practices.',
      image: '/6800a4562b77b2171b5589a8_Pay later 1.webp',
      author: 'Emma Wilson',
      date: 'March 8, 2024',
      readTime: '8 min read',
      category: 'Finance'
    },
    {
      id: 5,
      title: 'Mobile Banking: The New Standard for Financial Services',
      excerpt: 'How mobile-first banking is transforming the industry and what it means for consumers. Exploring features that matter most.',
      image: '/6819961a8e487275b2cc7200_iPhone-16-Pro.webp',
      author: 'David Kim',
      date: 'March 5, 2024',
      readTime: '6 min read',
      category: 'Mobile'
    },
    {
      id: 6,
      title: 'Personal Finance Management: Tools for Success',
      excerpt: 'Discover the essential tools and strategies for effective personal finance management. From budgeting apps to investment platforms.',
      image: '/6800a3e7931d69244de4f0a9_PFM 1.webp',
      author: 'Lisa Thompson',
      date: 'March 3, 2024',
      readTime: '9 min read',
      category: 'Personal Finance'
    }
  ];

  const categories = ['All', 'Technology', 'Education', 'Security', 'Finance', 'Mobile', 'Personal Finance'];

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-axio-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and tips from the world of fintech and financial services.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-axio-green text-black'
                    : 'bg-axio-gray text-white hover:bg-axio-dark'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-axio-dark rounded-2xl overflow-hidden border border-axio-gray">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 text-white">
                  <div className="inline-block bg-axio-green/20 text-axio-green px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Featured
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-300 mb-6 text-lg">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center text-gray-400 mb-6">
                    <span>{blogPosts[0].author}</span>
                    <span className="mx-2">•</span>
                    <span>{blogPosts[0].date}</span>
                    <span className="mx-2">•</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Link
                    href={`/blogs/${blogPosts[0].id}`}
                    className="bg-axio-green text-black hover:bg-axio-light-green px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center"
                  >
                    Read Article
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-axio-dark rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-axio-green/10 transition-shadow border border-axio-gray"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-axio-green text-black px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blogs/${post.id}`}
                    className="text-axio-green hover:text-axio-light-green font-semibold inline-flex items-center"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter and never miss our latest insights and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}