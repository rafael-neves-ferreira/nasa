import MainSection from '@/components/MainSection'
import FooterSection from '@/components/footer';
import { FloatButton } from 'antd';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import ReviewsSections from '@/components/ReviewsSections';
import GallerySection from '@/components/GallerySection';
import Services from '@/components/Services';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <MainSection />
      <AboutSection />
      <ProductsSection />
      <ReviewsSections />
      <GallerySection />
      <Services />
      {/* <ContactSection /> */}
      {/* <FooterSection /> */}
      <FloatButton.BackTop duration={3000} />
    </>
  )
}