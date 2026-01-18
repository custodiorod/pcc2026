import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-spacing bg-background">
      <div className="container-document">
        <div className="content-column">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground text-balance leading-tight">
              Por que tantos cirurgiões bons estão ficando invisíveis?
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl font-serif font-normal text-muted-foreground text-balance leading-relaxed">
              O jogo da competição mudou.{" "}
              <span className="text-foreground">
                E fingir que não, custa caro.
              </span>
            </p>

            {/* Intro text */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-[600px]">
              Uma conversa honesta entre cirurgiões que não querem sofrer com a
              competitividade em 2026.
            </p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="pt-4"
            >
              <Button variant="cta" size="cta" asChild>
                <a href="#aplicacao">Fazer Aplicação</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
