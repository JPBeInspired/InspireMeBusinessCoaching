import { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Target, Users, BarChart, Star, Calendar, Mail, Facebook, Instagram, Twitter, ChevronDown, PlusCircle, Sparkles, Trophy, Brain, Video, Rocket, ArrowUpRight, ChevronRight, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import DynamicCounter from '../components/DynamicCounter';
import 'swiper/css';
import 'swiper/css/pagination';

const SERVICES = [
  {
    title: 'Launch Your First Business',
    description: 'Step-by-step guidance to turn your idea into a thriving business.',
    icon: Target,
    link: 'https://api.leadconnectorhq.com/widget/bookings/halfhourpower'
  },
  {
    title: 'Grow What You\'ve Built',
    description: 'Scale your operations and increase your market presence.',
    icon: BarChart,
    link: 'https://api.leadconnectorhq.com/widget/bookings/halfhourpower'
  },
  {
    title: 'Scale & Prepare to Exit',
    description: 'Strategic planning for sustainable growth and successful exits.',
    icon: Trophy,
    link: 'https://api.leadconnectorhq.com/widget/bookings/halfhourpower'
  },
  {
    title: 'Access All Tools & Courses',
    description: 'Complete library of resources, templates, and training.',
    icon: BookOpen,
    link: 'https://api.leadconnectorhq.com/widget/bookings/halfhourpower'
  }
];

const VALUE_PROPS = [
  {
    icon: Brain,
    title: '50+ Actionable Mini Courses',
    description: 'Master every stage of business — from idea to exit — with structured, step-by-step training.'
  },
  {
    icon: Sparkles,
    title: 'Templates That Save Time',
    description: 'Use proven resources to skip the guesswork and get results faster, without reinventing the wheel.'
  },
  {
    icon: Video,
    title: 'Live Weekly Coaching',
    description: 'Join expert-led sessions designed to unblock your path and keep you growing consistently.'
  },
  {
    icon: Users,
    title: 'Supportive Business Community',
    description: 'Network with ambitious, like-minded entrepreneurs who want to build and win together.'
  }
];

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "E-commerce Founder",
    image: "https://i.imgur.com/7xwIJzD.png",
    quote: "The structured approach and ongoing support from Inspire Me helped me launch my business in just 8 weeks. Now we're doing $50K+ monthly."
  },
  {
    name: "Michael Chen",
    role: "Tech Startup CEO",
    image: "https://i.imgur.com/vdIMUVg.png",
    quote: "Their scaling strategies and expert network were game-changers. We've tripled our revenue and expanded to three new markets."
  },
  {
    name: "Emma Roberts",
    role: "Service Business Owner",
    image: "https://i.imgur.com/dFGJkQN.png",
    quote: "The community and weekly coaching kept me accountable and helped me overcome every obstacle in my business journey."
  }
];

