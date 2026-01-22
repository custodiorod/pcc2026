import Hero from "@/components/sections/Hero";
import Letter from "@/components/sections/Letter";
import PillarsCards from "@/components/sections/PillarsCards";
import LetterContinuation from "@/components/sections/LetterContinuation";
import ConversationRepetition from "@/components/sections/ConversationRepetition";
import UncomfortableTruth from "@/components/sections/UncomfortableTruth";
import WhatWontWork from "@/components/sections/WhatWontWork";
import WhatDifferentiates from "@/components/sections/WhatDifferentiates";
import AboutProgram from "@/components/sections/AboutProgram";
import WhoIsFor from "@/components/sections/WhoIsFor";
import ApplicationSection from "@/components/sections/ApplicationSection";
import TheDecision from "@/components/sections/TheDecision";
import YearChangesEverything from "@/components/sections/YearChangesEverything";
import FinalFooter from "@/components/sections/FinalFooter";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import TruthSection from "@/components/sections/TruthSection";
import Pillars from "@/components/sections/Pillars";
import Program from "@/components/sections/Program";
import ForWho from "@/components/sections/ForWho";
import Application from "@/components/sections/Application";
import Closing from "@/components/sections/Closing";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main>
      <Hero />
      <Letter />
      <PillarsCards />
      <LetterContinuation />
      <ConversationRepetition />
      <UncomfortableTruth />
      <WhatWontWork />
      <WhatDifferentiates />
      <AboutProgram />
      <WhoIsFor />
      <ApplicationSection />
      <TheDecision />
      <YearChangesEverything />
      <FinalFooter />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
