import React, { useState } from 'react';
import { BlogCard } from '../components/blog/BlogCard';

const categories = [
  "All",
  "Lunar Astrology",
  "Planetary Movements",
  "Birthday Astrology",
  "Relationship Astrology",
  "Spiritual Growth"
];

const blogPosts = [
  {
    title: "Understanding Your Moon Sign: A Deep Dive",
    excerpt: "Discover how your moon sign influences your emotional landscape and inner world. Learn about the moon's role in your natal chart and daily life.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Lunar Astrology",
    image: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d",
    slug: "understanding-moon-sign"
  },
  {
    title: "Mercury Retrograde: Navigating Communication Challenges",
    excerpt: "Learn practical tips for handling Mercury retrograde periods with grace. Understanding the astrological significance of this planetary phenomenon.",
    date: "March 12, 2024",
    readTime: "4 min read",
    category: "Planetary Movements",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a",
    slug: "mercury-retrograde-guide"
  },
  {
    title: "The Power of Solar Returns in Birthday Astrology",
    excerpt: "Explore how your birthday chart can reveal themes for your upcoming year. Understanding the significance of solar returns in astrology.",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Birthday Astrology",
    image: "https://images.unsplash.com/photo-1509647648544-a3e09b751ad6",
    slug: "solar-returns-guide"
  },
  {
    title: "Venus Retrograde: Love and Relationships",
    excerpt: "Understanding how Venus retrograde affects relationships and self-worth. Navigate this period with awareness and grace.",
    date: "March 8, 2024",
    readTime: "5 min read",
    category: "Relationship Astrology",
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4",
    slug: "venus-retrograde-love"
  },
  {
    title: "Full Moon Rituals for Manifestation",
    excerpt: "Harness the power of the full moon with these ancient and modern ritual practices. Align your intentions with lunar energy.",
    date: "March 5, 2024",
    readTime: "4 min read",
    category: "Spiritual Growth",
    image: "https://images.unsplash.com/photo-1513628253939-010e64ac66cd",
    slug: "full-moon-rituals"
  },
  {
    title: "Saturn Return: Navigating Life's Major Transition",
    excerpt: "Understanding the significance of your Saturn Return and how to make the most of this transformative period.",
    date: "March 3, 2024",
    readTime: "7 min read",
    category: "Planetary Movements",
    image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0",
    slug: "saturn-return-guide"
  }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Astrological Insights Blog</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of articles on astrology, cosmic events, and spiritual growth
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}