const FAQS = [
  {
    question: 'How long does it take to see results?',
    answer: 'Most clients start seeing tangible results within 90 days of implementing our strategies. However, this can vary based on your industry, starting point, and commitment to the process.'
  },
  {
    question: 'Do I need business experience?',
    answer: 'No prior business experience is required. Our programs are designed to meet you where you are, whether you\'re just starting out or looking to scale an existing business.'
  },
  {
    question: 'What support do I get?',
    answer: 'We offer everything from one-off strategy consults to full-scale coaching and ongoing support, to full blown management if you want! We are here to ensure your sucess! \n\nInside our Skool community, you\'ll get access to over 50 mini courses, weekly live coaching sessions, and a full library of tools, resources, and products — all designed to help you succeed.'
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-background-main">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="relative h-full">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920"
              alt="Business professionals collaborating"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background-main/95 via-background-main/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background-main via-background-main/50 to-transparent" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 leading-tight">
              Live the life you deserve
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl leading-relaxed">
              We help ambitious individuals launch, grow, and scale businesses that align with their purpose, passion, and potential.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="https://api.leadconnectorhq.com/widget/bookings/halfhourpower"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-accent-primary text-text-primary hover:bg-accent-hover transition-colors group"
              >
                Start Your Business Journey
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://api.leadconnectorhq.com/widget/bookings/halfhourpower"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-text-primary text-text-primary hover:bg-text-primary hover:text-background-main transition-colors"
              >
                Book a Free Discovery Call
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text-primary animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      {/* Success Banner */}
      <section className="py-16 bg-background-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <DynamicCounter baseValue={1200} minIncrease={1} maxIncrease={5} />
              <p className="text-text-secondary mt-2">Entrepreneurs Supported</p>
            </div>
            <div>
              <DynamicCounter baseValue={78} minIncrease={0} maxIncrease={2} />
              <p className="text-text-secondary mt-2">Businesses Launched</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-accent-primary">$112.5M+</span>
              <p className="text-text-secondary mt-2">Revenue Generated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-24 bg-background-section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background-main/50 via-transparent to-background-main/50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <Rocket className="h-6 w-6 text-accent-primary" />
              <span className="text-accent-primary font-medium uppercase tracking-wider">Toolkits</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold text-text-primary mb-4"
            >
              Everything You Need to Succeed in Business
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-text-secondary max-w-3xl mx-auto"
            >
              Inside our community, you'll unlock a powerful toolkit designed to help you launch, grow, and scale your business — faster.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {VALUE_PROPS.map((prop, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-background-card p-8 border border-ui-border hover:border-accent-primary transition-all duration-300 group"
              >
                <prop.icon className={`h-12 w-12 text-accent-primary mb-6 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-xl font-bold text-text-primary mb-3">{prop.title}</h3>
                <p className="text-text-secondary">{prop.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <a
              href="https://www.skool.com/inspireme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-accent-primary text-text-primary hover:bg-accent-hover transition-colors group"
            >
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-text-primary mb-6">Why Inspire Me?</h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                We're not just another business coaching company. Our team brings real-world experience, having built and scaled multiple successful businesses. We understand the challenges you face because we've been there — and we've developed proven systems to help you overcome them.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-accent-primary hover:text-accent-hover group"
              >
                Learn more about our mission
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative aspect-video">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1920"
                alt="Team collaboration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Our Services</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Choose the path that matches your goals and let us guide you to success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-background-card p-8 border border-ui-border hover:border-accent-primary transition-all duration-300"
              >
                <service.icon className="h-12 w-12 text-accent-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-text-primary mb-3">{service.title}</h3>
                <p className="text-text-secondary mb-6">{service.description}</p>
                <div className="flex items-center text-accent-primary group-hover:text-accent-hover transition-colors">
                  Learn more
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24 bg-background-section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background-main/50 via-transparent to-background-main/50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-6">Ready to Take the First Step?</h2>
            <p className="text-xl text-text-secondary mb-8">
              Book a free 30-minute strategy call with our team. We'll discuss your goals and create a plan to achieve them.
            </p>
            <a
              href="https://api.leadconnectorhq.com/widget/bookings/halfhourpower"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-accent-primary text-text-primary hover:bg-accent-hover transition-colors group"
            >
              Schedule Your Call
              <Calendar className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Success Stories</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Hear from entrepreneurs who've transformed their businesses with our help.
            </p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-background-card p-8 border border-ui-border h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-text-primary">{testimonial.name}</h3>
                      <p className="text-text-secondary text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-text-secondary italic">{testimonial.quote}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-background-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Common Questions</h2>
            <p className="text-xl text-text-secondary">
              Get quick answers to frequently asked questions.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="bg-background-card border border-ui-border"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-medium text-text-primary">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="h-5 w-5 text-accent-primary" />
                  ) : (
                    <Plus className="h-5 w-5 text-text-secondary" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-text-secondary">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background-card border border-ui-border p-12 text-center">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Stay Updated</h2>
            <p className="text-xl text-text-secondary mb-8">
              Join 2,000+ entrepreneurs getting weekly business insights, tools and offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-background-main border border-ui-border text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-primary transition-colors"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-accent-primary text-text-primary hover:bg-accent-hover transition-colors whitespace-nowrap"
              >
                Get Free Resources
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-t border-ui-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <a
              href="https://www.facebook.com/inspiremebusinesscoaching"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-primary transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/inspiremebusinesscoaching"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-primary transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.x.com/inspiremebzness"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-primary transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <div className="h-8 w-px bg-ui-border mx-4" />
            <a
              href="https://www.skool.com/inspireme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-text-primary bg-accent-primary px-6 py-3 hover:bg-accent-hover transition-colors"
            >
              Join Our Community
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}