import HeroCinematic from "../hero/HeroCinematic.jsx";
import SelectedWorkSection from "../selected-work/SelectedWorkSection.jsx";
import WorkGridSection from "../work-grid/WorkGridSection.jsx";
import AboutSection from "../about/AboutSection.jsx";
import ServicesSection from "../services/ServicesSection.jsx";
import FeedSection from "../feed/FeedSection.jsx";
import ContactSection from "../contact/ContactSection.jsx";

export default function HomePageContent() {
  return (
    <main>
      <HeroCinematic />
      <SelectedWorkSection />
      <WorkGridSection />
      <AboutSection />
      <ServicesSection />
      <FeedSection />
      <ContactSection />
    </main>
  );
}
