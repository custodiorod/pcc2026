import { motion } from "framer-motion";
import { VolumeX, Target, Sparkles, Crosshair } from "lucide-react";

const features = [
  {
    icon: VolumeX,
    title: "Menos ruído",
    description: "Foco no que realmente move a carreira.",
  },
  {
    icon: Target,
    title: "Mais estratégia",
    description: "Decisões baseadas em estrutura, não em achismo.",
  },
  {
    icon: Sparkles,
    title: "Menos improviso",
    description: "Planejamento que elimina a aleatoriedade.",
  },
  {
    icon: Crosshair,
    title: "Mais intenção",
    description: "Cada ação tem um propósito claro.",
  },
];

const LetterContinuation = () => {
  return (
    <section className="section-spacing relative" style={{ backgroundColor: '#1a1a1a' }}>
      {/* Dark pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/pattern-elementos-escuro.jpg")',
          backgroundSize: '300px',
          backgroundRepeat: 'repeat',
          opacity: '0.15',
        }}
      />

      <div className="container-document relative z-10">
        <div className="content-column">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl text-white leading-relaxed">
              E é exatamente por isso que tem gente menos preparada tecnicamente ocupando espaço.
            </p>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              Eles não são "melhores".
            </p>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              Eles só pararam de depender apenas da técnica.
            </p>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              Eles estruturaram os quatro pilares.
            </p>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              E por isso parecem maiores.
            </p>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              Crescem mais rápido.
            </p>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              E dominam o jogo novo.
            </p>

            <p className="text-lg md:text-xl text-white leading-relaxed mt-8">
              Enquanto isso, muito cirurgião bom… fica invisível.
            </p>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              E o invisível, hoje, perde.
            </p>

            <div className="divider-subtle my-12" />

            <p className="text-lg md:text-xl text-white leading-relaxed">
              Eu não estou falando isso como crítica.
            </p>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              Estou falando como colega.
            </p>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              Porque eu também senti esse empate chegando.
            </p>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              Aquele momento em que você olha ao redor e percebe:
            </p>

            <div className="space-y-3 text-lg md:text-xl text-white/80 my-8 max-w-2xl mx-auto text-center">
              <p>todo mundo tem um Instagram bonito</p>
              <p>todo mundo tem caso bom</p>
              <p>todo mundo tem estrutura</p>
              <p>todo mundo parece "profissional"</p>
            </div>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              Só que alguns continuam crescendo…
            </p>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              e outros ficam patinando.
            </p>

            <div className="divider-subtle my-12" />

            <p className="text-lg md:text-xl text-white leading-relaxed">
              E quando você está do lado de dentro, você entende o motivo.
            </p>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              O Plastic Competitive Career nasceu exatamente daí.
            </p>

            <div className="my-12 md:my-16">
              <img
                src="/assinatura-marca-bege-gelo.png"
                alt="Plastic Competitive Career - Assinatura de Marca"
                className="h-20 md:h-24 lg:h-28 w-auto object-contain"
              />
            </div>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              Não como mais um curso.
            </p>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              Mas como uma estrutura de carreira para cirurgiões que entenderam que competir bem em 2026 exige um novo tipo de preparo.
            </p>

            {/* Feature Cards Grid */}
            <div className="my-8 -mx-4 md:mx-0">
              <section className="py-6 md:py-8 lg:py-12">
                <div className="mx-auto max-w-3xl lg:max-w-5xl px-4 md:px-6">
                  <div className="relative">
                    <div className="relative z-10 grid grid-cols-6 gap-2 md:gap-3">
                      {features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="rounded-lg border border-white/10 bg-white/5 text-white relative col-span-full overflow-hidden md:col-span-3 hover:bg-white/10 hover:shadow-md transition-all duration-300"
                        >
                          <div className="p-3 md:p-4 lg:p-5">
                            <div className="flex items-start gap-2 md:gap-3">
                              <div className="flex-shrink-0">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                                  <feature.icon className="size-5" />
                                </div>
                              </div>
                              <div className="flex-1 space-y-0.5 md:space-y-1">
                                <h3 className="text-sm md:text-base font-semibold" style={{ color: '#FFF3DE' }}>
                                  {feature.title}
                                </h3>
                                <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="divider-subtle my-12" />

            <p className="text-lg md:text-xl text-white leading-relaxed">
              E se você leu isso até aqui e pensou:
            </p>

            <p className="text-lg md:text-xl text-white leading-relaxed italic">
              "eu estou exatamente nesse ponto…"
            </p>

            <p className="text-lg md:text-xl text-white leading-relaxed">
              Então a decisão óbvia e inteligente é uma só:
            </p>

            <p className="text-xl md:text-2xl font-semibold leading-relaxed mt-6" style={{ color: '#FFF3DE' }}>
              Fazer a aplicação.
            </p>

            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-lg text-white leading-relaxed">
                <span className="font-semibold">Assinado,</span>
              </p>
              <p className="text-lg text-white leading-relaxed mt-2">
                Dr. João Maximiliano
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default LetterContinuation;
