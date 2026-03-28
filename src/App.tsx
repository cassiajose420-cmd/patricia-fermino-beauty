/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Facebook,
  Instagram, 
  CheckCircle2, 
  Award, 
  Star, 
  Sparkles, 
  Clock, 
  ChevronRight,
  X,
  MapPin,
  Heart
} from 'lucide-react';

const EXPERT = {
  name: "Patrícia Fermino Beauty",
  role: "Especialista em Extensão de Cílios",
  description: "Empreendedora apaixonada pela beleza, especialista em transformar olhares e elevar a autoestima de mulheres. Ministra cursos de Extensão & Lash Lifting e é referência em Reconstrução de Sobrancelhas.",
  city: "Itaporanga/SP",
  whatsapp: "https://wa.me/5515998064308",
  facebook: "https://www.facebook.com/paty.fermino.oliveira/",
  instagram: "https://www.instagram.com/patricia_fermino_beauty?igsh=MWhxMGM3cWZ4a3JkNg%3D%3D&utm_source=qr&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn7nhFIABhvrr1hOmQw2nTCDYFegMPmyiO_sWtIIDSiSkN0G5WkUhZmJnemiI_aem_YD3P8AIsFHCav7M7ZzrHFA",
  images: {
    hero: "https://i.imgur.com/y9YyNbB.png",
    expert2: "https://i.imgur.com/FmVnO9F.png",
    expert3: "https://i.imgur.com/h5C2PeU.png",
    certificate: "https://i.imgur.com/AdMbCTb.jpeg",
    results: [
      "https://i.imgur.com/DHpYRJB.jpeg",
      "https://i.imgur.com/QqelOFM.jpeg",
      "https://i.imgur.com/sTy28o9.jpeg",
      "https://i.imgur.com/SlIMlkA.jpeg",
      "https://i.imgur.com/CYdQQdN.jpeg",
      "https://i.imgur.com/eumYxYL.jpeg",
      "https://i.imgur.com/dTO0PJu.jpeg",
      "https://i.imgur.com/mRuVHzV.jpeg",
      "https://i.imgur.com/7Y3Z2SR.jpeg",
      "https://i.imgur.com/ReiLVvZ.jpeg"
    ]
  }
};

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-[#c5a059]/30">
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white p-2 bg-white/10 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage} 
              alt="Resultado" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-between overflow-hidden bg-[#0a0a0a] pt-12">
        <div className="absolute inset-0 z-0">
          <img 
            src={EXPERT.images.hero} 
            alt={EXPERT.name} 
            className="w-full h-full object-cover object-top opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 mt-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c5a059]/50 bg-[#0a0a0a]/40 backdrop-blur-sm text-[#c5a059] text-xs font-bold tracking-widest uppercase">
            <Award size={14} />
            Especialista em Extensão de Cílios
          </div>
        </motion.div>

        <div className="relative z-10 w-full max-w-xl px-6 pb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-4">
              Eu sou <span className="text-[#c5a059]">{EXPERT.name}</span>, sua especialista em cílios em {EXPERT.city.split('/')[0]}.
            </h1>
            <p className="text-lg text-zinc-300 mb-8 max-w-md mx-auto">
              Realço a sua beleza natural com técnicas exclusivas e um olhar artístico que você só encontra aqui.
            </p>
            
            <a 
              href={EXPERT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-[#c5a059] hover:bg-[#a68446] text-[#0a0a0a] font-bold py-5 px-8 rounded-full shadow-xl shadow-[#c5a059]/20 transition-all transform hover:scale-105 active:scale-95 gap-3 text-lg"
            >
              <MessageCircle size={24} />
              Quero marcar um horário gratuito
            </a>
            <p className="mt-4 text-sm text-zinc-400 flex items-center justify-center gap-2">
              <Clock size={14} />
              Resposta rápida • Sem compromisso
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2">
              <img 
                src={EXPERT.images.expert2} 
                alt="Patrícia Fermino" 
                className="rounded-2xl shadow-2xl w-full aspect-[3/4] object-cover border border-zinc-800"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-serif text-white">Muito prazer, eu sou a Patrícia.</h2>
              <p className="text-zinc-400 leading-relaxed">
                Minha missão é muito mais que aplicar cílios; é devolver a confiança que cada mulher merece sentir ao se olhar no espelho. Sou apaixonada pela arte da beleza e dedico minha vida a aperfeiçoar técnicas que valorizam o seu olhar de forma única e segura.
              </p>
              <ul className="space-y-4">
                {[
                  "Especialista em Extensão de Cílios & Lash Lifting",
                  "Expert em Reconstrução de Sobrancelhas",
                  "Mentora de Cursos Profissionalizantes",
                  "Foco total em saúde ocular e naturalidade"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <CheckCircle2 className="text-[#c5a059] shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-20 px-4 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Resultados que encantam</h2>
          <p className="text-zinc-400">Confira algumas das transformações reais realizadas em meu studio.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
          {EXPERT.images.results.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer shadow-lg border border-zinc-800"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                alt={`Resultado ${i + 1}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-8 text-xs text-zinc-500 italic">
          *Resultados podem variar de pessoa para pessoa.
        </p>
      </section>

      {/* 4. POR QUE CONFIAR EM MIM? */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-serif text-center text-white mb-12">Por que escolher o meu atendimento?</h2>
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <Sparkles className="text-[#c5a059]" />,
                title: "Avaliação Personalizada",
                desc: "Cada olhar é único. Analiso seu rosto e fios para indicar a melhor técnica."
              },
              {
                icon: <Award className="text-[#c5a059]" />,
                title: "Materiais Premium",
                desc: "Utilizo apenas produtos de alta qualidade, testados e aprovados para sua segurança."
              },
              {
                icon: <Heart className="text-[#c5a059]" />,
                title: "Atendimento Humanizado",
                desc: "Um ambiente acolhedor onde você é a prioridade absoluta do início ao fim."
              },
              {
                icon: <CheckCircle2 className="text-[#c5a059]" />,
                title: "Foco no Resultado Real",
                desc: "Minha meta é que você saia se sentindo maravilhosa e com cílios impecáveis."
              }
            ].map((card, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 flex gap-5 items-start">
                <div className="p-3 bg-zinc-900 rounded-xl shadow-sm border border-zinc-800">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{card.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-16 px-6 bg-[#c5a059] text-[#0a0a0a] text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-serif mb-4 text-[#0a0a0a]">Sua beleza não pode esperar.</h2>
          <p className="mb-8 opacity-90">Garanta agora seu horário de avaliação gratuita e tire todas as suas dúvidas.</p>
          <a 
            href={EXPERT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full bg-[#0a0a0a] text-[#c5a059] font-bold py-4 px-8 rounded-full shadow-lg gap-3 text-lg transition-transform hover:scale-105"
          >
            <MessageCircle size={22} />
            Quero marcar um horário gratuito
          </a>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-serif text-center text-white mb-12">Como agendar seu horário</h2>
          <div className="space-y-12">
            {[
              { step: "01", title: "Chame no WhatsApp", desc: "Clique nos botões desta página para iniciar uma conversa direta comigo." },
              { step: "02", title: "Escolha seu Horário", desc: "Verificamos juntas a melhor data para sua avaliação gratuita no studio." },
              { step: "03", title: "Avaliação & Procedimento", desc: "No dia, realizamos a análise e definimos o melhor caminho para o seu olhar." }
            ].map((item, i) => (
              <div key={i} className="relative flex gap-6">
                <div className="text-5xl font-serif text-zinc-800 absolute -left-4 -top-4 z-0">{item.step}</div>
                <div className="relative z-10 flex gap-6">
                  <div className="w-1 bg-[#c5a059] rounded-full shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-zinc-400">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 text-center">
            <p className="text-[#c5a059] font-medium">Lembre-se: Marcar um horário é totalmente gratuito e sem compromisso.</p>
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS - BASTIDORES */}
      <section className="py-20 px-6 bg-zinc-900/30 overflow-hidden">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-serif text-white mb-4">Autoridade & Bastidores</h2>
          <p className="text-zinc-400">Comprometimento com a excelência em cada detalhe.</p>
        </div>
        
        <div className="flex flex-col gap-6 max-w-xl mx-auto">
          <div className="relative group">
            <img 
              src={EXPERT.images.certificate} 
              alt="Certificado Profissional" 
              className="rounded-2xl shadow-lg w-full border border-zinc-800"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#0a0a0a]/90 backdrop-blur p-3 rounded-xl text-sm font-medium text-zinc-100 shadow-sm border border-zinc-800">
              Certificação e atualização constante para você.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={EXPERT.images.expert3} 
              alt="Atendimento" 
              className="rounded-2xl shadow-md aspect-square object-cover border border-zinc-800"
              referrerPolicy="no-referrer"
            />
            <div className="bg-zinc-900 p-6 rounded-2xl shadow-md flex flex-col justify-center items-center text-center border border-zinc-800">
              <Star className="text-[#c5a059] mb-2" fill="currentColor" />
              <p className="text-sm font-bold text-white">Atendimento Exclusivo</p>
              <p className="text-xs text-zinc-500 mt-1">Sua satisfação é o meu maior troféu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 px-6 bg-[#0a0a0a] text-center">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Pronta para transformar o seu olhar hoje?
            </h2>
            <p className="text-xl text-zinc-400 mb-10">
              Não deixe para depois a autoestima que você pode ter agora. Clique abaixo e agende sua avaliação.
            </p>
            
            <a 
              href={EXPERT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-[#c5a059] hover:bg-[#a68446] text-[#0a0a0a] font-bold py-6 px-10 rounded-full shadow-2xl shadow-[#c5a059]/20 transition-all transform hover:scale-105 active:scale-95 gap-4 text-xl"
            >
              <MessageCircle size={28} />
              QUERO MARCAR UM HORÁRIO GRATUITO
            </a>
            
            <div className="mt-10 flex flex-wrap justify-center gap-6 opacity-60">
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-400">
                <CheckCircle2 size={16} />
                Seguro
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-400">
                <CheckCircle2 size={16} />
                Profissional
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-400">
                <CheckCircle2 size={16} />
                Sem Compromisso
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-12 px-6 bg-zinc-900 text-white">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-serif mb-2">{EXPERT.name}</h3>
          <p className="text-zinc-400 text-sm mb-6">{EXPERT.role} • {EXPERT.city}</p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href={EXPERT.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a 
              href={EXPERT.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a 
              href={EXPERT.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
            >
              <MessageCircle size={24} />
            </a>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-xs text-zinc-500 space-y-2">
            <p>© {new Date().getFullYear()} {EXPERT.name}. Todos os direitos reservados.</p>
            <p className="flex items-center justify-center gap-1">
              Feito com <Heart size={10} className="text-red-500 fill-current" /> para realçar sua beleza.
            </p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp (Mobile Only) */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a 
          href={EXPERT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-[#c5a059] text-[#0a0a0a] rounded-full shadow-2xl animate-bounce"
        >
          <MessageCircle size={32} />
        </a>
      </div>
    </div>
  );
}
