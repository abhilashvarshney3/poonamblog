import React from 'react';
import { BlogCard } from './BlogCard';

const blogPosts = [
  {
    title: "Understanding Your Moon Sign: A Deep Dive",
    excerpt: "Discover how your moon sign influences your emotional landscape and inner world...",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Lunar Astrology",
    image: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d",
    slug: "understanding-moon-sign"
  },
  {
    title: "Mercury Retrograde: Navigating Communication Challenges",
    excerpt: "Learn practical tips for handling Mercury retrograde periods with grace...",
    date: "March 12, 2024",
    readTime: "4 min read",
    category: "Planetary Movements",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a",
    slug: "mercury-retrograde-guide"
  },
  {
    title: "The Power of Solar Returns in Birthday Astrology",
    excerpt: "Explore how your birthday chart can reveal themes for your upcoming year...",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Birthday Astrology",
    image: "https://images.unsplash.com/photo-1509647648544-a3e09b751ad6",
    slug: "solar-returns-guide"
  }
];

export function BlogList() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Astrological Insights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest articles on astrology, cosmic events, and spiritual growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}