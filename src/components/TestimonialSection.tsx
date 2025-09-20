'use client';

export default function TestimonialSection() {
  const testimonials = [
    {
      name: 'Vipin Khore',
      text: 'There is no option for 10 Star otherwise I give 10 Stars. thanks you so much axio for this wonderful application.',
      date: '16 March, 2025',
      avatar: 'VK',
      avatarColor: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
      name: 'Pratham Desai',
      text: 'Exceptional app, easy to use and easy to track expenses from various sources on its own without having to do much. Showes total expenses in an easy to understand infographic.',
      date: '24 March, 2025',
      avatar: 'PD',
      avatarColor: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      name: 'Lui Shirosagi',
      text: 'I absolutely love this app, absolute bonkers, you have it all whatever you need to manage your money, love the feature of getting the message after spend so I can categorise it instantly and not having to remember where and why I spent it',
      date: '4 March, 2025',
      avatar: 'LS',
      avatarColor: 'bg-gradient-to-br from-green-500 to-emerald-500'
    },
    {
      name: 'Bhavyashree JC',
      text: 'This app is amazing!! it automatically tracks everything unless you want to name anything specific. I am able to understand my spending and track accordingly. life saver for sure!!',
      date: '1 April, 2025',
      avatar: 'BJ',
      avatarColor: 'bg-gradient-to-br from-orange-500 to-red-500'
    },
    {
      name: 'Sachin Aykara',
      text: 'Great app for managing personal finances. The interface is clean and user-friendly. Highly recommended!',
      date: '8 March, 2025',
      avatar: 'SA',
      avatarColor: 'bg-gradient-to-br from-indigo-500 to-purple-500'
    },
    {
      name: 'Suvarna',
      text: 'I must have to easily track my expenses. First step in financial literacy. I downloaded in 2016, and still using in 2025. This app has been useful and useful throughout',
      date: '9 March, 2025',
      avatar: 'S',
      avatarColor: 'bg-gradient-to-br from-pink-500 to-rose-500'
    },
    {
      name: 'Anurag Sen',
      text: "It's a good app. It tracks the call expenses correctly. It also provides many other features and products",
      date: '15 March, 2025',
      avatar: 'AS',
      avatarColor: 'bg-gradient-to-br from-teal-500 to-blue-500'
    },
    {
      name: 'Rajesh Kumar',
      text: 'Excellent financial management tool. Makes budgeting so much easier and helps me stay on track with my financial goals.',
      date: '12 March, 2025',
      avatar: 'RK',
      avatarColor: 'bg-gradient-to-br from-yellow-500 to-orange-500'
    },
    {
      name: 'Priya Sharma',
      text: 'Love the automatic expense tracking feature. It saves me so much time and helps me understand my spending patterns better.',
      date: '18 March, 2025',
      avatar: 'PS',
      avatarColor: 'bg-gradient-to-br from-cyan-500 to-blue-500'
    },
    {
      name: 'Amit Patel',
      text: 'The best expense tracking app I have ever used. Simple, effective, and reliable. Highly recommend to everyone!',
      date: '22 March, 2025',
      avatar: 'AP',
      avatarColor: 'bg-gradient-to-br from-violet-500 to-purple-500'
    }
  ];

  return (
    <div className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h1 className="testimonials-title">
            Trusted by millions, <span className="text-green-500">loved by all</span>
          </h1>
        </div>
        
        {/* First row - scrolls right */}
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
                  </div>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-date">{testimonial.date}</div>
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
                  </div>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-date">{testimonial.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Second row - scrolls left */}
        <div className="testimonial-marquee">
          <div className="testimonial-marquee-wrapper scroll-left">
            {testimonials.slice().reverse().map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className={`testimonial-avatar ${testimonial.avatarColor}`}>
                    {testimonial.avatar}
                  </div>
                  <div className="testimonial-user-info">
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                  </div>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-date">{testimonial.date}</div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {testimonials.slice().reverse().map((testimonial, index) => (
              <div key={`duplicate-2-${index}`} className="testimonial-card">
                <div className="testimonial-header">
                  <div className={`testimonial-avatar ${testimonial.avatarColor}`}>
                    {testimonial.avatar}
                  </div>
                  <div className="testimonial-user-info">
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                  </div>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-date">{testimonial.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          padding: 5rem 0;
          background-color: #262626;
          overflow: hidden;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          position: relative;
        }

        .testimonials-container {
          width: 100% !important;
          max-width: none !important;
          margin: 0 !important;
          padding: 0 !important;
          position: relative;
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 4rem;
          padding: 0 2rem;
        }

        .testimonials-title {
          font-size: 3rem;
          font-weight: bold;
          color: white;
          line-height: 1.1;
        }

        @media (max-width: 768px) {
          .testimonials-title {
            font-size: 2rem;
          }
        }

        .testimonial-marquee {
          margin-bottom: 2rem;
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
        }

        .testimonial-marquee-wrapper {
          display: inline-flex;
          gap: 1.5rem;
          animation-duration: 60s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        .scroll-right {
          animation-name: scrollRight;
        }

        .scroll-left {
          animation-name: scrollLeft;
        }

        @keyframes scrollRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollLeft {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .testimonial-card {
          flex-shrink: 0;
          width: 320px;
          background-color: #404040;
          border-radius: 1.5rem;
          padding: 1.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          white-space: normal;
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .testimonial-avatar {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 1.125rem;
          margin-right: 1rem;
        }

        .testimonial-name {
          color: white;
          font-weight: 600;
          font-size: 1.125rem;
          margin: 0;
        }

        .testimonial-text {
          color: #e5e5e5;
          font-size: 0.875rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .testimonial-date {
          color: #b3b3b3;
          font-size: 0.75rem;
        }
      `}</style>
    </div>
  );
}
