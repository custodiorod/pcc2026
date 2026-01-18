import { motion } from "framer-motion";

const ForWho = () => {
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
              Para quem faz sentido — e para quem não
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Faz sentido */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-serif text-foreground">
                Faz sentido para você se:
              </h3>

              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-primary mt-3 shrink-0" />
                  <span>Quer sair da disputa de preço</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-primary mt-3 shrink-0" />
                  <span>Busca clareza, previsibilidade e direção</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-primary mt-3 shrink-0" />
                  <span>Entende que competitividade mudou</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-primary mt-3 shrink-0" />
                  <span>Está disposto a revisar decisões estruturais</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-primary mt-3 shrink-0" />
                  <span>Enxerga a carreira como um ativo estratégico</span>
                </li>
              </ul>
            </motion.div>

            {/* Não faz sentido */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-serif text-foreground">
                Não faz sentido se você:
              </h3>

              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50 mt-3 shrink-0" />
                  <span>Procura atalhos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50 mt-3 shrink-0" />
                  <span>Quer soluções imediatas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50 mt-3 shrink-0" />
                  <span>Não está disposto a mudar estruturas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50 mt-3 shrink-0" />
                  <span>Prefere continuar reagindo ao mercado</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
