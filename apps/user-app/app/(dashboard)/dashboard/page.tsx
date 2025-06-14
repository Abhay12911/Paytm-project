import FeatureSection from "../../../components/FeaturesSection";
import HeroSection from "../../../components/HeroSection";
import Footer from "../../../components/layout/Footer";
import MainLayout from "../../../components/layout/MainLayout";
import TestimonialsSection from "../../../components/TestimonialsSection";

export default function() {
    return <div>
        <div>
            <MainLayout>
            <HeroSection/>
            <FeatureSection/>
            <TestimonialsSection/>
            <Footer/>
            </MainLayout>
        </div>
    </div>
}