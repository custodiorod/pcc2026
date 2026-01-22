import { motion } from "framer-motion";
import { Check } from "lucide-react";

const truths = [
  {
    title: "Técnica continua sendo essencial",
    description: "A excelência técnica é a base, mas não é mais o diferencial único. É o preço de entrada.",
  },
  {
    title: "Técnica isolada não garante crescimento",
    description: "Operar bem não é suficiente. É preciso comunicar bem, posicionar bem e conduzir bem.",
  },
  {
    title: "Volume sem estratégia gera estagnação sofisticada",
    description: "Trabalhar mais não significa crescer mais. Volume sem direção é apenas correr em círculos com mais elegância.",
  },
  {
    title: "Comunicação é critério de escolha",
    description: "A paciente decide antes da consulta. Como você se comunica define se você é escolhido.",
  },
  {
    title: "Posicionamento virou estrutura",
    description: "Não é mais sobre aparecer. É sobre ser lembrado por um motivo específico.",
  },
  {
    title: "Ser bom médico já não é suficiente",
    description: "A clínica exige carreira competitiva. Ser excelente técnico é o mínimo.",
  },
];

const UncomfortableTruth = () => {
  return (
    <section className="bg-background relative overflow-hidden">
      {/* Background pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/background-cinza-escuro.jpg")',
          backgroundSize: '300px',
          backgroundRepeat: 'repeat',
          opacity: '0.1',
        }}
      />
      <div className="container-document pt-0 pb-12 md:py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground text-balance">
              A verdade desconfortável
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              A formação médica prepara para operar.
            </p>
            <p className="text-lg text-muted-foreground">
              Ela não prepara para sustentar uma carreira ao longo do tempo.
            </p>
          </div>

          <div className="mb-8">
            <p className="text-xl font-semibold text-foreground">
              Em 2026:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4">
            {truths.map((truth, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative border border-dashed border-primary/40 rounded-lg p-6 bg-card hover:bg-primary/5 min-h-[180px] transition-colors duration-300 flex flex-col justify-between md:col-span-1"
              >
                <div className="absolute -top-3 -right-3">
                  <div className="bg-primary/10 rounded-full p-1">
                    <Check className="text-primary" width={20} height={20} strokeWidth={2.5} />
                  </div>
                </div>
                <div className="relative z-10 space-y-3 pr-8">
                  <h3 className="text-lg font-bold text-foreground">
                    {truth.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {truth.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-2xl ml-auto text-left px-4 mt-8">
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
              Ser competitivo passou a exigir outras decisões.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UncomfortableTruth;
