import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Closing = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container-document">
        <div className="content-column text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground text-balance">
              Um ano muda tudo.
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
              Desde que seja bem decidido.
            </p>

            <div className="pt-8">
              <Button variant="cta" size="cta" asChild>
                <a href="#aplicacao">Fazer Aplicação</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Closing;
