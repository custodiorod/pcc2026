import { motion } from "framer-motion";
import { X } from "lucide-react";

const wontWorkItems = [
  {
    title: "Tecnologia isolada",
    description: "Apenas ter o melhor equipamento não diferencia mais. Todos têm acesso às mesmas tecnologias.",
  },
  {
    title: "Estrutura grande sem gestão",
    description: "Clínicas infladas sem clareza financeira geram custos ocultos e baixa previsibilidade. O tamanho sem estratégia vira peso, não vantagem.",
  },
  {
    title: "Casos no Instagram como única comunicação",
    description: "Antes e depois viraram commodity. Quando todo mundo mostra, ninguém se destaca. A paciente quer conexão, não apenas vitrine de resultados.",
    span: 2,
  },
  {
    title: "Clínicas infladas com baixa previsibilidade",
    description: "Estrutura cara não garante retorno. Sem processos claros e gestão eficiente, o overhead consome a margem.",
  },
  {
    title: "Crescimento sem planejamento",
    description: (
      <>Crescer sem direção é estagnar sofisticadamente. <span className="font-semibold text-destructive">Volume sem estratégia gera mais trabalho, não mais resultado.</span></>
    ),
  },
];

const WhatWontWork = () => {
  return (
    <section className="bg-muted/30">
      <div className="container-document py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground text-balance mb-4">
              O que não vai funcionar em 2026
            </h2>
            <p className="text-lg text-muted-foreground">
              Não funciona mais apostar exclusivamente em:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4">
            {wontWorkItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative border border-dashed border-destructive/40 rounded-lg p-6 bg-card hover:bg-destructive/5 min-h-[180px] transition-colors duration-300 flex flex-col justify-between md:col-span-1 ${item.span === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="absolute -top-3 -right-3">
                  <div className="bg-destructive/10 rounded-full p-1">
                    <X className="text-destructive" width={20} height={20} strokeWidth={2.5} />
                  </div>
                </div>
                <div className="relative z-10 space-y-3 pr-8">
                  <h3 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-2xl ml-auto text-left px-4 mt-12 space-y-3">
            <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
              Nada disso é errado.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Mas nada disso sustenta uma carreira sozinho no cenário atual.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWontWork;
