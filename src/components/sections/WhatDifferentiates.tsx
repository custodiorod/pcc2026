import { motion } from "framer-motion";

const spheres = [
  {
    number: "01",
    title: "Técnica de Vanguarda",
    description: "Atualização contínua, pensamento crítico e excelência real — não vitrine.",
    insight: "A técnica que diferencia é a que vem acompanhada de evolução constante, não de exposição vazia.",
  },
  {
    number: "02",
    title: "Autoridade Baseada em Reputação",
    description: "Posicionamento sólido, científico e coerente, construído no tempo.",
    insight: "Reputação não se constrói com marketing. Se constrói com consistência, coerência e profundidade.",
  },
  {
    number: "03",
    title: "Experiência da Paciente",
    description: "Humanização verdadeira, jornada clara, segurança percebida e confiança.",
    insight: "A paciente não escolhe só pelo resultado. Escolhe pela segurança que sente em cada ponto de contato.",
  },
  {
    number: "04",
    title: "Gestão da Clínica",
    description: "Estrutura enxuta, clareza financeira, previsibilidade e liberdade de decisão.",
    insight: "Clínica que não gestiona, sangra. E cirurgião que não entende de gestão, refém da própria estrutura fica.",
  },
];

const WhatDifferentiates = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-document">
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
          <div className="relative">
            {/* Vertical line - mobile */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-muted block md:hidden" style={{ left: "1.25rem" }}></div>
            {/* Vertical line - desktop */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-muted hidden md:block" style={{ left: "3.75rem" }}></div>

            <div className="space-y-12 md:space-y-16 lg:space-y-20 md:pl-12 pl-10">
              {spheres.map((sphere, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded border-2 border-primary bg-primary flex items-center justify-center">
                        <span className="pillar-number text-sm md:text-base text-background font-semibold">
                          {sphere.number}
                        </span>
                      </div>
                    </div>
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
            <div className="bg-muted/50 rounded-lg p-6 md:p-8 lg:p-10">
              <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed text-center">
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
