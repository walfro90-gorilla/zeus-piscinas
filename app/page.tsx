import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
