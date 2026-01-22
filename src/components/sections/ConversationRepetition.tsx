import { motion } from "framer-motion";

const ConversationRepetition = () => {
  return (
    <section className="section-spacing pt-8 pb-8 md:pt-12 md:pb-12 lg:pt-16 lg:pb-16 bg-background relative overflow-hidden">
      {/* Background pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("/background-bege.jpg")',
          backgroundSize: '300px',
          backgroundRepeat: 'repeat',
          opacity: '0.15',
        }}
      />
      <div className="container-document relative z-10">
        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {/* Top section with image */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-foreground text-balance">
                Uma conversa que se repete entre colegas.
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Se você é cirurgião plástico, é bem provável que já tenha pensado — ou ouvido em conversas com colegas — frases como:
              </p>

              <div className="space-y-4 text-lg md:text-xl text-foreground leading-relaxed max-w-2xl mx-auto">
                <p>"A competição na minha cidade aumentou."</p>
                <p>"Está cada vez mais difícil se diferenciar."</p>
                <p>"Hoje o paciente compara muito mais."</p>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Isso não é uma queixa isolada.
              </p>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                É uma percepção comum entre cirurgiões bem formados, em diferentes regiões.
              </p>

              <div className="divider-subtle my-12" />
            </motion.div>

            {/* Desktop image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="hidden lg:flex justify-center items-center relative"
            >
              <img
                src="/elemento-bloco2.png"
                alt="Elemento visual"
                className="w-full h-auto max-w-xs"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Bottom card section */}
          <div className="flex justify-center">
            <div className="w-full max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex flex-col items-start justify-between gap-6 md:gap-8 rounded-lg bg-muted/30 px-5 py-8 md:px-8 md:py-10 md:flex-row lg:px-16 lg:py-14">
                  <div className="md:w-1/2">
                    <h4 className="mb-3 md:mb-4 text-xl md:text-2xl lg:text-3xl font-serif font-semibold text-foreground leading-tight">
                      O que mudou não foi a cirurgia plástica em si.
                    </h4>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      Foi o ambiente em volta dela.
                    </p>
                  </div>

                  <div className="md:w-5/12">
                    <ul className="flex flex-col space-y-2.5 md:space-y-3 text-sm md:text-base font-medium">
                      <li className="flex items-start gap-2 md:gap-3">
                        <svg
                          className="mt-0.5 size-4 md:mt-1 md:size-5 flex-shrink-0 text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-foreground text-sm md:text-base">
                          Tecnologias passaram a fazer parte do dia a dia
                        </span>
                      </li>
                      <li className="flex items-start gap-2 md:gap-3">
                        <svg
                          className="mt-0.5 size-4 md:mt-1 md:size-5 flex-shrink-0 text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-foreground text-sm md:text-base">
                          Boa comunicação virou obrigação
                        </span>
                      </li>
                      <li className="flex items-start gap-2 md:gap-3">
                        <svg
                          className="mt-0.5 size-4 md:mt-1 md:size-5 flex-shrink-0 text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-foreground text-sm md:text-base">
                          Casos bem apresentados deixaram de impressionar por si só
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 md:mt-8 space-y-3 md:space-y-4 text-base md:text-lg lg:text-xl text-foreground leading-relaxed">
                  <p>
                    Muitos cirurgiões seguem tentando crescer repetindo movimentos que funcionaram no passado, mas que hoje já não entregam o mesmo resultado.
                  </p>
                  <p>
                    E é aí que surge a sensação de estar trabalhando mais sem ter clareza se isso está, de fato, levando a algum lugar melhor.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:hidden"
          >
            <img
              src="/elemento-bloco.png"
              alt="Elemento visual"
              className="w-full h-auto max-w-xs mx-auto"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConversationRepetition;
