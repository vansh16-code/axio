'use client';
import {  FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

export default function TestimonialSection() {
  const [counters, setCounters] = useState({
    clients: 0,
    coaches: 0,
    rating: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const frameRate = 60;
    const totalFrames = duration / (1000 / frameRate);

    let currentFrame = 0;
    const timer = setInterval(() => {
      const progress = currentFrame / totalFrames;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounters({
        clients: Math.floor(easeOutQuart * 4000),
        coaches: Math.floor(easeOutQuart * 3000),
        rating: Math.min(easeOutQuart * 4.9, 4.9)
      });

      currentFrame++;
      if (currentFrame > totalFrames) {
        clearInterval(timer);
        setCounters({ clients: 4000, coaches: 3000, rating: 4.9 });
      }
    }, 1000 / frameRate);
  };

  const testimonials = [
    {
      name: 'Riya Sharma',
      role: 'Nutritionist',
      text: 'Since joining WellnessZ Experts, managing my clients has never been easier. The branded app and marketing support helped me reach more clients, and the platform keeps everything organized in one place.',
      avatar: 'RS',
      avatarColor: 'bg-gradient-to-br from-purple-500 to-pink-500',
      activeClients: '150+',
      revenue: '$12K+'
    },
    {
      name: 'Ankit Verma',
      role: 'Gym Owner',
      text: 'WellnessZ Experts gave my gym a professional digital presence. From scheduling sessions to collaborating with dieticians, everything runs smoothly, and my revenue has grown steadily.',
      avatar: 'AV',
      avatarColor: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      activeClients: '300+',
      revenue: '$25K+'
    },
    {
      name: 'Sneha Kapoor',
      role: 'Wellness Coach',
      text: 'The platform\'s tools for meal plans, workouts, and client tracking have transformed how I manage my coaching business. My clients love the personalized experience, and I love how simple it is to use.',
      avatar: 'SK',
      avatarColor: 'bg-gradient-to-br from-green-500 to-emerald-500',
      activeClients: '200+',
      revenue: '$18K+'
    },
    {
      name: 'Rahul Mehta',
      role: 'Kitchen Service Owner',
      text: 'With WellnessZ Experts, our healthy meals reach more clients than ever before. The collaboration tools and revenue tracking make managing our kitchen services so much easier.',
      avatar: 'RM',
      avatarColor: 'bg-gradient-to-br from-orange-500 to-red-500',
      activeClients: '400+',
      revenue: '$30K+'
    },
    {
      name: 'Neha Singh',
      role: 'Fitness Instructor',
      text: 'Organizing Yoga and Zumba sessions has become effortless. The platform helps me schedule, manage clients, and even collaborate with other wellness professionals seamlessly.',
      avatar: 'NS',
      avatarColor: 'bg-gradient-to-br from-indigo-500 to-purple-500',
      activeClients: '120+',
      revenue: '$8K+'
    },
    {
      name: 'Aarushi Jain',
      role: 'Nutritionist',
      text: 'WellnessZ Experts has completely transformed how I manage my clients. Assigning meal plans, tracking progress, and staying connected has never been this simple.',
      avatar: 'AJ',
      avatarColor: 'bg-gradient-to-br from-pink-500 to-rose-500',
      activeClients: '180+',
      revenue: '$15K+'
    }
  ];

  return (
    <div className="testimonials-wrapper" ref={sectionRef}>
      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-container">
          <div className="stats-left">
            <div className="success-badge">
              Success Stories
            </div>
            <h2 className="stats-title">
              Real Experts,<br />
              Real Results
            </h2>
            <p className="stats-description">
              Join thousands of wellness professionals who&apos;ve transformed their practice with WellnessZ
            </p>
          </div>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{counters.clients.toLocaleString()}+</div>
              <div className="stat-label">
                <span className="stat-label-main">Clients</span>
                <span className="stat-label-sub">Supported</span>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">{counters.coaches.toLocaleString()}+</div>
              <div className="stat-label">
                <span className="stat-label-main">Coaches Trust</span>
                <span className="stat-label-sub">WellnessZ</span>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">{counters.rating.toFixed(1)}/5</div>
              <div className="stat-label">
                <span className="stat-label-main">Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="section-divider"></div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <div className="testimonials-header">
          <div className="testimonials-left">
            <div className="testimonials-badge">
              Testimonials
            </div>
            <h2 className="testimonials-title">
              Real Stories from Our<br />
              Members
            </h2>
          </div>
          
          <div className="testimonials-controls">
            <button className="control-btn">
              <FaChevronLeft />
            </button>
            <button className="control-btn">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Marquee Testimonials */}
        <div className="testimonial-marquee">
          <div className="testimonial-marquee-wrapper scroll-right">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className={`testimonial-avatar ${testimonial.avatarColor}`}>
                    {testimonial.avatar}
                  </div>
                  <div className="testimonial-user-info">
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                  <div className="testimonial-stats">
                    <div className="stat-badge">
                      <span className="stat-value">{testimonial.activeClients}</span>
                      <span className="stat-label">Active</span>
                    </div>
                    <div className="revenue-badge">
                      <span>Revenue</span>
                    </div>
                  </div>
                </div>
                
                <p className="testimonial-text">{testimonial.text}</p>
                
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div key={`duplicate-1-${index}`} className="testimonial-card">
                <div className="testimonial-header">
                  <div className={`testimonial-avatar ${testimonial.avatarColor}`}>
                    {testimonial.avatar}
                  </div>
                  <div className="testimonial-user-info">
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                  <div className="testimonial-stats">
                    <div className="stat-badge">
                      <span className="stat-value">{testimonial.activeClients}</span>
                      <span className="stat-label">Active</span>
                    </div>
                    <div className="revenue-badge">
                      <span>Revenue</span>
                    </div>
                  </div>
                </div>
                
                <p className="testimonial-text">{testimonial.text}</p>
                
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-wrapper {
          background-color: #f8fffe;
          padding: 0;
        }

        /* Stats Section */
        .stats-section {
          padding: 6rem 2rem 4rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .stats-container {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          align-items: center;
        }

        .success-badge {
          display: inline-block;
          background-color: #10b981;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }

        .stats-title {
          font-size: 3.5rem;
          font-weight: 700;
          color: #1f2937;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .stats-description {
          color: #6b7280;
          font-size: 1.125rem;
          line-height: 1.6;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        .stat-label-main {
          display: block;
          color: #1f2937;
          font-weight: 600;
          font-size: 1rem;
        }

        .stat-label-sub {
          display: block;
          color: #6b7280;
          font-size: 0.875rem;
        }

        /* Divider Line */
        .section-divider {
          height: 1px;
          background-color: #e5e7eb;
          margin: 0 2rem;
        }

        /* Testimonials Section */
        .testimonials-section {
          background-color: #ffffff;
          padding: 4rem 2rem 6rem;
        }

        .testimonials-header {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 3rem;
        }

        .testimonials-left {
          flex: 1;
        }

        .testimonials-badge {
          display: inline-block;
          background-color: #10b981;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .testimonials-title {
          font-size: 2.75rem;
          font-weight: 700;
          color: #1f2937;
          line-height: 1.2;
          max-width: none;
        }

        .testimonials-controls {
          display: flex;
          gap: 0.75rem;
        }

        .control-btn {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background-color: #e5e7eb;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .control-btn:hover {
          background-color: #10b981;
          color: white;
        }

        /* Marquee Animation */
        .testimonial-marquee {
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
        }

        .testimonial-marquee-wrapper {
          display: inline-flex;
          gap: 2rem;
          animation: scrollRight 45s linear infinite;
        }

        @keyframes scrollRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .testimonial-card {
          flex-shrink: 0;
          width: 500px;
          min-height: 200px;
          background-color: white;
          border-radius: 1.5rem;
          padding: 2rem;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
          white-space: normal;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          gap: 1rem;
        }

        .testimonial-avatar {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background-color: #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          font-weight: 600;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .testimonial-user-info {
          flex-grow: 1;
        }

        .testimonial-name {
          color: #1f2937;
          font-weight: 700;
          font-size: 1rem;
          margin: 0;
        }

        .testimonial-role {
          color: #6b7280;
          font-size: 0.875rem;
          margin: 0;
          margin-top: 0.25rem;
        }

        .testimonial-stats {
          position: absolute;
          top: 2rem;
          right: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-end;
        }

        .stat-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 4rem;
          height: 2.5rem;
          background-color: #f0f9f4;
          color: #047857;
          border-radius: 0.75rem;
          font-size: 0.75rem;
          font-weight: 700;
          flex-direction: column;
          line-height: 1.2;
          border: 1px solid #d1fae5;
        }

        .stat-value {
          font-size: 0.875rem;
        }

        .stat-label {
          font-size: 0.625rem;
          opacity: 0.8;
        }

        .revenue-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 4rem;
          height: 1.5rem;
          background-color: #fef3c7;
          color: #92400e;
          border-radius: 0.5rem;
          font-size: 0.625rem;
          font-weight: 600;
          border: 1px solid #fde68a;
        }

        .testimonial-text {
          color: #6b7280;
          font-size: 0.875rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          margin-right: 6rem;
          flex-grow: 1;
        }

        .testimonial-rating {
          display: flex;
          gap: 0.25rem;
        }

        .star-icon {
          color: #fbbf24;
          font-size: 1rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .stats-container {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          
          .stats-grid {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .stats-title {
            font-size: 2.5rem;
          }
          
          .testimonials-title {
            font-size: 2rem;
          }
          
          .testimonials-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .testimonial-card {
            width: 420px;
            padding: 1.5rem;
          }
          
          .testimonial-text {
            margin-right: 5rem;
          }
          
          .testimonial-stats {
            top: 1.5rem;
            right: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}