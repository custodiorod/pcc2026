import React from "react";

export const MarketFeatures = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 relative z-10 py-8 md:py-10 max-w-4xl mx-auto">
      {/* Feature 1: Tecnologia */}
      <div className="flex flex-col md:border-r py-6 md:py-8 relative group/feature md:border-l md:border-b border-border/30">
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
        <div className="mb-3 md:mb-4 relative z-10 px-4 md:px-6 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-camera size-5 md:size-6">
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
            <circle cx="12" cy="13" r="3"></circle>
          </svg>
        </div>
        <div className="text-sm md:text-base font-bold mb-1.5 md:mb-2 relative z-10 px-4 md:px-6">
          <div className="absolute left-4 md:left-6 inset-y-0 h-4 md:h-5 group-hover/feature:h-6 md:group-hover/feature:h-7 w-1 rounded-tr-full rounded-br-full bg-primary/20 group-hover/feature:bg-primary transition-all duration-300 origin-center"></div>
          <span className="group-hover/feature:translate-x-1.5 md:group-hover/feature:translate-x-2 transition duration-300 inline-block text-foreground">
            Tecnologia virou commodity
          </span>
        </div>
        <p className="text-xs md:text-sm text-muted-foreground max-w-xs relative z-10 px-4 md:px-6 leading-relaxed">
          Todo mundo tem acesso às mesmas tecnologias e equipamentos.
        </p>
      </div>

      {/* Feature 2: Instagram */}
      <div className="flex flex-col md:border-r py-6 md:py-8 relative group/feature md:border-b border-border/30">
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
        <div className="mb-3 md:mb-4 relative z-10 px-4 md:px-6 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram size-5 md:size-6">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
          </svg>
        </div>
        <div className="text-sm md:text-base font-bold mb-1.5 md:mb-2 relative z-10 px-4 md:px-6">
          <div className="absolute left-4 md:left-6 inset-y-0 h-4 md:h-5 group-hover/feature:h-6 md:group-hover/feature:h-7 w-1 rounded-tr-full rounded-br-full bg-primary/20 group-hover/feature:bg-primary transition-all duration-300 origin-center"></div>
          <span className="group-hover/feature:translate-x-1.5 md:group-hover/feature:translate-x-2 transition duration-300 inline-block text-foreground">
            Instagram cheio de casos
          </span>
        </div>
        <p className="text-xs md:text-sm text-muted-foreground max-w-xs relative z-10 px-4 md:px-6 leading-relaxed">
          "Antes e depois" virou o mínimo esperado por qualquer paciente.
        </p>
      </div>

      {/* Feature 3: Clínica */}
      <div className="flex flex-col md:border-r py-6 md:py-8 relative group/feature md:border-l border-border/30">
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
        <div className="mb-3 md:mb-4 relative z-10 px-4 md:px-6 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 size-5 md:size-6">
            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
            <path d="M10 6h4"></path>
            <path d="M10 10h4"></path>
            <path d="M10 14h4"></path>
            <path d="M10 18h4"></path>
          </svg>
        </div>
        <div className="text-sm md:text-base font-bold mb-1.5 md:mb-2 relative z-10 px-4 md:px-6">
          <div className="absolute left-4 md:left-6 inset-y-0 h-4 md:h-5 group-hover/feature:h-6 md:group-hover/feature:h-7 w-1 rounded-tr-full rounded-br-full bg-primary/20 group-hover/feature:bg-primary transition-all duration-300 origin-center"></div>
          <span className="group-hover/feature:translate-x-1.5 md:group-hover/feature:translate-x-2 transition duration-300 inline-block text-foreground">
            Clínica grande e bonita
          </span>
        </div>
        <p className="text-xs md:text-sm text-muted-foreground max-w-xs relative z-10 px-4 md:px-6 leading-relaxed">
          Parou de impressionar. Estrutura física virou básico.
        </p>
      </div>

      {/* Feature 4: Equipe */}
      <div className="flex flex-col md:border-r py-6 md:py-8 relative group/feature border-border/30">
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
        <div className="mb-3 md:mb-4 relative z-10 px-4 md:px-6 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users size-5 md:size-6">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <div className="text-sm md:text-base font-bold mb-1.5 md:mb-2 relative z-10 px-4 md:px-6">
          <div className="absolute left-4 md:left-6 inset-y-0 h-4 md:h-5 group-hover/feature:h-6 md:group-hover/feature:h-7 w-1 rounded-tr-full rounded-br-full bg-primary/20 group-hover/feature:bg-primary transition-all duration-300 origin-center"></div>
          <span className="group-hover/feature:translate-x-1.5 md:group-hover/feature:translate-x-2 transition duration-300 inline-block text-foreground">
            Equipe boa deixou de ser diferencial
          </span>
        </div>
        <p className="text-xs md:text-sm text-muted-foreground max-w-xs relative z-10 px-4 md:px-6 leading-relaxed">
          Ter equipe qualificada é pré-requisito, não vantagem.
        </p>
      </div>
    </div>
  );
};
