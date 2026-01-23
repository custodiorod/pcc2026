import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const spheres = [
  {
    number: "01",
    icon: "/elemento1-escuro.png",
    title: "Técnica de Vanguarda",
    description: "Atualização contínua, pensamento crítico e excelência real — não vitrine.",
    insight: "A técnica que diferencia é a que vem acompanhada de evolução constante, não de exposição vazia.",
  },
  {
    number: "02",
    icon: "/elemento1-claro.png",
    title: "Autoridade Baseada em Reputação",
    description: "Posicionamento sólido, científico e coerente, construído no tempo.",
    insight: "Reputação não se constrói com marketing. Se constrói com consistência, coerência e profundidade.",
  },
  {
    number: "03",
    icon: "/elemento1-branco.png",
    title: "Experiência da Paciente",
    description: "Humanização verdadeira, jornada clara, segurança percebida e confiança.",
    insight: "A paciente não escolhe só pelo resultado. Escolhe pela segurança que sente em cada ponto de contato.",
  },
  {
    number: "04",
    icon: "/elemento1-bege.png",
    title: "Gestão da Clínica",
    description: "Estrutura enxuta, clareza financeira, previsibilidade e liberdade de decisão.",
    insight: "Clínica que não gestiona, sangra. E cirurgião que não entende de gestão, refém da própria estrutura fica.",
  },
];

const WhatDifferentiates = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerTop = rect.top;
      const containerHeight = rect.height;

      // Calculate how much of the container has been scrolled through
      // Start at 0 when container top reaches middle of viewport
      // End at 100 when container bottom reaches middle of viewport
      const viewportMiddle = windowHeight / 2;
      const startPosition = containerTop - viewportMiddle;
      const endPosition = startPosition + containerHeight;

      let progress = 0;

      if (startPosition <= 0) {
        progress = (-startPosition / containerHeight) * 100;
      }

      // Clamp between 0 and 100
      progress = Math.max(0, Math.min(100, progress));
      setScrollProgress(progress);
    };

    // Use requestAnimationFrame for smooth updates
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <section className="section-spacing relative overflow-hidden" style={{ backgroundColor: '#ECEAE4' }}>
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/pattern-elementos.jpg")',
          backgroundSize: '300px',
          backgroundRepeat: 'repeat',
          opacity: '0.08',
        }}
      />

      <div className="container-document relative z-10">
        <div className="content-column">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground text-balance mb-12 md:mb-16">
              O que passa a diferenciar os cirurgiões competitivos
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 md:mb-12 max-w-3xl">
              Os cirurgiões que crescem com consistência hoje têm algo em comum:
              <strong className="text-foreground font-semibold"> Eles integram, em vez de acumular.</strong>
            </p>

            <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed mb-12 md:mb-16">
              O Plastic Competitive Career organiza essa integração em <strong className="font-semibold">quatro esferas estratégicas:</strong>
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative" ref={containerRef}>
            {/* Vertical line background - mobile */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-muted block md:hidden" style={{ left: "8.25rem" }}></div>
            {/* Vertical line background - desktop */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-muted hidden md:block" style={{ left: "11rem" }}></div>

            {/* Vertical line progress - mobile */}
            <div
              className="absolute left-0 top-0 w-0.5 bg-primary block md:hidden transition-none will-change-transform"
              style={{
                left: "8.25rem",
                height: `${scrollProgress}%`
              }}
            />
            {/* Vertical line progress - desktop */}
            <div
              className="absolute left-0 top-0 w-0.5 bg-primary hidden md:block transition-none will-change-transform"
              style={{
                left: "11rem",
                height: `${scrollProgress}%`
              }}
            />

            <div className="space-y-12 md:space-y-16 lg:space-y-20">
              {spheres.map((sphere, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                  data-index={index}
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    {/* Element icon - left side */}
                    <div className="relative z-10 flex-shrink-0">
                      <img
                        src={sphere.icon}
                        alt={`Elemento ${sphere.number}`}
                        className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
                      />
                    </div>

                    {/* Number on timeline */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded border-2 border-primary bg-primary flex items-center justify-center">
                        <span className="pillar-number text-sm md:text-base text-background font-semibold">
                          {sphere.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3 md:space-y-4 pt-2 md:pt-3">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-serif text-foreground">
                        {sphere.title}
                      </h3>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        {sphere.description}
                      </p>
                      <p className="text-sm md:text-base text-foreground/80 italic leading-relaxed">
                        {sphere.insight}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom highlight box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mt-12 md:mt-16 lg:mt-20"
          >
            <div className="bg-muted/50 rounded-lg p-6 md:p-8 lg:p-10 text-center">
              <img
                src="/assinatura-marca-bege-preto.png"
                alt="Plastic Competitive Career - Assinatura de Marca"
                className="h-12 md:h-16 lg:h-20 w-auto mx-auto mb-6 md:mb-8 object-contain"
              />
              <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed">
                Nenhuma dessas esferas sustenta uma carreira sozinha.<br />
                <strong className="font-semibold">É a integração que muda o jogo competitivo.</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatDifferentiates;
