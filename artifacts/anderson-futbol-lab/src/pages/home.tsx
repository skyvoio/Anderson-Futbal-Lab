import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Trophy, Zap, Heart, Brain } from 'lucide-react';
import heroBgPath from '@assets/Kids_soccer_club_edited_1785523396117.avif';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

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
      description: 'Our flagship development program for serious young athletes ready to take their game to the next level.',
      color: 'gold',
    },
    {
      icon: Zap,
      title: 'Technical Training',
      description: 'Master ball control, dribbling, passing, and shooting with precision coaching.',
      color: 'crimson',
    },
    {
      icon: Brain,
      title: 'Tactical Training',
      description: 'Learn positioning, game awareness, and strategic decision-making on the pitch.',
      color: 'navy',
    },
  ];

  const stats = [
    { value: '500+', label: 'Players Trained' },
    { value: '15+', label: 'Years Experience' },
    { value: '98%', label: 'Player Satisfaction' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative isolate min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(32, 34, 101, 0.85), rgba(32, 34, 101, 0.7)), url(${heroBgPath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <iframe
          title=""
          aria-hidden="true"
          tabIndex={-1}
          className="pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[56.25vw] min-h-full w-full min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 object-cover"
          src="https://www.youtube-nocookie.com/embed/LkH5w0E73Pw?autoplay=1&mute=1&controls=0&loop=1&playlist=LkH5w0E73Pw&modestbranding=1&rel=0&playsinline=1"
          allow="autoplay; encrypted-media"
        />
        <div className="absolute inset-0 -z-10 bg-[hsl(var(--navy))]/75" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[hsl(var(--navy))]/90 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-white mb-6 leading-tight">
              DEVELOP YOUR GAME.<br />
              <span className="text-[hsl(var(--gold))]">ELEVATE YOUR FUTURE.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              Elite soccer development program in Mississauga. Train with purpose. Compete with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-[hsl(var(--gold))] text-[hsl(var(--navy))] hover:bg-[hsl(var(--gold))]/90 font-bold text-lg px-8 py-6"
                  data-testid="button-register-hero"
                >
                  REGISTER FOR A TRIAL
                </Button>
              </Link>
              <Link href="/programs">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[hsl(var(--navy))] font-bold text-lg px-8 py-6"
                  data-testid="button-programs-hero"
                >
                  EXPLORE PROGRAMS
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[hsl(var(--gold))] py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="scroll-reveal opacity-0">
                <div className="text-5xl font-display text-[hsl(var(--navy))] mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-wider text-[hsl(var(--navy))]/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal opacity-0">
            <h2 className="text-4xl sm:text-5xl font-display text-[hsl(var(--navy))] mb-4">
              OUR PROGRAMS
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive training designed to develop complete players
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card
                  key={index}
                  className="scroll-reveal opacity-0 border-2 hover:border-[hsl(var(--gold))] transition-all hover:shadow-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div
                        className={`inline-flex p-4 rounded-lg ${
                          program.color === 'gold'
                            ? 'bg-[hsl(var(--gold))]/10'
                            : program.color === 'crimson'
                            ? 'bg-[hsl(var(--crimson))]/10'
                            : 'bg-[hsl(var(--navy))]/10'
                        }`}
                      >
                        <Icon
                          size={32}
                          className={
                            program.color === 'gold'
                              ? 'text-[hsl(var(--gold))]'
                              : program.color === 'crimson'
                              ? 'text-[hsl(var(--crimson))]'
                              : 'text-[hsl(var(--navy))]'
                          }
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-display text-[hsl(var(--navy))] mb-4">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    <Link href="/programs">
                      <Button
                        variant="outline"
                        className="w-full border-[hsl(var(--navy))] text-[hsl(var(--navy))] hover:bg-[hsl(var(--navy))] hover:text-white"
                        data-testid={`button-learn-more-${index}`}
                      >
                        LEARN MORE
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[hsl(var(--navy))] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal opacity-0">
              <h2 className="text-4xl sm:text-5xl font-display mb-6">
                WHY <span className="text-[hsl(var(--gold))]">ANDERSON FUTBOL LAB?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Target className="text-[hsl(var(--gold))]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-2">ELITE COACHING</h3>
                    <p className="text-white/80">
                      Train with experienced coaches who've developed players at the highest levels.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Users className="text-[hsl(var(--gold))]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-2">PERSONALIZED DEVELOPMENT</h3>
                    <p className="text-white/80">
                      Small group sessions ensure individual attention and tailored progression plans.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Heart className="text-[hsl(var(--gold))]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-2">HOLISTIC APPROACH</h3>
                    <p className="text-white/80">
                      We develop the complete athlete — technical, tactical, physical, and mental.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-reveal opacity-0">
              <Card className="bg-[hsl(var(--gold))] border-none">
                <CardContent className="p-8 lg:p-12">
                  <h3 className="text-3xl font-display text-[hsl(var(--navy))] mb-6">
                    READY TO START?
                  </h3>
                  <p className="text-[hsl(var(--navy))]/80 mb-8 text-lg">
                    Join hundreds of players who have elevated their game with Anderson Futbol Lab.
                    Book your trial session today.
                  </p>
                  <Link href="/register">
                    <Button
                      size="lg"
                      className="w-full bg-[hsl(var(--navy))] text-white hover:bg-[hsl(var(--navy))]/90 font-bold text-lg"
                      data-testid="button-register-cta"
                    >
                      BOOK YOUR TRIAL
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-[hsl(var(--light-gray))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center scroll-reveal opacity-0">
            <div className="text-6xl text-[hsl(var(--gold))] mb-6">"</div>
            <blockquote className="text-2xl sm:text-3xl font-display text-[hsl(var(--navy))] mb-8 leading-relaxed">
              Anderson Futbol Lab transformed my son's game. The coaching is exceptional, and the
              focus on individual development really shows. He's more confident, skilled, and
              passionate about soccer than ever.
            </blockquote>
            <div className="text-lg text-gray-600">
              <p className="font-semibold">Sarah Martinez</p>
              <p className="text-sm">Parent of Junior Elite Player</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[hsl(var(--crimson))] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-reveal opacity-0">
            <h2 className="text-4xl sm:text-5xl font-display mb-6">
              YOUR JOURNEY STARTS HERE
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
              Don't wait to unlock your potential. Register for a trial session and experience the
              Anderson Futbol Lab difference.
            </p>
            <Link href="/register">
              <Button
                size="lg"
                className="bg-white text-[hsl(var(--crimson))] hover:bg-white/90 font-bold text-lg px-12 py-6"
                data-testid="button-register-final"
              >
                REGISTER NOW
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
