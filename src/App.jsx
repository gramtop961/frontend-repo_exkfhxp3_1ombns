import React from 'react'

const brand = {
  blue: '#2ca1d4',
  white: '#ffffff',
}

const googleDriveDirect = (id) => `https://drive.google.com/uc?export=view&id=${id}`

const heroBg = googleDriveDirect('1GqSTlOPmZjBLy6U9ctmZ3L1PBKB2BB2H')

const portfolio = [
  {
    title: 'Montra Comercial',
    before: googleDriveDirect('1o3rwE7IInEUJvUUKz1gWLwiUczsU-AIk'),
    after: googleDriveDirect('1LGG-AVmc926lSzzqinRXeCCo7FwJM5za'),
  },
  {
    title: 'Janelas Residenciais',
    before: googleDriveDirect('1bqtfujKLhbySoN30A-c7vf22LLRGVwvG'),
    after: googleDriveDirect('1RmIcCvC0WamdU5kuSHTH6j-W1NrCdUFx'),
  },
  {
    title: 'Pós-Obra',
    before: googleDriveDirect('12YnHIJxh6EBFHBMkPec5uMczn9H1wWN9'),
    after: googleDriveDirect('1l5vrv3KP6qfvrSGtYBsKMhpB9hk1FDtV'),
  },
]

