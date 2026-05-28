export default function PulseScope() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--font-body)" }}>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-sky-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </div>
            <span className="font-bold text-sky-900 text-lg" style={{ fontFamily: "var(--font-display)" }}>PulseScope</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-sky-700">
            <a href="#features" className="hover:text-sky-500 transition-colors">Fonctionnalités</a>
            <a href="#process" className="hover:text-sky-500 transition-colors">Comment ça marche</a>
          </div>
          <a href="#cta" className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors">
            Démarrer gratuitement
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-sky-50 via-sky-100 to-blue-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-sky-500 blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-blue-400 blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-200 text-sky-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
            Intelligence de marché 24h/24
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-sky-900 leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Vos concurrents analysés.<br />
            <span className="text-sky-500">Votre Slack briefé.</span><br />
            Avant votre café.
          </h1>
          <p className="text-xl text-sky-700 max-w-2xl mx-auto mb-10 leading-relaxed">
            PulseScope surveille le web 24h/24, analyse avec l&apos;IA et dépose une synthèse complète dans votre Slack chaque matin à 8h — sans qu&apos;on lui demande.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#cta" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-sky-200 hover:shadow-sky-300">
              Démarrer la veille →
            </a>
            <a href="#process" className="bg-white text-sky-700 border-2 border-sky-200 hover:border-sky-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all">
              Voir une démo
            </a>
          </div>

          {/* Metrics row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "15h", label: "économisées / semaine" },
              { value: "50+", label: "sources surveillées" },
              { value: "8h00", label: "livré chaque matin" },
              { value: "100%", label: "automatisé" },
            ].map((m) => (
              <div key={m.label} className="bg-white/80 backdrop-blur rounded-2xl p-5 border border-sky-100 shadow-sm">
                <div className="text-3xl font-bold text-sky-600 mb-1" style={{ fontFamily: "var(--font-display)" }}>{m.value}</div>
                <div className="text-xs text-sky-500 font-medium uppercase tracking-wide">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Tout ce que votre équipe fait manuellement,<br />
              <span className="text-sky-500">PulseScope le fait en continu</span>
            </h2>
            <p className="text-sky-600 text-lg max-w-xl mx-auto">Sans abonnement à 15 outils. Sans stagiaire dédié à la veille.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔍",
                title: "Veille multi-sources",
                desc: "Sites web concurrents, réseaux sociaux, actualités sectorielles, publications LinkedIn, brevets — tout est surveillé en temps réel.",
                color: "bg-sky-50 border-sky-100",
              },
              {
                icon: "🧠",
                title: "Synthèse IA quotidienne",
                desc: "L&apos;IA résume les faits marquants, identifie les insights actionnables et rédige un brief exécutif prêt à consommer en 5 minutes.",
                color: "bg-blue-50 border-blue-100",
              },
              {
                icon: "⚡",
                title: "Alertes instantanées",
                desc: "Tendances émergentes, nouvelles campagnes concurrentes ou opportunités marché détectées → notification immédiate dans votre Slack.",
                color: "bg-cyan-50 border-cyan-100",
              },
            ].map((f) => (
              <div key={f.title} className={`${f.color} border rounded-2xl p-8 hover:shadow-md transition-shadow`}>
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-sky-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>{f.title}</h3>
                <p className="text-sky-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: f.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="process" className="py-20 bg-sky-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
              En place en 10 minutes
            </h2>
            <p className="text-sky-600 text-lg">Aucune intégration technique. Juste configurer et recevoir.</p>
          </div>
          <div className="space-y-6">
            {[
              { step: "01", title: "Configurez vos sources", desc: "Ajoutez les domaines concurrents, mots-clés sectoriels et comptes LinkedIn à surveiller. Interface visuelle, aucun code." },
              { step: "02", title: "L'agent prend le relais", desc: "PulseScope scrape, analyse et classe automatiquement chaque signal. Le modèle IA filtre le bruit et retient l'essentiel." },
              { step: "03", title: "Brief dans votre Slack à 8h", desc: "Chaque matin, un message structuré arrive dans votre canal Slack préféré : faits du jour, insights clés, actions recommandées." },
            ].map((s) => (
              <div key={s.step} className="flex gap-6 bg-white rounded-2xl p-7 border border-sky-100 shadow-sm">
                <div className="flex-shrink-0 w-14 h-14 bg-sky-500 text-white rounded-xl flex items-center justify-center font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>
                  {s.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-sky-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>{s.title}</h3>
                  <p className="text-sky-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 bg-gradient-to-r from-sky-600 to-blue-700">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Votre premier brief dès demain matin
          </h2>
          <p className="text-sky-100 text-xl mb-10">Configuration en 10 minutes. Résultats dans votre Slack à 8h00.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://calendly.com/wikolabs" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-sky-600 hover:bg-sky-50 px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl">
              📅 Réserver un créneau →
            </a>
            <a href="https://wa.me/261386626100?text=Bonjour%2C%20je%20souhaite%20discuter%20de%20PulseScope%20avec%20Wikolabs." target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-sky-600 hover:bg-sky-50 px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl" style={{ background: "#25d366", borderColor: "#25d366" }}>
              💬 WhatsApp →
            </a>
          </div>
          <p className="text-sky-200 text-sm mt-5">Aucune carte bancaire. Résultats en 24h.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-sky-900 text-sky-300 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-sky-500 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </div>
            <span className="font-semibold text-white">PulseScope</span>
          </div>
          <p className="text-sm">© 2025 PulseScope — Un produit <a href="https://wikolabs.com" className="text-sky-400 hover:text-sky-200">Wikolabs</a></p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="mailto:team@wikolabs.com" className="hover:text-sky-100 transition-colors">team@wikolabs.com</a>
            <span>·</span>
            <a href="tel:+261386626100" className="hover:text-sky-100 transition-colors">+261 38 66 261 00</a>
            <span>·</span>
            <a href="https://calendly.com/wikolabs" target="_blank" rel="noopener noreferrer" className="hover:text-sky-100 transition-colors">Prendre RDV</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
