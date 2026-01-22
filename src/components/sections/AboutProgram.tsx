import { motion } from "framer-motion";
import drGregory from "@/assets/dr-gregory.png";

const AboutProgram = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/capa-dobra-2.png")', minHeight: "750px" }}
    >
      <div className="container-document pt-20 pb-8 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Dr. Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              <img
                src={drGregory}
                alt="Dr. João Maximiliano"
                className="w-full h-auto object-bottom"
                loading="lazy"
                style={{ objectPosition: "center 60%" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-16"
                style={{
                  background: "linear-gradient(to top, rgb(219, 219, 219) 0%, transparent 100%)",
                }}
              ></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground text-balance">
              O Plastic Competitive Career
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              O Plastic Competitive Career é um processo de desenvolvimento de carreira voltado para cirurgiões plásticos que decidiram{" "}
              <span className="text-foreground font-medium">elevar seu nível competitivo em 2026.</span>
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Ele foi desenhado para quem entende que carreira:
            </p>

            <ul className="space-y-3 text-lg text-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-primary mt-3 shrink-0"></span>
                <span>não se constrói em decisões isoladas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-primary mt-3 shrink-0"></span>
                <span>não evolui apenas com volume</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-primary mt-3 shrink-0"></span>
                <span>não se sustenta sem clareza de direção</span>
              </li>
            </ul>

            <p className="text-lg text-foreground leading-relaxed">
              O foco está em organizar decisões que realmente sustentam crescimento, com visão de médio e longo prazo.
            </p>

            <div className="pt-4">
              <p className="text-base text-muted-foreground">
                <span className="font-medium text-foreground">Assinado,</span>
                <br />
                Dr. João Maximiliano
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutProgram;
