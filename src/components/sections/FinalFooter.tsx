const FinalFooter = () => {
  return (
    <footer className="py-12 md:py-16 bg-muted/20 border-t border-border">
      <div className="container-document">
        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and company name */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start space-y-4">
            <img
              src="/assinatura-marca.png"
              alt="Plastic Competitive Career - Assinatura de Marca"
              className="h-16 w-auto object-contain"
            />
            <h3 className="text-lg font-semibold text-foreground text-center lg:text-left">
              AVANT GARDE ACADEMY LTDA
            </h3>
            <p className="text-sm text-muted-foreground text-center lg:text-left">
              Plastic Competitive Career 2026
            </p>
          </div>

          {/* Company info */}
          <div className="lg:col-span-1 space-y-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
              Empresa
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-medium">CNPJ:</span> 63.341.342/0001-95
              </p>
              <p>
                <span className="font-medium">CRM-RS:</span> 36809
              </p>
              <p>
                <span className="font-medium">RQE:</span> 32860
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1 space-y-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
              Contato
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-medium">Telefone:</span> (21) 3174-1768
              </p>
              <p>
                <span className="font-medium">E-mail:</span> team@breastavantgarde.com
              </p>
              <a
                href="https://plasticavantgarde.com/termos-de-uso/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline transition-colors inline-block mt-2"
              >
                TERMOS DE USO
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="lg:col-span-1 space-y-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
              Endereço
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="leading-relaxed">
                Alameda Rio Negro, 503, Sala 2020
                <br />
                Alphaville Centro Industrial e Empresarial
                <br />
                Barueri – SP
                <br />
                CEP: 06454-000
              </p>
            </div>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs leading-relaxed text-muted-foreground/80 text-center lg:text-left">
              <strong className="text-foreground">Aviso Legal:</strong> "Nenhuma informação contida neste produto deve ser interpretada como uma afirmação da obtenção de resultados. Qualquer referência ao desempenho passado ou potencial de uma estratégia abordada no conteúdo não é, e não deve ser interpretada como uma recomendação ou como garantia de qualquer resultado específico."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FinalFooter;
