import { motion } from "framer-motion";
import { MarketFeatures } from "@/components/ui/market-features";

const Letter = () => {
  return (
    <>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground text-balance leading-tight mb-12">
                <span className="block">
                  Essa conversa é entre colegas.
                  <span className="animate-pulse"></span>
                </span>
              </h2>

              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Entre cirurgiões plásticos que estão fazendo tudo certo… e mesmo
                assim sentem que a carreira não avança na proporção do que entregam.
              </p>

              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                E eu vou te dizer com clareza:
                <strong className="font-semibold"> o que falta não é esforço.</strong>
              </p>

              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                O que falta é estrutura — do tipo que o jogo novo exige.
              </p>

              <div className="divider-subtle my-12" />

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Porque o mercado mudou.
              </p>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                E o que fazia diferença alguns anos atrás… hoje já não separa ninguém.
              </p>

              {/* Market Features */}
              <div className="my-8">
                <MarketFeatures />
              </div>

              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Isso tudo continua sendo necessário.
                <strong className="font-semibold"> Só que agora… é só o básico.</strong>
              </p>

              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                E quando todo mundo chega no mesmo lugar, o jogo muda de nível.
              </p>

              <div className="divider-subtle my-6 md:my-12" />

              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Só que aqui vem a parte desconfortável.
              </p>

              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                A verdade dura é que hoje tem cirurgião menos técnico do que você ganhando mais relevância, mais agenda e mais autoridade percebida.
              </p>

              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                <strong className="font-semibold">E não é porque ele é melhor cirurgião.</strong>
              </p>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                É porque ele entendeu antes que nós que cirurgia não é só técnica.
                <span className="text-foreground"> É carreira. </span>
                <span className="text-foreground">É percepção. </span>
                <span className="text-foreground">É condução.</span>
              </p>

              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                E nesse cenário novo, o que manda não é quem opera melhor.
              </p>

              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                É quem sustenta uma carreira competitiva em{" "}
                <strong className="font-semibold">quatro pilares que a maioria ignora.</strong>
              </p>

              <div className="divider-subtle my-12" />

              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Eu vou falar isso do jeito mais direto possível:
              </p>

              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Hoje você não perde paciente porque falta resultado.
              </p>

              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Você perde porque falta clareza do porquê escolher você.
              </p>

              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Você perde porque o seu valor não está óbvio antes da consulta.
              </p>

              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Você perde porque a sua presença não comunica o nível que você entrega.
              </p>

              <p className="text-lg md:text-xl text-foreground leading-relaxed mt-8">
                E se isso te incomoda, ótimo.
              </p>

              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                É sinal de que você está enxergando o jogo como ele é.
              </p>
            </motion.article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Letter;
