const FinalFooter = () => {
  return (
    <footer className="py-12 md:py-16 bg-muted/20 border-t border-border">
      <div className="container-document">
        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and company name */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="180"
              height="36"
              viewBox="0 0 256 51"
              fill="none"
              className="h-9 w-auto"
            >
              <path
                d="M0.0452802 24.1157C-0.402112 31.5782 2.48263 38.7894 7.95386 43.8978L9.04904 44.9213L10.0324 45.6424C14.3525 48.8805 19.4742 50.6066 24.8569 50.6484H25.0247C31.6004 50.6484 37.8173 48.0756 42.5242 43.4093C47.3942 38.5801 50.0739 32.1504 50.0739 25.2974V23.3945H34.569L26.1711 10.2282C25.8449 9.70711 25.253 9.38144 24.6192 9.37679H21.124L29.9972 23.3899H16.5755C15.3638 23.3899 14.9537 24.539 14.5156 25.3393C14.4271 25.4974 14.3665 25.6137 14.2919 25.7347L7.42725 37.7333L6.53246 36.1748C4.71493 33.0065 3.74558 29.3962 3.7316 25.7347C3.685 14.7038 12.2554 5.35244 23.2444 4.45453C30.9992 3.8311 38.4651 7.42277 42.7479 13.8245C42.8178 13.9315 42.8691 13.992 42.897 14.0339L42.953 14.1037H47.2498L47.1006 13.8199C42.2725 4.83137 32.5371 -0.295598 22.3077 0.793069C10.34 2.06318 0.767632 12.0892 0.0452802 24.1157ZM46.2525 26.279V27.5864C45.9868 30.4244 45.1386 33.2251 43.7872 35.7188L42.9436 37.282L36.1256 26.279H46.2525ZM31.5351 26.279L40.2872 40.4969L39.6814 41.0691C35.7108 44.8376 30.5099 46.9125 25.034 46.9125C20.2571 46.9125 15.7366 45.3586 11.9617 42.4183L9.9345 40.9202L18.3604 26.279H31.5351Z"
                fill="#607573"
              ></path>
              <path
                d="M79.1171 23.683L77.7936 20.7752H70.5934L69.2698 23.683H66.6927L73.1006 10.391H75.4355L81.8667 23.683H79.1171ZM71.4322 18.9236H76.9687L74.2238 12.8661L71.4322 18.9236Z"
                fill="#607573"
              ></path>
              <path
                d="M93.0608 23.683H90.6048L84.1969 10.391H86.9651L91.8771 21.2079L96.8404 10.391H99.4874L93.0562 23.683H93.0608Z"
                fill="#607573"
              ></path>
              <path
                d="M114.251 23.683L112.928 20.7752H105.728L104.404 23.683H101.827L108.235 10.391H110.57L117.001 23.683H114.251ZM106.571 18.9236H112.108L109.363 12.8661L106.571 18.9236Z"
                fill="#607573"
              ></path>
              <path
                d="M125.306 10.391L133.326 20.7287V10.391H135.805V23.683H132.963L124.942 13.3453V23.683H122.486V10.391H125.306Z"
                fill="#607573"
              ></path>
              <path
                d="M141.538 12.359V10.3864H154.614V12.359H149.316V23.683H146.836V12.359H141.538Z"
                fill="#607573"
              ></path>
              <path
                d="M175.134 12.0473C172.366 12.0473 170.609 14.1409 170.609 17.0486C170.609 19.9564 172.557 22.0267 175.208 22.0267C177.543 22.0267 179.184 20.6077 179.589 18.5188H174.845V16.6671H181.612V23.6877H179.78C179.734 23.3759 179.682 22.799 179.636 22.0035L179.515 22.1477C178.527 23.4225 177.059 24.0459 175.134 24.0459C170.921 24.0459 168.032 21.0404 168.032 17.0486C168.032 13.0569 170.921 10.0281 175.087 10.0281C176.844 10.0281 178.289 10.4841 179.421 11.3959C180.554 12.3078 181.23 13.3686 181.444 14.5689H179.035C178.601 12.9359 177.059 12.0705 175.134 12.0426V12.0473Z"
                fill="#607573"
              ></path>
              <path
                d="M199.167 23.683L197.844 20.7752H190.644L189.32 23.683H186.743L193.151 10.391H195.486L201.917 23.683H199.167ZM191.487 18.9236H197.023L194.279 12.8661L191.487 18.9236Z"
                fill="#607573"
              ></path>
              <path
                d="M219.225 14.4526C219.225 15.6808 218.769 16.6625 217.855 17.4115C217.324 17.8442 216.625 18.1327 215.786 18.3234L219.854 23.683H216.89L213.088 18.5142H209.858V23.683H207.402V10.391H213.81C216.867 10.391 219.23 11.6193 219.23 14.4526H219.225ZM216.653 14.4526C216.653 12.8661 215.474 12.359 213.81 12.359H209.858V16.5415H213.81C215.474 16.5415 216.653 16.0344 216.653 14.4479V14.4526Z"
                fill="#607573"
              ></path>
              <path
                d="M225.731 10.391H231.268C233.821 10.391 235.746 11.0377 237.023 12.3637C238.323 13.6849 238.971 15.2482 238.971 17.0533C238.971 18.8584 238.323 20.3937 237.023 21.7197C235.746 23.041 233.821 23.6923 231.268 23.6923H225.731V10.391ZM235.145 13.7082C234.302 12.8196 233.001 12.3637 231.268 12.3637H228.187V21.715H231.268C233.001 21.715 234.302 21.2591 235.145 20.3705C236.012 19.4586 236.445 18.3513 236.445 17.0533C236.445 15.7553 236.012 14.6247 235.145 13.7129V13.7082Z"
                fill="#607573"
              ></path>
              <path
                d="M256 10.391V12.3637H247.621V15.9228H255.133V17.8954H247.621V21.715H256V23.6877H245.165V10.3957H256V10.391Z"
                fill="#607573"
              ></path>
            </svg>
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
