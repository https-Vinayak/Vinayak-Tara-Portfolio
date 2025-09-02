import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WebCapabilitiesSection } from './components/WebCapabilitiesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function WebDeveloperPortfolio() {
	return (
		<>
			<Header />
			<main className="min-h-screen bg-[#0D1117] text-white relative overflow-hidden">
				{/* Background Effects */}
				<div className="fixed inset-0 mesh-gradient pointer-events-none" />
				<div className="fixed inset-0 grid-background opacity-30" />
				
				{/* Content */}
				<div className="relative z-10">
					<HeroSection />
					<SkillsSection />
					<ProjectsSection />
					<WebCapabilitiesSection />
					<ContactSection />
				</div>
			</main>
			<Footer />
		</>
	);
}
