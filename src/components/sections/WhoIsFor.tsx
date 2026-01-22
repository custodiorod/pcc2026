import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const notForItems = [
  "Procura atalhos",
  "Quer soluções imediatas",
  "Não está disposto a mudar estruturas",
  "Prefere continuar reagindo ao mercado",
];

const forItems = [
  "Quer sair da disputa de preço",
  "Busca clareza, previsibilidade e direção",
  "Entende que competitividade mudou",
  "Está disposto a revisar decisões estruturais",
  "Enxerga a carreira como um ativo estratégico",
];

const WhoIsFor = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-document max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground text-balance mb-20 text-center">
            Para quem faz sentido — e para quem não
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* NOT for column */}
            <div className="space-y-5">
              <h3 className="text-xl font-semibold mb-5 text-center text-foreground">
                Não faz sentido se você:
              </h3>

              {notForItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-lg bg-card text-card-foreground shadow-sm border-2 border-border hover:border-destructive/60 transition-all duration-300"
                >
                  <div className="p-5 flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <X className="h-5 w-5 text-destructive" strokeWidth={2} />
                    </div>
                    <p className="text-base">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FOR column */}
            <div className="space-y-5">
              <h3 className="text-xl font-semibold mb-5 text-center text-primary">
                Faz sentido para você se:
              </h3>

              {forItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-lg bg-card text-card-foreground shadow-sm border-2 border-border hover:border-primary/60 transition-all duration-300"
                >
                  <div className="p-5 flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-5 w-5 text-primary" strokeWidth={2} />
                    </div>
                    <p className="text-base">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoIsFor;
