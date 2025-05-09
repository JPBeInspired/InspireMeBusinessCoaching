// About.tsx

import { useState, useEffect } from 'react';
import { ArrowRight, Users, Brain, Star, Trophy, Globe, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import DynamicCounter from '../components/DynamicCounter';

const TEAM = [
  {
    name: "James Hunt",
    role: "Founder",
    image: "https://i.imgur.com/zWOr7yy.png",
    bio: "Serial entrepreneur with over 20 businesses under my belt, including scaling ventures to $100M+ and selling companies for 8-figure exits. I help driven individuals break free from the 9–5 and build impactful, purpose-driven businesses — the kind that create real freedom and lasting value.",
    extended: "With decades of entrepreneurial experience, James has guided thousands from uncertainty to clarity — and built multiple high-performing teams and coaching programs that actually scale."
  },
  {
    name: "James Tsmiklis",
    role: "Business Partner",
    image: "https://i.imgur.com/rMPU8yt.png",
    bio: "A multi business owner with a strong record of results and performance underpinned by strong processes, systems and a world class cutting edge approach to sales. ",
    extended: "Starting as a Club Manager at Anytime Fitness, James quickly rose through the ranks, becoming State Manager at IFC, where he led teams and drove performance across multiple sites. Today, he is a proud Business Partner at JIMs, overseeing all operational matters. His strength lies in building high-performing teams, mastering sales strategies, and streamlining business operations—making him an invaluable asset in any leadership environment"
  },
  {
    name: "Michael Godfrey",
    role: "Business Partner",
    image: "https://i.imgur.com/pL4C6Q0.png",
    bio: "Mike has over 15 years experience in Business and is a multi business owner across several industries. He brings a wealth of knowledge to the team and has a passion for digital and social media in particular",
    extended: "With years of frontline experience leading clubs and teams, Michael developed a sharp eye for what drives performance, culture, and growth. Now, as the founder of Be Inspired Digital, he combines his operational know-how with cutting-edge marketing and digital strategy to help fitness businesses thrive in the modern world. "
  },
  {
    name: "Talia Wilder",
    role: "Customer Success Manager",
    image: "https://i.imgur.com/JHKf5YC.png",
    bio: "Dedicated to ensuring clients get results, fast. From onboarding to success, she is in your corner.",
    extended: "Tatum has mentored over 1,000 business owners across industries. Her mix of empathy and strategy helps people build confidence, find focus, and grow with intention."
  },
  {
    name: "Isabella Bianchi",
    role: "Head of Finance",
    image: "https://i.imgur.com/fscxsRH.png",
    bio: "Driving smart growth through financial strategy and operational insight.",
    extended: "With a background in finance and corporate growth, Isabella ensures our systems are scalable and sustainable. Her work empowers our team to serve more people, more effectively."
  },
  {
    name: "Jake Powell",
    role: "National Business Manager",
    image: "https://i.imgur.com/bHwVB9Y.png",
    bio: "Oversees operations, strategy, and national partnerships to support business growth across 30+ regions.",
    extended: "From his early days managing sales and operations at Anytime Fitness to building recruitment pipelines and business development frameworks across the country, Jake has helped thousands of business thrive. He has built state-wide teams, led recruitment across multiple regions, and now shapes the national vision for the Be Inspired brand"
  }
];

const BELIEFS = [
  {
    title: "Freedom Through Business",
    description: "We believe the right business can unlock the freedom and lifestyle you truly want.",
    icon: Briefcase
  },
  {
    title: "You Deserve Real Support",
    description: "Success should not be a solo journey. We combine coaching, tools, and community to help you grow.",
    icon: Users
  },
  {
    title: "Clarity Beats Complexity",
    description: "Our job is to simplify the process — so you can take action with confidence.",
    icon: Brain
  },
  {
    title: "Adapt or Stay Stuck",
    description: "We evolve with the market. You will always have relevant strategies that work today — not 10 years ago.",
    icon: Star
  },
  {
    title: "Success is Holistic",
    description: "We help you build not just a business — but a better life. That means impact, income, and wellbeing.",
    icon: Trophy
  },
  {
    title: "Global Reach, Personal Impact",
    description: "With clients around the world, we are creating a ripple effect of self-made success stories.",
    icon: Globe
  }
];

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background-main pt-20">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <div className="relative h-full">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
              alt="Business coaching session"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background-main/95 via-background-main/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background-main via-background-main/50 to-transparent" />
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6">
              Redefining Success in Business — Together
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                     We help ambitious individuals launch, grow, and scale businesses that align with their purpose, passion, and potential.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-accent-primary text-text-primary hover:bg-accent-hover transition-colors group">
                Contact us
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#team-section" className="inline-flex items-center px-8 py-4 border-2 border-text-primary text-text-primary hover:bg-text-primary hover:text-background-main transition-colors">
                Meet the Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <DynamicCounter baseValue={1200} minIncrease={1} maxIncrease={3} />
            <p className="text-text-secondary mt-2">Entrepreneurs Supported</p>
          </div>
          <div>
            <DynamicCounter baseValue={50} minIncrease={0} maxIncrease={1} />
            <p className="text-text-secondary mt-2">Mini Courses Launched</p>
          </div>
          <div>
            <DynamicCounter baseValue={25} minIncrease={1} maxIncrease={2} />
            <p className="text-text-secondary mt-2">Industries Coached</p>
          </div>
          <div>
            <span className="text-3xl font-bold text-accent-primary">97%</span>
            <p className="text-text-secondary mt-2">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Mission & Beliefs */}
      <section id="mission-section" className="scroll-mt-32 py-24 bg-background-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-6">Our Mission</h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              We exist to help people turn their skills, ideas, and passions into thriving businesses — without burnout, guesswork, or going it alone.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Our values shape how we coach, build, and grow — from simplifying complexity to providing real-world support that drives progress.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BELIEFS.map((belief, index) => (
              <div key={index} className="bg-background-card p-8 border border-ui-border hover:border-accent-primary transition-colors">
                <belief.icon className={`h-12 w-12 text-accent-primary mb-6`} />
                <h3 className="text-xl font-bold text-text-primary mb-4">{belief.title}</h3>
                <p className="text-text-secondary">{belief.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team-section" className="scroll-mt-32 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-text-primary mb-16 text-center">Meet the People Behind Inspire Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden mb-6">
                  <img src={member.image} alt={member.name} className="w-full aspect-square object-cover" />
                  <div className="absolute inset-0 bg-accent-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex items-center justify-center">
                    <p className="text-text-primary text-center">{member.extended}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-1">{member.name}</h3>
                <p className="text-accent-primary mb-2">{member.role}</p>
                <p className="text-text-secondary">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* CTA */}
<section className="py-24 bg-background-section">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-4xl font-bold text-text-primary mb-6">
      Let's Build Your Business Together
    </h2>
    <p className="text-xl text-text-secondary mb-12 max-w-3xl mx-auto">
      Whether you're just starting or ready to scale, our tools, coaching, and community will help you go further — faster.
    </p>
    <div className="flex justify-center">
      <a
        href="https://calendly.com/james_hunt/phone-call"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 bg-accent-primary text-text-primary hover:bg-accent-hover transition-colors"
      >
        Book a Free Strategy Call
      </a>
    </div>
  </div>
</section>
    </div>
  );
}
