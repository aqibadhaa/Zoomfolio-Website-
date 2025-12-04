import { Hero } from "./components/Hero";
import { RoleSection } from "./components/RoleSection";
import { FinalReveal } from "./components/FinalReveal";

export default function App() {
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

      <FinalReveal startOffset={25000}>

      </FinalReveal>


    </div>
  );
}
