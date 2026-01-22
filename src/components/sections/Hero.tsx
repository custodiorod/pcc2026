import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-8 md:pt-16 lg:pt-20 pb-12 bg-background relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: 'url("/capa-sessao-1.png")' }}
      />

      <div className="container-document relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Badge, Headline, Subheadline - Mobile top, Desktop left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-1 space-y-8 lg:space-y-6"
          >
            {/* Logo/Signature Image */}
            <div className="mb-4 md:mb-6">
              <img
                src="/assinatura-marca.png"
                alt="Plastic Competitive Career - Assinatura de Marca"
                className="h-12 md:h-20 lg:h-24 w-auto object-contain"
              />
            </div>

            {/* Badge */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground">
                Plastic Competitive Career
              </span>
              <span className="w-8 h-px bg-border" />
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground">
                2026
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-foreground text-balance leading-tight">
              Por que tantos cirurgiões bons estão ficando invisíveis, enquanto cirurgiões medianos estão virando referência?
            </h1>

            {/* Subheadline */}
            <h2 className="text-xl md:text-2xl font-serif font-normal text-muted-foreground text-balance leading-relaxed">
              O jogo da competição mudou.
              <span className="text-foreground">
                {" "}E fingir que não custa caro.
              </span>
            </h2>

            {/* Intro text & CTA - desktop only */}
            <div className="hidden lg:block space-y-8">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Uma conversa honesta entre cirurgiões que não querem sofrer com a
                competitividade em 2026.
              </p>

              <div className="pt-4">
                <Button variant="cta" size="cta" asChild>
                  <a href="https://form.typeform.com/to/USAaQZyg" target="_blank" rel="noopener noreferrer">Fazer Aplicação</a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right: Video VSL */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-2"
          >
            <div className="w-full rounded-lg shadow-2xl">
              <iframe
                src="https://player.scaleup.com.br/embed/955da9df69ec528f1b4def3648e20dd6345be9bf"
                title="vsl Dr Max"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  width: '100%',
                  aspectRatio: '16 / 9',
                  border: '0px',
                  margin: '0px auto'
                }}
              />
            </div>

            {/* Intro text & CTA - mobile only, below video */}
            <div className="mt-8 lg:hidden space-y-6">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Uma conversa honesta entre cirurgiões que não querem sofrer com a
                competitividade em 2026.
              </p>

              <div className="pt-4">
                <Button variant="cta" size="cta" asChild>
                  <a href="https://form.typeform.com/to/USAaQZyg" target="_blank" rel="noopener noreferrer">Fazer Aplicação</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="24"
          height="40"
          viewBox="0 0 24 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-10 text-foreground/40"
        >
          <path
            d="M12 2L12 38M12 38L5 31M12 38L19 31"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
