import { motion } from "framer-motion";

const YearChangesEverything = () => {
  return (
    <section className="section-spacing bg-muted/30 relative overflow-hidden">
      <div className="container-document relative z-10">
        <div className="content-column text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative"
          >
            {/* Background watermark */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none -z-10">
              <span className="text-[10rem] md:text-[14rem] lg:text-[18rem] font-black text-muted-foreground/5 leading-none tracking-tighter">
                2026
              </span>
            </div>

            {/* Text content */}
            <div className="space-y-4 relative z-10">
              <p className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground font-semibold">
                Um ano muda tudo.
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Desde que seja bem decidido.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <a
                href="#aplicacao"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground font-sans font-medium tracking-wide hover:bg-primary/90 hover:translate-y-[-1px] hover:shadow-lg active:translate-y-0 active:shadow-md rounded-sm h-14 px-10 text-base"
              >
                Fazer Aplicação
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YearChangesEverything;
