import { motion } from "framer-motion";
import { Target, Trophy, CircleCheck, TrendingUp } from "lucide-react";

const pillars = [
  {
    number: "1",
    icon: Target,
    title: "Posicionamento",
    description: 'Não é "ser bom". É ser lembrado por um motivo específico. É ter uma mensagem clara, uma identidade forte, uma assinatura. É a paciente bater o olho e pensar: "é ele".',
    insight: "Porque quem não se posiciona… vira genérico. E genérico vira comparável. E comparável vira negociável.",
  },
  {
    number: "2",
    icon: Trophy,
    title: "Percepção de valor",
    extraInsight: "Aqui está o ponto que destrói o ego de muita gente.",
    description: "A paciente não escolhe o melhor cirurgião técnico. Ela escolhe o que parece mais seguro.",
    insight: "E segurança, hoje, é comunicação. É consistência. É narrativa. É autoridade construída antes da primeira conversa. Quem não domina isso, fica refém de indicação e sorte.",
  },
  {
    number: "3",
    icon: CircleCheck,
    title: "Experiência e conversão",
    description: "Você pode ser excelente. Mas se a jornada da paciente é confusa, lenta ou \"fria\"… você perde. Porque a paciente não quer só uma cirurgia. Ela quer ser conduzida.",
    insight: "Ela quer sentir que existe um método, uma lógica, uma liderança. Antes, durante e depois. E no novo mercado, não ganha quem atende bem. Ganha quem cria uma experiência impossível de comparar.",
  },
  {
    number: "4",
    icon: TrendingUp,
    title: "Gestão de carreira",
    description: "O cirurgião que cresce de verdade não vive apagando incêndio. Ele toma decisão com estratégia. Ele tem direção. Ele sabe o que dizer não.",
    insight: "Carreira competitiva não é sobre trabalhar mais. É sobre trabalhar com intenção.",
  },
];

const PillarsCards = () => {
  return (
    <section className="bg-muted/30 py-12 md:py-16 lg:py-24">
      <div className="container-document">
        <div className="text-center mb-8 md:mb-12 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground text-balance"
          >
            Os quatro pilares que sustentam uma carreira realmente competitiva
          </motion.h2>
        </div>

        <div className="grid max-w-5xl mx-auto grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 *:text-center">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-lg border bg-card text-card-foreground shadow-sm group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col space-y-1.5 p-6 pb-2 md:pb-3">
                <div aria-hidden="true" className="relative mx-auto size-28 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
                  <div className="absolute inset-0 [--border:currentColor] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
                  <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l rounded-lg shadow-sm">
                    <pillar.icon className="size-5 md:size-6 text-primary" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="mt-4 md:mt-6 font-semibold text-lg md:text-xl font-serif">
                  {pillar.number}. {pillar.title}
                </h3>
              </div>
              <div className="p-6 pt-0">
                {pillar.extraInsight && (
                  <p className="text-[10px] md:text-xs text-foreground/80 italic mb-2 md:mb-3">
                    {pillar.extraInsight}
                  </p>
                )}
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
                <p className="text-[10px] md:text-xs text-foreground/80 italic mt-3 md:mt-4">
                  {pillar.insight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsCards;
