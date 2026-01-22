import { motion } from "framer-motion";

const TheDecision = () => {
  return (
    <section
      className="section-spacing bg-background"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.04) 0px 2px 20px, rgba(0, 0, 0, 0.04) 0px -2px 20px",
      }}
    >
      <div className="container-document">
        <div className="content-column text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground text-balance">
              A decisão
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              2026 vai acontecer de qualquer forma.<br />
              A diferença é se você vai atravessá-lo<br />
              repetindo decisões conhecidas —<br />
              ou fazendo escolhas mais conscientes sobre a carreira que está construindo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TheDecision;
