import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Posicionamento",
    description:
      "Não é 'ser bom'. É ser lembrado por um motivo específico. É ter uma mensagem clara, uma identidade forte, uma assinatura. É a paciente bater o olho e pensar: 'é ele'.",
    insight:
      "Quem não se posiciona… vira genérico. E o genérico vira comparável. E o comparável vira negociável.",
  },
  {
    number: "02",
    title: "Percepção de valor",
    description:
      "A paciente não escolhe o melhor cirurgião técnico. Ela escolhe o que parece mais seguro. E segurança, hoje, é comunicação. É consistência. É narrativa.",
    insight: "Quem não domina isso, fica refém de indicação e sorte.",
  },
  {
    number: "03",
    title: "Experiência e conversão",
    description:
      "Você pode ser excelente. Mas se a jornada da paciente é confusa, lenta ou 'fria'… você perde. A paciente não quer só uma cirurgia. Ela quer ser conduzida.",
    insight:
      "No novo mercado, não ganha quem atende bem. Ganha quem cria uma experiência impossível de comparar.",
  },
  {
    number: "04",
    title: "Gestão de carreira",
    description:
      "O cirurgião que cresce de verdade não vive apagando incêndio. Ele toma decisão com estratégia. Ele tem direção. Ele sabe o que dizer não.",
    insight:
      "Carreira competitiva não é sobre trabalhar mais. É sobre trabalhar com intenção.",
  },
];

const Pillars = () => {
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
            <h2 className="text-3xl md:text-4xl font-serif text-foreground text-balance mb-16">
              Os quatro pilares que sustentam uma carreira competitiva
            </h2>
          </motion.div>

          <div className="space-y-16 md:space-y-20">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="space-y-4">
                  <div className="flex items-baseline gap-4">
                    <span className="pillar-number">{pillar.number}</span>
                    <h3 className="text-2xl md:text-3xl font-serif text-foreground">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed pl-0 md:pl-12">
                    {pillar.description}
                  </p>

                  <p className="text-base text-foreground/80 italic leading-relaxed pl-0 md:pl-12">
                    {pillar.insight}
                  </p>
                </div>

                {index < pillars.length - 1 && (
                  <div className="divider-subtle mt-16 md:mt-20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
