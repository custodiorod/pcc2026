import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SilkBackgroundAnimation } from "@/components/ui/silk-background-animation";

const ApplicationSection = () => {
  return (
    <section id="aplicacao" className="section-spacing bg-muted/30 relative overflow-hidden">
      <SilkBackgroundAnimation />
      <div className="container-document max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 space-y-3 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground text-balance">
            A Aplicação Seletiva
          </h2>
          <p className="text-lg text-foreground">
            O Plastic Competitive Career não é aberto para todos.
          </p>
          <p className="text-lg text-muted-foreground">
            Existe um processo de aplicação, porque existe compromisso dos dois lados.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="rounded-lg bg-card text-card-foreground relative h-full w-full overflow-hidden border transition-all duration-300 border-primary shadow-lg shadow-primary/20 ring-2 ring-primary/20 p-3 md:p-5 lg:p-8"
          >
            {/* Background watermark */}
            <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.03]">
              <span className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-black leading-none tracking-tighter">
                2026
              </span>
            </div>

            {/* Header */}
            <div className="flex flex-col items-center border-b pb-4 md:pb-6 lg:pb-8 border-border relative z-10">
              <span className="mb-2 md:mb-4 lg:mb-6 font-serif text-lg md:text-xl lg:text-2xl text-foreground">
                Processo Seletivo
              </span>
              <span className="mb-2 md:mb-3 lg:mb-4 font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-foreground">
                2026
              </span>
              <span className="text-center text-[10px] md:text-xs lg:text-sm text-muted-foreground">
                Plastic Competitive Career
              </span>
            </div>

            {/* Checklist */}
            <div className="space-y-3 md:space-y-4 lg:space-y-6 py-5 md:py-8 lg:py-12 relative z-10">
              <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
                <span className="grid size-3 md:size-4 lg:size-5 place-content-center rounded-full bg-primary text-[10px] md:text-xs lg:text-sm text-primary-foreground shrink-0">
                  <Check className="size-2 md:size-3 lg:size-3.5" strokeWidth={3} />
                </span>
                <span className="text-xs md:text-sm lg:text-base text-muted-foreground">
                  Avaliamos perfil, momento e alinhamento
                </span>
              </div>

              <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
                <span className="grid size-3 md:size-4 lg:size-5 place-content-center rounded-full bg-primary text-[10px] md:text-xs lg:text-sm text-primary-foreground shrink-0">
                  <Check className="size-2 md:size-3 lg:size-3.5" strokeWidth={3} />
                </span>
                <span className="text-xs md:text-sm lg:text-base text-muted-foreground">
                  As vagas são limitadas por estrutura
                </span>
              </div>

              <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
                <span className="grid size-3 md:size-4 lg:size-5 place-content-center rounded-full bg-primary text-[10px] md:text-xs lg:text-sm text-primary-foreground shrink-0">
                  <Check className="size-2 md:size-3 lg:size-3.5" strokeWidth={3} />
                </span>
                <span className="text-xs md:text-sm lg:text-base text-muted-foreground">
                  Nem todos são convidados
                </span>
              </div>

              <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
                <span className="grid size-3 md:size-4 lg:size-5 place-content-center rounded-full bg-primary text-[10px] md:text-xs lg:text-sm text-primary-foreground shrink-0">
                  <Check className="size-2 md:size-3 lg:size-3.5" strokeWidth={3} />
                </span>
                <span className="text-xs md:text-sm lg:text-base text-muted-foreground">
                  Nem todos escolhem seguir
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://form.typeform.com/to/USAaQZyg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md h-10 w-full mt-3 md:mt-4 lg:mt-6 py-3 md:py-4 lg:py-5 px-4 md:px-6 lg:px-8 text-xs md:text-sm lg:text-base leading-relaxed"
            >
              Fazer aplicação para o Plastic Competitive Career 2026
            </a>
          </motion.div>
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-center"
        >
          <p className="text-lg text-foreground leading-relaxed">
            Isso não é escassez artificial.<br />
            <strong className="font-semibold">É responsabilidade.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationSection;
