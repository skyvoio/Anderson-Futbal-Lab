import { useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Zap, Brain, Activity, Apple, Wind } from 'lucide-react';

export default function Programs() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.scroll-reveal');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      icon: Trophy,
      title: 'Junior Elite Program',
      tagline: 'Our Flagship Development Program',
      description: 'The Junior Elite Program is designed for serious young athletes who are committed to taking their game to the highest level. This comprehensive program combines technical mastery, tactical awareness, physical conditioning, and mental strength.',
      ages: '8-16 years',
      schedule: '3-4 sessions per week',
      features: [
        'Personalized player development plans',
        'Video analysis and performance tracking',
        'Small group training (max 8 players)',
        'Competitive match play opportunities',
        'Mental performance coaching',
        'Nutrition guidance',
        'Pathway to academy and rep teams',
      ],
      color: 'gold',
      featured: true,
    },
    {
      icon: Zap,
      title: 'Technical Training',
      tagline: 'Master the Fundamentals',
      description: 'Develop elite ball control, dribbling, passing, and shooting technique through deliberate practice and game-realistic scenarios.',
      ages: '6-18 years',
      schedule: '1-2 sessions per week',
      features: [
        'First touch and ball mastery drills',
        '1v1 moves and attacking skills',
        'Passing accuracy and weight',
        'Shooting technique and finishing',
        'Weak foot development',
        'Speed of play training',
      ],
      color: 'crimson',
      featured: false,
    },
    {
      icon: Brain,
      title: 'Tactical Training',
      tagline: 'Think Like a Pro',
      description: 'Learn positioning, game awareness, decision-making, and strategic play through tactical sessions and game analysis.',
      ages: '10-18 years',
      schedule: '1-2 sessions per week',
      features: [
        'Positional understanding',
        'Reading the game and anticipation',
        'Offensive and defensive organization',
        'Transition play (attack to defense)',
        'Set piece execution',
        'Game situation problem-solving',
      ],
      color: 'navy',
      featured: false,
    },
    {
      icon: Activity,
      title: 'Athletic Conditioning',
      tagline: 'Build Your Engine',
      description: 'Soccer-specific fitness training to improve speed, agility, endurance, and explosive power on the pitch.',
      ages: '10-18 years',
      schedule: '2 sessions per week',
      features: [
        'Speed and acceleration training',
        'Agility and change of direction',
        'Aerobic and anaerobic conditioning',
        'Injury prevention exercises',
        'Strength and power development',
        'Recovery and mobility work',
      ],
      color: 'navy',
      featured: false,
    },
    {
      icon: Apple,
      title: 'Nutritional Planning',
      tagline: 'Fuel Your Performance',
      description: 'Guidance on proper nutrition, hydration, and recovery to optimize athletic performance and long-term health.',
      ages: 'All ages',
      schedule: 'Ongoing support',
      features: [
        'Pre-game and post-game nutrition',
        'Hydration strategies',
        'Meal planning for young athletes',
        'Supplement guidance (when appropriate)',
        'Energy management throughout the day',
        'Education for parents and players',
      ],
      color: 'crimson',
      featured: false,
    },
    {
      icon: Wind,
      title: 'Body Fluidity',
      tagline: 'Move Like an Athlete',
      description: 'Movement training focused on coordination, balance, flexibility, and efficient running mechanics for soccer.',
      ages: '8-18 years',
      schedule: '1 session per week',
      features: [
        'Dynamic warm-up protocols',
        'Balance and coordination drills',
        'Flexibility and mobility training',
        'Running mechanics optimization',
        'Plyometric exercises',
        'Body awareness and control',
      ],
      color: 'gold',
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[hsl(var(--navy))] text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center scroll-reveal opacity-0">
            <h1 className="text-5xl sm:text-6xl font-display mb-6">
              OUR <span className="text-[hsl(var(--gold))]">PROGRAMS</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Comprehensive soccer development designed to build complete players. Choose the
              programs that fit your goals and commitment level.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-[hsl(var(--light-gray))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {programs.map((program, index) => {
              const Icon = program.icon;
              const isEven = index % 2 === 0;

              return (
                <Card
                  key={index}
                  className={`scroll-reveal opacity-0 ${
                    program.featured
                      ? 'border-4 border-[hsl(var(--gold))] shadow-2xl'
                      : 'border-2 hover:border-[hsl(var(--gold))]'
                  } transition-all`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className={`grid grid-cols-1 ${isEven ? 'lg:grid-cols-2' : 'lg:grid-cols-2'}`}>
                      {/* Icon & Title Section */}
                      <div
                        className={`p-8 lg:p-12 flex flex-col justify-center ${
                          program.color === 'gold'
                            ? 'bg-[hsl(var(--gold))]'
                            : program.color === 'crimson'
                            ? 'bg-[hsl(var(--crimson))]'
                            : 'bg-[hsl(var(--navy))]'
                        } ${isEven ? '' : 'lg:order-2'}`}
                      >
                        <div className="mb-6">
                          <Icon
                            size={48}
                            className={
                              program.color === 'gold' || program.color === 'crimson'
                                ? 'text-white'
                                : 'text-[hsl(var(--gold))]'
                            }
                          />
                        </div>
                        {program.featured && (
                          <div className="mb-4">
                            <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold uppercase tracking-wide rounded">
                              Featured Program
                            </span>
                          </div>
                        )}
                        <h2
                          className={`text-3xl sm:text-4xl font-display mb-2 ${
                            program.color === 'gold' || program.color === 'crimson'
                              ? 'text-white'
                              : 'text-[hsl(var(--gold))]'
                          }`}
                        >
                          {program.title}
                        </h2>
                        <p
                          className={`text-lg font-semibold mb-4 ${
                            program.color === 'gold' || program.color === 'crimson'
                              ? 'text-white/90'
                              : 'text-white/80'
                          }`}
                        >
                          {program.tagline}
                        </p>
                        <div
                          className={`space-y-2 text-sm ${
                            program.color === 'gold' || program.color === 'crimson'
                              ? 'text-white/80'
                              : 'text-white/70'
                          }`}
                        >
                          <p>
                            <span className="font-semibold">Ages:</span> {program.ages}
                          </p>
                          <p>
                            <span className="font-semibold">Schedule:</span> {program.schedule}
                          </p>
                        </div>
                      </div>

                      {/* Details Section */}
                      <div className={`p-8 lg:p-12 bg-white ${isEven ? '' : 'lg:order-1'}`}>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                          {program.description}
                        </p>
                        <h3 className="text-xl font-display text-[hsl(var(--navy))] mb-4">
                          WHAT YOU'LL DEVELOP:
                        </h3>
                        <ul className="space-y-3 mb-8">
                          {program.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <div
                                className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                                  program.color === 'gold'
                                    ? 'bg-[hsl(var(--gold))]'
                                    : program.color === 'crimson'
                                    ? 'bg-[hsl(var(--crimson))]'
                                    : 'bg-[hsl(var(--navy))]'
                                }`}
                              ></div>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link href="/register">
                          <Button
                            size="lg"
                            className="w-full bg-[hsl(var(--navy))] text-white hover:bg-[hsl(var(--navy))]/90 font-bold"
                            data-testid={`button-register-${index}`}
                          >
                            REGISTER FOR THIS PROGRAM
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[hsl(var(--navy))] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-reveal opacity-0">
            <h2 className="text-4xl sm:text-5xl font-display mb-6">
              NOT SURE WHICH PROGRAM <span className="text-[hsl(var(--gold))]">IS RIGHT FOR YOU?</span>
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
              Book a trial session and our coaches will help you find the perfect fit for your goals
              and development level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-[hsl(var(--gold))] text-[hsl(var(--navy))] hover:bg-[hsl(var(--gold))]/90 font-bold text-lg px-12 py-6"
                  data-testid="button-trial-programs"
                >
                  BOOK A TRIAL
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[hsl(var(--navy))] font-bold text-lg px-12 py-6"
                  data-testid="button-contact-programs"
                >
                  CONTACT US
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
