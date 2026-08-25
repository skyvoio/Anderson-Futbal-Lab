import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2, Loader2 } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  programInterest: z.string().min(1, 'Please select a program'),
  preferredTrialDate: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      programInterest: '',
      preferredTrialDate: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
      formData.append('subject', 'New Trial Registration - Anderson Futbol Lab');
      formData.append('from_name', data.fullName);
      formData.append('Full Name', data.fullName);
      formData.append('Email', data.email);
      formData.append('Phone', data.phone);
      formData.append('Date of Birth', data.dateOfBirth);
      formData.append('Program Interest', data.programInterest);
      if (data.preferredTrialDate) {
        formData.append('Preferred Trial Date', data.preferredTrialDate);
      }
      if (data.message) {
        formData.append('Message', data.message);
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        form.reset();
        toast({
          title: 'Registration Submitted!',
          description: "We'll be in touch within 24 hours to schedule your trial.",
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

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[hsl(var(--light-gray))] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-[hsl(var(--gold))]">
              <CardContent className="p-12 text-center">
                <div className="mb-6 flex justify-center">
                  <CheckCircle2 size={64} className="text-[hsl(var(--gold))]" />
                </div>
                <h2 className="text-3xl font-display text-[hsl(var(--navy))] mb-4">
                  REGISTRATION RECEIVED!
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Thank you for registering with Anderson Futbol Lab. A member of our coaching staff
                  will contact you within 24 hours to schedule your trial session.
                </p>
                <p className="text-gray-600 mb-8">
                  Check your email for confirmation and next steps. We look forward to seeing you on
                  the pitch!
                </p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  className="bg-[hsl(var(--navy))] text-white hover:bg-[hsl(var(--navy))]/90 font-bold"
                  data-testid="button-register-another"
                >
                  REGISTER ANOTHER PLAYER
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[hsl(var(--navy))] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-display mb-4">
              REGISTER FOR A <span className="text-[hsl(var(--gold))]">TRIAL SESSION</span>
            </h1>
            <p className="text-xl text-white/90">
              Take the first step toward elite soccer development
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-[hsl(var(--light-gray))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-[hsl(var(--navy))]">
                  PLAYER INFORMATION
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll contact you to schedule your trial session.
                  All fields marked with * are required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Player's full name"
                              {...field}
                              data-testid="input-full-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
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

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
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
                    </div>

                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Player's Date of Birth *</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} data-testid="input-date-of-birth" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="programInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Program of Interest *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-program">
                                <SelectValue placeholder="Select a program" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="trial">Trial Date</SelectItem>
                              <SelectItem value="junior-elite">Junior Elite Program</SelectItem>
                              <SelectItem value="technical">Technical Training</SelectItem>
                              <SelectItem value="tactical">Tactical Training</SelectItem>
                              <SelectItem value="conditioning">Athletic Conditioning</SelectItem>
                              <SelectItem value="nutrition">Nutritional Planning</SelectItem>
                              <SelectItem value="fluidity">Body Fluidity</SelectItem>
                              <SelectItem value="other">General Enquiry / Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="preferredTrialDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Trial Date (Optional)</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} data-testid="input-trial-date" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Information (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about the player's experience, goals, or any questions you have..."
                              rows={5}
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
                        data-testid="button-submit-registration"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            SUBMITTING...
                          </>
                        ) : (
                          'SUBMIT REGISTRATION'
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-2">
                Questions? Contact us directly:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a
                  href="mailto:AndersonFutbolLab@gmail.com"
                  className="text-[hsl(var(--navy))] hover:text-[hsl(var(--gold))] font-medium"
                >
                  AndersonFutbolLab@gmail.com
                </a>
                <span className="hidden sm:inline text-gray-400">|</span>
                <a
                  href="tel:4377765626"
                  className="text-[hsl(var(--navy))] hover:text-[hsl(var(--gold))] font-medium"
                >
                  (437) 776-5626
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
