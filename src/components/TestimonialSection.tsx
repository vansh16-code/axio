'use client';

export default function TestimonialSection() {
  const testimonials = [
    {
    name: 'Riya Sharma',
    role: 'Nutritionist',
    text: 'Since joining WellnessZ Experts, managing my clients has never been easier. The branded app and marketing support helped me reach more clients, and the platform keeps everything organized in one place.',
    avatar: 'RS',
    avatarColor: 'bg-gradient-to-br from-purple-500 to-pink-500'
  },
  {
    name: 'Ankit Verma',
    role: 'Gym Owner',
    text: 'WellnessZ Experts gave my gym a professional digital presence. From scheduling sessions to collaborating with dieticians, everything runs smoothly, and my revenue has grown steadily.',
    avatar: 'AV',
    avatarColor: 'bg-gradient-to-br from-blue-500 to-cyan-500'
  },
  {
    name: 'Sneha Kapoor',
    role: 'Wellness Coach',
    text: 'The platform’s tools for meal plans, workouts, and client tracking have transformed how I manage my coaching business. My clients love the personalized experience, and I love how simple it is to use.',
    avatar: 'SK',
    avatarColor: 'bg-gradient-to-br from-green-500 to-emerald-500'
  },
  {
    name: 'Rahul Mehta',
    role: 'Kitchen Service Owner',
    text: 'With WellnessZ Experts, our healthy meals reach more clients than ever before. The collaboration tools and revenue tracking make managing our kitchen services so much easier.',
    avatar: 'RM',
    avatarColor: 'bg-gradient-to-br from-orange-500 to-red-500'
  },
  {
    name: 'Neha Singh',
    role: 'Fitness Instructor',
    text: 'Organizing Yoga and Zumba sessions has become effortless. The platform helps me schedule, manage clients, and even collaborate with other wellness professionals seamlessly.',
    avatar: 'NS',
    avatarColor: 'bg-gradient-to-br from-indigo-500 to-purple-500'
  },
  {
    name: 'Aarushi Jain',
    role: 'Nutritionist',
    text: 'WellnessZ Experts has completely transformed how I manage my clients. Assigning meal plans, tracking progress, and staying connected has never been this simple.',
    avatar: 'AJ',
    avatarColor: 'bg-gradient-to-br from-pink-500 to-rose-500'
  },
  {
    name: 'Rohit Kapoor',
    role: 'Gym Owner',
    text: 'The branded app and marketing support helped me attract new clients and run my gym more efficiently. Everything I need is now in one place.',
    avatar: 'RK',
    avatarColor: 'bg-gradient-to-br from-teal-500 to-blue-500'
  },
  {
    name: 'Tanya Mehra',
    role: 'Wellness Coach',
    text: 'From workouts to notifications, the platform keeps my coaching business organized. My clients love the personalized experience, and I love the ease of use.',
    avatar: 'TM',
    avatarColor: 'bg-gradient-to-br from-yellow-500 to-orange-500'
  },
  {
    name: 'Varun Singh',
    role: 'Fitness Instructor',
    text: 'Scheduling Yoga and Zumba classes, tracking attendance, and connecting with clients has never been easier. WellnessZ Experts has streamlined my day-to-day.',
    avatar: 'VS',
    avatarColor: 'bg-gradient-to-br from-cyan-500 to-blue-500'
  },
  {
    name: 'Pooja Sharma',
    role: 'Healthy Meal Service Owner',
    text: 'Managing meal orders, pricing, and client deliveries has become effortless. The platform really supports our growth and keeps everything transparent.',
    avatar: 'PS',
    avatarColor: 'bg-gradient-to-br from-violet-500 to-purple-500'
  },
  {
    name: 'Karan Malhotra',
    role: 'Fitness Entrepreneur',
    text: 'Partnering with gyms and other wellness professionals through WellnessZ Experts has opened up new revenue streams and helped me reach more clients than ever before.',
    avatar: 'KM',
    avatarColor: 'bg-gradient-to-br from-lime-500 to-green-600'
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
                {/* <div className="testimonial-date">{testimonial.date}</div> */}
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
                {/* <div className="testimonial-date">{testimonial.date}</div> */}
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
                {/* <div className="testimonial-date">{testimonial.date}</div> */}
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
                {/* <div className="testimonial-date">{testimonial.date}</div> */}
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
