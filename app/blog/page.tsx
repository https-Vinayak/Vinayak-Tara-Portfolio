'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Link from 'next/link';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'react', name: 'React', count: 4 },
    { id: 'javascript', name: 'JavaScript', count: 3 },
    { id: 'nextjs', name: 'Next.js', count: 2 },
    { id: 'design', name: 'Design', count: 2 },
    { id: 'career', name: 'Career', count: 1 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications with Modern Architecture',
      excerpt: 'Learn how to structure large React applications using modern patterns like feature-based organization, custom hooks, and effective state management.',
      content: 'This is the full content of the blog post about React architecture...',
      author: 'Vinayak Tara',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'react',
      tags: ['React', 'Architecture', 'Best Practices'],
      image: '/blog/react-architecture.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'The Complete Guide to Next.js 14 App Router',
      excerpt: 'Explore the new App Router in Next.js 14, including layouts, loading states, error handling, and server components.',
      content: 'This is the full content about Next.js 14 App Router...',
      author: 'Vinayak Tara',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'nextjs',
      tags: ['Next.js', 'App Router', 'Server Components'],
      image: '/blog/nextjs-app-router.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Modern CSS Techniques for Better Web Design',
      excerpt: 'Discover advanced CSS features like Grid, Flexbox, custom properties, and modern layout techniques for responsive design.',
      content: 'This is the full content about modern CSS techniques...',
      author: 'Vinayak Tara',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'design',
      tags: ['CSS', 'Design', 'Responsive'],
      image: '/blog/modern-css.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'JavaScript Performance Optimization Tips',
      excerpt: 'Learn practical techniques to improve JavaScript performance, including code splitting, lazy loading, and efficient algorithms.',
      content: 'This is the full content about JavaScript performance...',
      author: 'Vinayak Tara',
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'javascript',
      tags: ['JavaScript', 'Performance', 'Optimization'],
      image: '/blog/js-performance.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'My Journey from Junior to Senior Developer',
      excerpt: 'Sharing my personal experience and lessons learned during my career progression in web development.',
      content: 'This is the full content about my career journey...',
      author: 'Vinayak Tara',
      date: '2023-12-20',
      readTime: '5 min read',
      category: 'career',
      tags: ['Career', 'Personal', 'Growth'],
      image: '/blog/career-journey.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'State Management in React: Context vs Redux vs Zustand',
      excerpt: 'Compare different state management solutions in React and learn when to use each approach in your projects.',
      content: 'This is the full content about React state management...',
      author: 'Vinayak Tara',
      date: '2023-12-15',
      readTime: '9 min read',
      category: 'react',
      tags: ['React', 'State Management', 'Redux', 'Zustand'],
      image: '/blog/state-management.jpg',
      featured: false
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0D1117] text-white relative overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="fixed inset-0 mesh-gradient pointer-events-none" />
        <div className="fixed inset-0 grid-background opacity-20" />

        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold mb-6"
            >
              My <span className="text-gradient-animated">Blog</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
            >
              Insights, tutorials, and thoughts on web development, design, and technology. 
              I share what I learn to help fellow developers grow and solve problems.
            </motion.p>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="relative py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Featured Articles
            </motion.h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card-modern rounded-xl overflow-hidden group"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">
                      {post.title.split(' ').map(word => word[0]).join('').slice(0, 3)}
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <span>{formatDate(post.date)}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span className="capitalize">{post.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Categories & Posts */}
        <section className="relative py-16 px-4 bg-[#161B22]/50">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-2 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-[#21262D] text-gray-300 hover:bg-[#2D333B] border border-gray-700'
                  }`}
                >
                  {category.name}
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    selectedCategory === category.id ? 'bg-white/20' : 'bg-gray-600'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </motion.div>

            {/* Blog Posts Grid */}
            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="wait">
                {filteredPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="card-modern rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
                        {post.title.split(' ').map(word => word[0]).join('').slice(0, 3)}
                      </div>
                      {post.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold rounded-full">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                        <span>{formatDate(post.date)}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
                      >
                        Read Article
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="relative py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-modern p-8 rounded-xl text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-8">
                Get notified when I publish new articles about web development, design, and technology.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-[#1A1F2B] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-glow"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Tags Cloud */}
        <section className="relative py-16 px-4 bg-[#161B22]/50">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-12"
            >
              Popular Topics
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {['React', 'JavaScript', 'Next.js', 'TypeScript', 'CSS', 'Node.js', 'Design', 'Performance', 'Architecture', 'Best Practices', 'Career', 'Tutorials'].map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-200 cursor-pointer"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
