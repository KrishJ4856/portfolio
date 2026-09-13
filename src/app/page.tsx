import Container from '@/components/common/Container';
import About from '@/components/landing/About';
import Blog from '@/components/landing/Blog';
import Github from '@/components/landing/Github';
import Hero from '@/components/landing/Hero';
import Work from '@/components/landing/Projects';

export default function HomePage() {
  return (
    <Container className="min-h-screen py-16">
      <Hero />
      <Work />
      <About />
      <Github />
      <Blog />
    </Container>
  );
}
