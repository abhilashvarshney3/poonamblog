import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, Tag, Facebook, Twitter} from 'lucide-react';

// In a real application, this would be fetched from an API
const blogPost = {
  title: "Understanding Your Moon Sign: A Deep Dive",
  content: `
    <p>Your moon sign is one of the most important elements of your natal chart, revealing your emotional nature and needs. While your sun sign represents your conscious self, your moon sign reflects your emotional self and inner world.</p>
    
    <h2>What is a Moon Sign?</h2>
    <p>Your moon sign is determined by which zodiac constellation the moon was in when you were born. It moves quickly through the zodiac, changing signs every 2-3 days, which is why knowing your exact birth time is crucial for accurate moon sign calculation.</p>
    
    <h2>The Emotional Nature of the Moon</h2>
    <p>In astrology, the moon represents our emotional needs, our instinctive reactions, and our unconscious habits. It's associated with motherhood, nurturing, and our sense of security and comfort.</p>
    
    <h2>How Your Moon Sign Influences You</h2>
    <p>Your moon sign can affect:</p>
    <ul>
      <li>How you process emotions</li>
      <li>Your emotional needs in relationships</li>
      <li>Your relationship with family, especially your mother</li>
      <li>Your instinctive reactions to situations</li>
      <li>What makes you feel secure and comfortable</li>
    </ul>
  `,
  date: "March 15, 2024",
  readTime: "5 min read",
  category: "Lunar Astrology",
  image: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d",
  author: {
    name: "Poonam Sharma",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    title: "Professional Astrologer"
  }
};

export default function BlogPostPage() {
  const { slug } = useParams();

  return (
    <div className="pt-20">
      <article className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-[400px] object-cover rounded-2xl mb-8"
          />

          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <img
                src={blogPost.author.image}
                alt={blogPost.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{blogPost.author.name}</h3>
                <p className="text-sm text-gray-600">{blogPost.author.title}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {blogPost.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {blogPost.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                {blogPost.category}
              </span>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-8">{blogPost.title}</h1>

          <div 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          <div className="border-t border-gray-200 pt-8">
            <h3 className="font-semibold mb-4">Share this article</h3>
            <div className="flex gap-4">
              <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600">
                <Twitter className="w-5 h-5" />
              </button>
              
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}