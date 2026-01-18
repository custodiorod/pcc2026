import { motion } from "framer-motion";

const Letter = () => {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-document">
        <div className="content-column">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Essa conversa é entre colegas.
            </p>

            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Entre cirurgiões plásticos que estão fazendo tudo certo… e mesmo
              assim sentem que a carreira não avança na proporção do que
              entregam.
            </p>

            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              E eu vou te dizer com clareza:{" "}
              <strong className="font-semibold">o que falta não é esforço.</strong>
            </p>

            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              O que falta é estrutura — do tipo que o jogo novo exige.
            </p>

            <div className="divider-subtle my-12" />

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Porque o mercado mudou. E o que fazia diferença alguns anos
              atrás… hoje já não separa ninguém.
            </p>

            <ul className="space-y-3 text-lg text-muted-foreground pl-0">
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-muted-foreground mt-3 shrink-0" />
                <span>Tecnologia virou commodity.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-muted-foreground mt-3 shrink-0" />
                <span>Instagram cheio de "antes e depois" virou o mínimo.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-muted-foreground mt-3 shrink-0" />
                <span>Clínica grande e bonita parou de impressionar.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-muted-foreground mt-3 shrink-0" />
                <span>Equipe boa deixou de ser diferencial.</span>
              </li>
            </ul>

            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Isso tudo continua sendo necessário. Só que agora…{" "}
              <strong className="font-semibold">é só o básico.</strong>
            </p>

            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              E quando todo mundo chega no mesmo lugar, o jogo muda de nível.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Letter;