function Icon({ name, className = 'w-6 h-6' }) {
  const common = `stroke-[1.8] ${className}`
  switch (name) {
    case 'store':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common}>
          <path d="M3 9h18l-2 10H5L3 9Z" />
          <path d="M3 9l2-4h14l2 4" />
          <path d="M9 13h6" />
        </svg>
      )
    case 'home':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common}>
          <path d="M3 11l9-7 9 7" />
          <path d="M5 10v10h14V10" />
        </svg>
      )
    case 'sparkle':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common}>
          <path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z" />
        </svg>
      )
    case 'repeat':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common}>
          <path d="M17 2l4 4-4 4" />
          <path d="M3 11V9a4 4 0 0 1 4-4h14" />
          <path d="M7 22l-4-4 4-4" />
          <path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
      )
    case 'camera':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common}>
          <path d="M3 8h18v12H3z" />
          <path d="M8 8l2-3h4l2 3" />
          <circle cx="12" cy="14" r="3" />
        </svg>
      )
    case 'calendar':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common}>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      )
    case 'whatsapp':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M.5 24l1.7-6.2A10.3 10.3 0 1112 22.3a10.2 10.2 0 01-5.1-1.4L.5 24zM7.4 6.8c-.2-.4-.5-.3-.7-.3h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.5 1.1 3 1.3 3.1.2.2 2.2 3.4 5.4 4.7 2.7 1.1 3.2.9 3.8.9.6 0 1.9-.8 2.2-1.6.3-.8.3-1.5.2-1.6-.1-.1-.2-.2-.5-.3-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.4-.8 1-1 1.1-.2.1-.4.2-.7.1-.3-.1-1.3-.5-2.5-1.5a9 9 0 01-1.7-2.1c-.2-.4 0-.6.1-.8.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.8-1-2.5z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <path d="M16 11.4a4 4 0 1 1-7.9 0 4 4 0 0 1 7.9 0Z" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    default:
      return null
  }
}

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section
        className="relative section overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(44,161,212,0.12), rgba(255,255,255,0.85)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-px mx-auto max-w-6xl flex flex-col items-center text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-2 border border-white/60">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: brand.blue }} />
              <span className="text-sm font-medium tracking-wide">LUSTRO • Limpeza Profissional de Vidros</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight max-w-4xl">
            Vidros impecáveis, sem stress.
          </h1>
          <p className="section-sub max-w-2xl">
            Serviço profissional, ecológico e transparente. Sem cordas. Até 5 m de altura.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <a
              className="btn btn-primary w-full sm:w-auto"
              href="https://docs.google.com/forms/d/e/1FAIpQLScmnV_s433GHNjJbHJufFkbfPmK0aOqu_3LE6sDQ58pzdnGvQ/viewform?usp=dialog"
              target="_blank" rel="noopener noreferrer"
            >
              <span className="mr-2">📸</span> Pedir Orçamento
            </a>
            <a
              className="btn btn-outline w-full sm:w-auto"
              href="https://api.whatsapp.com/send?phone=351934833023&text=Ol%C3%A1%20LUSTRO,%20gostava%20de%20pedir%20um%20or%C3%A7amento%20de%20limpeza%20de%20vidros"
              target="_blank" rel="noopener noreferrer"
            >
              <span className="mr-2">💬</span> Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section bg-white">
        <div className="container-px mx-auto max-w-6xl">
          <h2 className="section-title text-center">Os Nossos Serviços</h2>
          <p className="section-sub text-center">Soluções ajustadas a comércio, residencial e projetos especiais.</p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'store', title: 'Montras Comerciais', desc: 'Realce a sua marca com vidros impecáveis e sem marcas.' },
              { icon: 'home', title: 'Janelas Residenciais', desc: 'Conforto e luminosidade máxima, com total cuidado.' },
              { icon: 'sparkle', title: 'Limpeza Pós-Obra', desc: 'Remoção de resíduos e proteção, com detalhe técnico.' },
              { icon: 'repeat', title: 'Manutenção Regular', desc: 'Planos semanais ou mensais para brilho consistente.' },
            ].map((s, idx) => (
              <div key={idx} className="card p-6 text-center">
                <div className="mx-auto mb-4 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e7f6fd', color: brand.blue }}>
                  <Icon name={s.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Trabalhamos */}
      <section className="section bg-white">
        <div className="container-px mx-auto max-w-6xl">
          <h2 className="section-title text-center">Como Trabalhamos</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'camera', title: '1. Envie fotos ou descrição', desc: 'Partilhe o que precisa. Respondemos rápido e com clareza.' },
              { icon: 'calendar', title: '2. Agende a data', desc: 'Escolha o dia e hora ideais. Somos pontuais.' },
              { icon: 'sparkle', title: '3. Receba o brilho Lustro', desc: 'Serviço seguro, ecológico e transparente.' },
            ].map((s, idx) => (
              <div key={idx} className="card p-6 text-center border-2" style={{ borderColor: '#e7f6fd' }}>
                <div className="mx-auto mb-4 w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e7f6fd', color: brand.blue }}>
                  <Icon name={s.icon} className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Antes & Depois */}
      <section className="section bg-white">
        <div className="container-px mx-auto max-w-6xl">
          <h2 className="section-title text-center">Antes & Depois</h2>
          <p className="section-sub text-center">Resultados reais que falam por si.</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((item, idx) => (
              <div key={idx} className="card overflow-hidden">
                <div className="p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <div className="grid grid-cols-2 gap-0">
                  <figure className="relative aspect-[4/3] overflow-hidden">
                    <img src={item.before} alt={`${item.title} - antes`} className="w-full h-full object-cover" />
                    <figcaption className="absolute bottom-2 left-2 text-xs bg-white/80 px-2 py-1 rounded">Antes</figcaption>
                  </figure>
                  <figure className="relative aspect-[4/3] overflow-hidden">
                    <img src={item.after} alt={`${item.title} - depois`} className="w-full h-full object-cover" />
                    <figcaption className="absolute bottom-2 left-2 text-xs bg-white/80 px-2 py-1 rounded" style={{ color: brand.blue }}>Depois</figcaption>
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão LUSTRO */}
      <section className="section bg-white">
        <div className="container-px mx-auto max-w-4xl">
          <h2 className="section-title text-center">Missão LUSTRO</h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Na LUSTRO acreditamos que cada vidro conta uma história. A nossa missão é elevar o padrão da limpeza profissional, oferecendo um serviço ecológico, seguro e rigoroso — onde o detalhe é tratado com a mesma precisão de um reflexo perfeito. Trabalhamos para criar espaços mais luminosos e inspiradores, valorizando a transparência em tudo: no serviço, na comunicação e no resultado final.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="font-semibold mb-2">🌿 Visão</h3>
                <p className="text-gray-600">Ser referência em limpeza profissional de vidros em Portugal, unindo tecnologia, técnica e consciência ecológica.</p>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold mb-2">💎 Valores</h3>
                <p className="text-gray-600">Precisão, Confiança, Transparência, Sustentabilidade e Excelência.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testemunhos */}
      <section className="section bg-white">
        <div className="container-px mx-auto max-w-6xl">
          <h2 className="section-title text-center">Testemunhos</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              '“Montras perfeitas todas as semanas. Profissionais e pontuais!”',
              '“Serviço rápido e cuidadoso. As janelas nunca estiveram tão brilhantes!”',
              '“Excelente comunicação e resultado impecável.”',
            ].map((t, idx) => (
              <blockquote key={idx} className="card p-6 text-center">
                <p className="text-gray-700">{t}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="section pt-12 pb-16 border-t border-gray-100 bg-white">
        <div className="container-px mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div>
              <h3 className="text-xl font-semibold">LUSTRO</h3>
              <p className="text-gray-600 mt-2">Limpeza Profissional de Vidros</p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://api.whatsapp.com/send?phone=351934833023&text=Ol%C3%A1%20LUSTRO,%20gostava%20de%20pedir%20um%20or%C3%A7amento%20de%20limpeza%20de%20vidros"
                  target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center border"
                  style={{ borderColor: brand.blue, color: brand.blue }}
                  aria-label="WhatsApp"
                >
                  <Icon name="whatsapp" className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center border"
                  style={{ borderColor: brand.blue, color: brand.blue }}
                  aria-label="Instagram"
                >
                  <Icon name="instagram" className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold">Contacto</h4>
              <ul className="mt-3 text-gray-700 space-y-1">
                <li>📱 WhatsApp: +351 934 833 023</li>
                <li>✉️ Email: contacto@vidrobrilho.com</li>
                <li>🌍 Site: vidrobrilho.com/lustro</li>
                <li>🕐 Horário: Seg–Sáb · 7h–19h</li>
                <li>📍 Zonas: Lisboa • Oeiras • Cascais • Sintra</li>
              </ul>
            </div>

            <div className="card p-6">
              <h4 className="font-semibold">Pronto para começar?</h4>
              <p className="text-gray-600 mt-2">Peça já um orçamento sem compromisso.</p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a
                  className="btn btn-primary w-full sm:w-auto"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScmnV_s433GHNjJbHJufFkbfPmK0aOqu_3LE6sDQ58pzdnGvQ/viewform?usp=dialog"
                  target="_blank" rel="noopener noreferrer"
                >
                  Pedir Orçamento
                </a>
                <a
                  className="btn btn-outline w-full sm:w-auto"
                  href="https://api.whatsapp.com/send?phone=351934833023&text=Ol%C3%A1%20LUSTRO,%20gostava%20de%20pedir%20um%20or%C3%A7amento%20de%20limpeza%20de%20vidros"
                  target="_blank" rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} LUSTRO. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
