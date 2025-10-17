import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Zap, Droplets, TrendingUp, ShieldCheck, Clock, Star } from "lucide-react";
import productHero from "@/assets/product-hero.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const AFFILIATE_LINK = "https://app.monetizze.com.br/r/ASY18248645";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
            <div className="space-y-6">
              <Badge className="bg-primary text-primary-foreground">
                ✨ Fórmula Natural Avançada
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                O Segredo para Acelerar Seu <span className="text-primary">Metabolismo</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Super Green Black combina ingredientes naturais poderosos que trabalham em sinergia para ajudar você a conquistar o corpo que sempre desejou, de forma saudável e sustentável.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 glow-gold text-lg px-8"
                  asChild
                >
                  <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                    Ver Ofertas Exclusivas →
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Saiba Mais
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-muted border-2 border-background" />
                  ))}
                </div>
                <div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">+1.247 pessoas satisfeitas</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img
                src={productHero}
                alt="Super Green Black - Suplemento em Cápsulas"
                className="relative z-10 w-full max-w-md mx-auto glow-green rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benefícios Comprovados do Super Green Black
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Uma fórmula completa que trabalha em múltiplas frentes para transformar seu corpo
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Acelera o Metabolismo",
                description: "Aumenta a queima calórica natural do corpo, ajudando você a perder peso de forma mais eficiente",
              },
              {
                icon: Droplets,
                title: "Combate a Retenção",
                description: "Elimina líquidos retidos e reduz o inchaço, revelando uma silhueta mais definida",
              },
              {
                icon: TrendingUp,
                title: "Aumenta a Energia",
                description: "Melhora sua disposição e vitalidade para você aproveitar cada momento do dia",
              },
              {
                icon: ShieldCheck,
                title: "100% Natural",
                description: "Fórmula com ingredientes naturais selecionados, sem substâncias químicas prejudiciais",
              },
              {
                icon: CheckCircle2,
                title: "Resultados Visíveis",
                description: "Primeiros resultados podem aparecer já nas primeiras semanas de uso regular",
              },
              {
                icon: Clock,
                title: "Prático e Fácil",
                description: "Cápsulas fáceis de consumir que se encaixam perfeitamente na sua rotina",
              },
            ].map((benefit, index) => (
              <Card key={index} className="p-6 border-border hover:border-primary/50 transition-all hover:glow-green animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <benefit.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona o Super Green Black?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A ciência por trás da transformação
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: "1",
                title: "Ativação Metabólica",
                description: "Os ingredientes naturais ativam seu metabolismo, aumentando a termogênese e a queima de gordura",
              },
              {
                step: "2",
                title: "Eliminação de Toxinas",
                description: "Compostos detoxificantes ajudam a eliminar líquidos retidos e toxinas acumuladas",
              },
              {
                step: "3",
                title: "Energia Sustentável",
                description: "Fornece energia constante ao longo do dia sem picos e quedas bruscas",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold glow-green">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Histórias de Sucesso Reais</h2>
            <p className="text-muted-foreground">Veja os resultados de quem já transformou a vida</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: testimonial1,
                name: "Mariana S.",
                result: "Perdeu 12kg em 3 meses",
                text: "Finalmente encontrei algo que realmente funciona! Minha energia aumentou e as roupas estão cada vez mais folgadas.",
              },
              {
                image: testimonial2,
                name: "Juliana P.",
                result: "Eliminou inchaço",
                text: "O Super Green Black me ajudou a eliminar aquele inchaço que me incomodava há anos. Me sinto muito mais leve!",
              },
              {
                image: testimonial3,
                name: "Camila R.",
                result: "Mais disposição",
                text: "Além de perder peso, minha disposição melhorou muito. Consigo fazer muito mais coisas durante o dia!",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <Badge className="mb-3 bg-primary/20 text-primary">{testimonial.result}</Badge>
                <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-primary/20 via-card to-card border-primary/30 glow-green">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Transformar Sua Vida?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Aproveite as ofertas especiais disponíveis hoje e comece sua jornada rumo ao corpo dos seus sonhos
            </p>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 glow-gold text-xl px-12 py-6"
              asChild
            >
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                👉 Ver Preço e Ofertas Atuais
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              ✅ Frete Grátis • 🔒 Compra 100% Segura • 🎁 Garantia de Satisfação
            </p>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-muted-foreground">Tire suas dúvidas sobre o Super Green Black</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Como devo tomar o Super Green Black?</AccordionTrigger>
                <AccordionContent>
                  Recomenda-se tomar 2 cápsulas ao dia, preferencialmente antes das principais refeições, acompanhadas de água. Para melhores resultados, mantenha uma alimentação equilibrada e pratique atividades físicas regularmente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Em quanto tempo verei resultados?</AccordionTrigger>
                <AccordionContent>
                  Os resultados podem variar de pessoa para pessoa, mas muitos usuários relatam mudanças positivas já nas primeiras semanas de uso consistente. Para resultados mais significativos, recomenda-se o uso por pelo menos 3 meses.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>O Super Green Black tem contraindicações?</AccordionTrigger>
                <AccordionContent>
                  Apesar de ser um produto natural, gestantes, lactantes e pessoas com condições médicas pré-existentes devem consultar um médico antes de iniciar o uso. Não exceda a dose recomendada.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Qual a composição do produto?</AccordionTrigger>
                <AccordionContent>
                  Super Green Black é formulado com extratos vegetais naturais selecionados, incluindo compostos que auxiliam no metabolismo, eliminação de líquidos e fornecimento de energia. A fórmula é livre de substâncias químicas prejudiciais.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Existe garantia de satisfação?</AccordionTrigger>
                <AccordionContent>
                  Sim! O produto conta com garantia de satisfação. Se não ficar satisfeito com os resultados, você pode solicitar o reembolso dentro do prazo estabelecido pela empresa.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Product Summary */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-8 max-w-4xl mx-auto border-primary/30">
            <h2 className="text-2xl font-bold mb-6 text-center">Resumo do Produto</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-primary">Nome do Produto:</h3>
                <p className="text-muted-foreground mb-4">Super Green Black</p>

                <h3 className="font-semibold mb-2 text-primary">Formato:</h3>
                <p className="text-muted-foreground mb-4">Cápsulas</p>

                <h3 className="font-semibold mb-2 text-primary">Categoria:</h3>
                <p className="text-muted-foreground mb-4">Suplemento Natural</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-primary">Principais Benefícios:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Acelera o metabolismo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Combate retenção de líquidos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Aumenta disposição e energia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Auxilia na perda de peso natural</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 glow-gold"
                asChild
              >
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                  Comprar Agora com Desconto →
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Super Green Black. Todos os direitos reservados.</p>
          <p className="mt-2">
            *Os resultados podem variar de pessoa para pessoa. Este produto não substitui uma alimentação equilibrada e deve ser consumido sob orientação.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
