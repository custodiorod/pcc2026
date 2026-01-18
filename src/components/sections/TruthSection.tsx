import { motion } from "framer-motion";
import surgeryBg from "@/assets/surgery-bg.png";

const TruthSection = () => {
  return (
    <section className="relative section-spacing overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={surgeryBg}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/95" />
      </div>

      <div className="container-document relative z-10">
        <div className="content-column">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground text-balance">
              A verdade desconfortável
            </h2>

            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Hoje tem cirurgião menos técnico do que você ganhando mais
              relevância, mais agenda e mais autoridade percebida.
            </p>

            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              <strong className="font-semibold">
                E não é porque ele é melhor cirurgião.
              </strong>
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              É porque ele entendeu antes que cirurgia não é só técnica.{" "}
              <span className="text-foreground">
                É carreira. É percepção. É condução.
              </span>
            </p>

            <div className="divider-subtle my-12" />

            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Nesse cenário novo, o que manda não é quem opera melhor.
            </p>

            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              É quem sustenta uma carreira competitiva em{" "}
              <strong className="font-semibold">
                quatro pilares que a maioria ignora.
              </strong>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TruthSection;
