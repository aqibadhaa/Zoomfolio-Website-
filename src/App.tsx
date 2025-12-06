import { Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero";
import { RoleSection } from "./components/RoleSection";
import { FinalReveal } from "./components/FinalReveal";
import { AboutMe } from "./components/aboutMe";
import BottomNav from "./components/navbar";

function HomePage() {
  return (
    <div className="bg-white">
      <Hero />
      <RoleSection
        title="Fullstack Developer"
        startOffset={1000}
        endOffset={9000}
        backgroundType="abstract"
      />
      <RoleSection
        title={"Machine Learning\nEngineer"}
        startOffset={9000}
        endOffset={17000}
        backgroundType="ml"
      />
      <RoleSection
        title={"React Native\nDeveloper"}
        startOffset={17000}
        endOffset={25000}
        backgroundType="mobile"
      />
      <FinalReveal startOffset={25000}></FinalReveal>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ width: '100%', height: '100%' }}> {/* Tambahin wrapper */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
      <BottomNav />
    </div>
  );
}