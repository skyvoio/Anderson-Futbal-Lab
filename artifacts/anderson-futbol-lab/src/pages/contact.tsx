import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Instagram, CheckCircle2, Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
      formData.append('subject', `Contact Form: ${data.subject}`);
      formData.append('from_name', data.name);
      formData.append('Name', data.name);
      formData.append('Email', data.email);
      if (data.phone) {
        formData.append('Phone', data.phone);
      }
      formData.append('Subject', data.subject);
      formData.append('Message', data.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        form.reset();
        toast({
          title: 'Message Sent!',
          description: "We'll get back to you as soon as possible.",
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: 'Submission Failed',
        description: 'Please try again or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      primary: 'AndersonFutbolLab@gmail.com',
      secondary: 'andersonfloffice@gmail.com',
      href: 'mailto:AndersonFutbolLab@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      primary: '(437) 776-5626',
      href: 'tel:4377765626',
    },
    {
      icon: MapPin,
      label: 'Location',
      primary: 'Mississauga, Ontario',
      secondary: 'Canada',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      primary: '@andersonfutbollab',
      href: 'https://www.instagram.com/andersonfutbollab',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[hsl(var(--navy))] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-display mb-6">
              GET IN <span className="text-[hsl(var(--gold))]">TOUCH</span>
            </h1>
            <p className="text-xl text-white/90">
              Have questions about our programs? Want to learn more? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[hsl(var(--light-gray))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-[hsl(var(--gold))] transition-all text-center"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="inline-flex p-3 rounded-full bg-[hsl(var(--navy))]/10">
                        <Icon size={24} className="text-[hsl(var(--navy))]" />
                      </div>
                    </div>
                    <h3 className="font-display text-sm text-[hsl(var(--navy))] mb-2">
                      {info.label}
                    </h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.label === 'Instagram' ? '_blank' : undefined}
                        rel={info.label === 'Instagram' ? 'noopener noreferrer' : undefined}
                        className="text-gray-700 hover:text-[hsl(var(--gold))] transition-colors"
                      >
                        <p className="font-medium">{info.primary}</p>
                        {info.secondary && <p className="text-sm text-gray-500">{info.secondary}</p>}
                      </a>
                    ) : (
                      <>
                        <p className="font-medium text-gray-700">{info.primary}</p>
                        {info.secondary && <p className="text-sm text-gray-500">{info.secondary}</p>}
                      </>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            {isSuccess ? (
              <Card className="border-4 border-[hsl(var(--gold))]">
                <CardContent className="p-12 text-center">
                  <div className="mb-6 flex justify-center">
                    <CheckCircle2 size={64} className="text-[hsl(var(--gold))]" />
                  </div>
                  <h2 className="text-3xl font-display text-[hsl(var(--navy))] mb-4">
                    MESSAGE SENT!
                  </h2>
                  <p className="text-lg text-gray-700 mb-8">
                    Thank you for contacting Anderson Futbol Lab. We'll get back to you within 24
                    hours.
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    className="bg-[hsl(var(--navy))] text-white hover:bg-[hsl(var(--navy))]/90 font-bold"
                    data-testid="button-send-another"
                  >
                    SEND ANOTHER MESSAGE
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-display text-[hsl(var(--navy))] mb-6">
                    SEND US A MESSAGE
                  </h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your name"
                                  {...field}
                                  data-testid="input-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="your@email.com"
                                  {...field}
                                  data-testid="input-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone (Optional)</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="(437) 123-4567"
                                  {...field}
                                  data-testid="input-phone"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="What is this about?"
                                  {...field}
                                  data-testid="input-subject"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Your message..."
                                rows={6}
                                {...field}
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="pt-4">
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-[hsl(var(--gold))] text-[hsl(var(--navy))] hover:bg-[hsl(var(--gold))]/90 font-bold text-lg"
                          disabled={isSubmitting}
                          data-testid="button-submit-contact"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              SENDING...
                            </>
                          ) : (
                            'SEND MESSAGE'
                          )}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
