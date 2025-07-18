interface LandingPageProps {
  testimonials: Testimonial[];
  services: Services[];
}

interface Services {
  title: string;
  description: string;
  bgClass: string;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  logo: string;
}
