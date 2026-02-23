import React, { useState, useEffect } from 'react';
import blogData from '../../data/blogData.json';
import './Blog.css';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  
  const { blogPosts, categories, popularTags } = blogData;
  
  useEffect(() => {
    // Get featured posts
    const featured = blogPosts.filter(post => post.featured);
    setFeaturedPosts(featured);
    
    // Filter posts based on category and search
    let filtered = blogPosts;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredPosts(filtered);
  }, [selectedCategory, searchTerm, blogPosts]);
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const clearFilters = () => {
    setSelectedCategory('all');
    setSearchTerm('');
  };

  return (
    <div className="blog-container">
      {/* Hero Section */}
      <div className="blog-hero">
        <div className="hero-content">
          <h1 className="hero-title">Kabita Fashion Blog</h1>
          <p className="hero-subtitle">Saree Stories, Style Guides & Fashion Insights</p>
          <p className="hero-description">
            Discover the latest trends, traditional wisdom, and style tips from our fashion experts. 
            Everything you need to know about sarees in one place.
          </p>
          
          <div className="search-container">
            <div className="search-box">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
              />
              {searchTerm && (
                <button className="clear-search" onClick={() => setSearchTerm('')}>
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>
            <button className="search-btn">
              Search
            </button>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">{blogPosts.length}</div>
            <div className="stat-label">Articles</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{categories.length}</div>
            <div className="stat-label">Categories</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Monthly Readers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Expert Authors</div>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && searchTerm === '' && selectedCategory === 'all' && (
        <section className="featured-posts-section">
          <div className="section-header">
            <h2 className="section-title">
              <i className="fas fa-star"></i> Featured Articles
            </h2>
            <p className="section-subtitle">Must-read articles from our experts</p>
          </div>
          
          <div className="featured-posts-grid">
            {featuredPosts.map(post => (
              <div key={post.id} className="featured-post-card">
                <div className="featured-image-container">
                  <img src={post.image} alt={post.title} className="featured-image" />
                  <div className="featured-badge">
                    <i className="fas fa-star"></i> Featured
                  </div>
                </div>
                <div className="featured-content">
                  <div className="post-meta">
                    <span className="post-category">{post.category}</span>
                    <span className="post-date">{formatDate(post.date)}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  
                  <div className="post-footer">
                    <div className="author-info">
                      <img src={post.authorImage} alt={post.author} className="author-image" />
                      <div className="author-details">
                        <span className="author-name">{post.author}</span>
                        <div className="post-stats">
                          <span className="stat">
                            <i className="fas fa-eye"></i> {post.views}
                          </span>
                          <span className="stat">
                            <i className="fas fa-comment"></i> {post.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="read-more-btn">
                      Read More <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Main Content */}
      <div className="blog-content">
        {/* Sidebar */}
        <aside className="blog-sidebar">
          {/* Categories */}
          <div className="sidebar-widget categories-widget">
            <h3 className="widget-title">
              <i className="fas fa-folder"></i> Categories
            </h3>
            <div className="categories-list">
              <button
                className={`category-item ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                <span className="category-name">All Articles</span>
                <span className="category-count">{blogPosts.length}</span>
              </button>
              
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-item ${selectedCategory === category.name ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.name)}
                  style={{ '--category-color': category.color }}
                >
                  <span className="category-name">{category.name}</span>
                  <span className="category-count">{category.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Popular Tags */}
          <div className="sidebar-widget tags-widget">
            <h3 className="widget-title">
              <i className="fas fa-tags"></i> Popular Tags
            </h3>
            <div className="tags-list">
              {popularTags.map(tag => (
                <button
                  key={tag.id}
                  className="tag-item"
                  onClick={() => setSearchTerm(tag.name)}
                >
                  {tag.name} <span className="tag-count">({tag.count})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="sidebar-widget newsletter-widget">
            <h3 className="widget-title">
              <i className="fas fa-newspaper"></i> Newsletter
            </h3>
            <p className="newsletter-text">Get weekly fashion tips and updates</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="newsletter-input"
              />
              <button className="newsletter-btn">
                Subscribe <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="sidebar-widget recent-posts-widget">
            <h3 className="widget-title">
              <i className="fas fa-history"></i> Recent Posts
            </h3>
            <div className="recent-posts-list">
              {blogPosts.slice(0, 4).map(post => (
                <div key={post.id} className="recent-post-item" onClick={() => {}}>
                  <img src={post.image} alt={post.title} className="recent-post-image" />
                  <div className="recent-post-content">
                    <h4 className="recent-post-title">{post.title}</h4>
                    <div className="recent-post-meta">
                      <span className="recent-post-date">{formatDate(post.date)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Posts Area */}
        <main className="blog-main">
          {/* Filters Bar */}
          <div className="filters-bar">
            <div className="filters-left">
              <h2 className="posts-title">
                {selectedCategory === 'all' ? 'All Articles' : selectedCategory}
                <span className="posts-count"> ({filteredPosts.length})</span>
              </h2>
              {(selectedCategory !== 'all' || searchTerm) && (
                <button className="clear-filters-btn" onClick={clearFilters}>
                  Clear Filters <i className="fas fa-times"></i>
                </button>
              )}
            </div>
            
            <div className="sort-options">
              <select className="sort-select">
                <option>Sort by: Latest</option>
                <option>Most Popular</option>
                <option>Most Comments</option>
              </select>
            </div>
          </div>

          {/* Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="no-posts-found">
              <i className="fas fa-search"></i>
              <h3>No articles found</h3>
              <p>Try a different search term or category</p>
              <button className="reset-btn" onClick={clearFilters}>
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="posts-grid">
              {filteredPosts.map(post => (
                <article key={post.id} className="post-card">
                  <div className="post-image-container">
                    <img src={post.image} alt={post.title} className="post-image" />
                    <div className="post-category-badge">{post.category}</div>
                    {post.featured && (
                      <div className="post-featured-badge">
                        <i className="fas fa-star"></i>
                      </div>
                    )}
                  </div>
                  
                  <div className="post-content">
                    <div className="post-meta">
                      <div className="meta-left">
                        <span className="post-date">{formatDate(post.date)}</span>
                        <span className="post-read-time">{post.readTime}</span>
                      </div>
                      <div className="post-stats">
                        <span className="stat">
                          <i className="fas fa-eye"></i> {post.views}
                        </span>
                        <span className="stat">
                          <i className="fas fa-comment"></i> {post.comments}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                    
                    <div className="post-tags">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="post-tag">{tag}</span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="post-tag-more">+{post.tags.length - 3}</span>
                      )}
                    </div>
                    
                    <div className="post-footer">
                      <div className="author-info">
                        <img src={post.authorImage} alt={post.author} className="author-image" />
                        <span className="author-name">{post.author}</span>
                      </div>
                      <button className="read-more-btn">
                        Read More <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="pagination">
              <button className="pagination-btn prev-btn" disabled>
                <i className="fas fa-chevron-left"></i> Previous
              </button>
              <div className="pagination-numbers">
                <button className="page-number active">1</button>
                <button className="page-number">2</button>
                <button className="page-number">3</button>
                <span className="page-dots">...</span>
                <button className="page-number">5</button>
              </div>
              <button className="pagination-btn next-btn">
                Next <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          )}
        </main>
      </div>

      {/* CTA Section */}
      <section className="blog-cta">
        <div className="cta-content">
          <h2>Want to Write for Our Blog?</h2>
          <p>Are you passionate about sarees and fashion? Join our team of writers and share your knowledge with thousands of readers.</p>
          <button className="cta-btn">
            Become a Contributor <i className="fas fa-pen"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blog;