import { useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users, Heart } from 'lucide-react';
import coachAndersonPhoto from '@assets/Coach_Anderson_1785523616905.avif';

export default function About() {
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

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We set the highest standards for training and development, pushing every player to reach their full potential.',
    },
    {
      icon: Target,
      title: 'Purpose',
      description: 'Every session is designed with clear objectives and measurable outcomes to track player progression.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We build a supportive environment where players, coaches, and families grow together.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for the game drives everything we do, from planning sessions to celebrating victories.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[hsl(var(--navy))] text-white py-24">
        <iframe
          title=""
          aria-hidden="true"
          tabIndex={-1}
          className="pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[56.25vw] min-h-full w-full min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 object-cover"
          src="https://www.youtube-nocookie.com/embed/rh16e26eWmE?autoplay=1&mute=1&controls=0&loop=1&playlist=rh16e26eWmE&modestbranding=1&rel=0&playsinline=1"
          allow="autoplay; encrypted-media"
        />
        <div className="absolute inset-0 -z-10 bg-[hsl(var(--navy))]/80" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[hsl(var(--navy))]/90 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center scroll-reveal opacity-0">
            <h1 className="text-5xl sm:text-6xl font-display mb-6">
              ABOUT <span className="text-[hsl(var(--gold))]">ANDERSON FUTBOL LAB</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We are a premier soccer development program committed to building elite young athletes
              through world-class coaching, personalized training, and a culture of excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal opacity-0">
              <h2 className="text-4xl font-display text-[hsl(var(--navy))] mb-6">
                OUR MISSION
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  At Anderson Futbol Lab, we believe every young player has untapped potential. Our
                  mission is to unlock that potential through purposeful, high-level training that
                  develops complete soccer players.
                </p>
                <p>
                  We go beyond drills and tactics. We teach discipline, resilience, teamwork, and
                  strategic thinking — life skills that extend far beyond the pitch. Our players
                  don't just learn to play soccer; they learn to compete, to lead, and to excel.
                </p>
                <p>
                  Based in Mississauga, Ontario, we've spent over 15 years refining our methodology,
                  working with hundreds of players who've gone on to compete at rep, academy, and
                  collegiate levels.
                </p>
              </div>
            </div>

            <div className="scroll-reveal opacity-0">
              <Card className="bg-[hsl(var(--gold))] border-none">
                <CardContent className="p-8 lg:p-10">
                  <h3 className="text-3xl font-display text-[hsl(var(--navy))] mb-6">
                    WHAT SETS US APART
                  </h3>
                  <ul className="space-y-4 text-[hsl(var(--navy))]">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[hsl(var(--navy))] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Small group sessions with maximum 8 players per coach</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[hsl(var(--navy))] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Individualized progression plans for every player</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[hsl(var(--navy))] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Video analysis and performance tracking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[hsl(var(--navy))] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Holistic approach covering technical, tactical, physical, and mental development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[hsl(var(--navy))] rounded-full mt-2 flex-shrink-0"></div>
                      <span>Coaches with professional and academy-level experience</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[hsl(var(--light-gray))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal opacity-0">
            <h2 className="text-4xl sm:text-5xl font-display text-[hsl(var(--navy))] mb-4">
              OUR VALUES
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="scroll-reveal opacity-0 text-center border-2 hover:border-[hsl(var(--gold))] transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="inline-flex p-4 rounded-full bg-[hsl(var(--navy))]/10">
                        <Icon size={32} className="text-[hsl(var(--navy))]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-display text-[hsl(var(--navy))] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coaching Staff */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal opacity-0">
            <h2 className="text-4xl sm:text-5xl font-display text-[hsl(var(--navy))] mb-4">
              ELITE COACHING STAFF
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our coaches bring decades of combined experience from professional clubs, academy
              systems, and high-level competitive programs. They don't just teach soccer — they
              mentor, inspire, and build champions.
            </p>
          </div>

          {/* Coach Anderson profile */}
          <div className="max-w-4xl mx-auto mb-12 scroll-reveal opacity-0">
            <Card className="border-2 border-[hsl(var(--gold))] overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-72 flex-shrink-0">
                    <img
                      src={coachAndersonPhoto}
                      alt="Coach Anderson"
                      className="w-full h-72 md:h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                    <div className="inline-block bg-[hsl(var(--gold))] text-[hsl(var(--navy))] text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4 w-fit">
                      Head Coach &amp; Founder
                    </div>
                    <h3 className="text-3xl font-display text-[hsl(var(--navy))] mb-3">
                      COACH ANDERSON
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      The driving force behind Anderson Futbol Lab, Coach Anderson brings elite-level
                      coaching expertise and an unwavering passion for player development. His
                      philosophy centres on building technically sound, tactically intelligent athletes
                      who are mentally equipped to compete at the highest level.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto scroll-reveal opacity-0">
            <Card className="border-2">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-2xl font-display text-[hsl(var(--navy))] mb-4">
                  COACHING PHILOSOPHY
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Our coaching staff believes in player-centered development. We meet each athlete
                    where they are and push them to where they can be. Sessions are challenging,
                    purposeful, and designed to build mastery through deliberate practice.
                  </p>
                  <p>
                    We emphasize:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(var(--gold))] font-bold">•</span>
                      <span>Game-realistic training scenarios that mirror competitive situations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(var(--gold))] font-bold">•</span>
                      <span>Immediate, constructive feedback to accelerate learning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(var(--gold))] font-bold">•</span>
                      <span>Growth mindset and mental resilience under pressure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(var(--gold))] font-bold">•</span>
                      <span>Technical excellence combined with tactical intelligence</span>
                    </li>
                  </ul>
                  <p>
                    Every coach at Anderson Futbol Lab is certified, background-checked, and
                    committed to creating a safe, supportive, and high-performance training
                    environment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[hsl(var(--navy))] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-reveal opacity-0">
            <h2 className="text-4xl sm:text-5xl font-display mb-6">
              READY TO <span className="text-[hsl(var(--gold))]">JOIN US?</span>
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
              Experience the Anderson Futbol Lab difference. Register for a trial session and see
              what elite training looks like.
            </p>
            <Link href="/register">
              <Button
                size="lg"
                className="bg-[hsl(var(--gold))] text-[hsl(var(--navy))] hover:bg-[hsl(var(--gold))]/90 font-bold text-lg px-12 py-6"
                data-testid="button-register-about"
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
