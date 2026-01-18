import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Application = () => {
  return (
    <section id="aplicacao" className="section-spacing bg-muted/30">
      <div className="container-document">
        <div className="content-column">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground text-balance">
              A aplicação seletiva
            </h2>

            <p className="text-lg text-foreground leading-relaxed">
              O Plastic Competitive Career não é aberto para todos.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Existe um processo de aplicação, porque existe compromisso dos
              dois lados.
            </p>

            <ul className="space-y-3 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-primary mt-3 shrink-0" />
                <span>Avaliamos perfil, momento e alinhamento</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-primary mt-3 shrink-0" />
                <span>As vagas são limitadas por estrutura</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-primary mt-3 shrink-0" />
                <span>Nem todos são convidados</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-primary mt-3 shrink-0" />
                <span>Nem todos escolhem seguir</span>
              </li>
            </ul>

            <p className="text-lg text-foreground leading-relaxed">
              Isso não é escassez artificial.{" "}
              <strong className="font-semibold">É responsabilidade.</strong>
            </p>

            <div className="pt-8 flex justify-center">
              <Button variant="cta" size="cta-lg" asChild>
                <a
                  href="https://forms.gle/example"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fazer Aplicação para o PCC 2026
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Application;
