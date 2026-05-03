export default function AiAssistantSection() {
    return (
      <section
        id="ai-assistant"
        className="bg-[#17251d] px-5 py-20 text-white sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          
          {/* TEXT */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8fbf9e]">
              AI asszisztens
            </p>
  
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Nem tudod melyik florárium illik hozzád?
            </h2>
  
            <p className="mt-5 max-w-xl text-[#c7d2cc]">
              AI alapú asszisztensünk segít kiválasztani a számodra ideális
              floráriumot — figyelembe veszi a lakásod fényviszonyait,
              gondozási igényeidet és stílusodat.
            </p>
  
            <ul className="mt-6 space-y-3 text-sm text-[#c7d2cc]">
              <li>✔ személyre szabott ajánlások</li>
              <li>✔ gondozási tippek kezdőknek</li>
              <li>✔ azonnali válaszok kérdéseidre</li>
            </ul>
  
            <button className="mt-8 rounded-full bg-[#8fbf9e] px-8 py-4 text-sm font-bold text-[#17251d] transition hover:bg-[#7aae8f]">
              Asszisztens indítása
            </button>
          </div>
  
          {/* CHAT MOCKUP */}
          <div className="rounded-3xl bg-white/5 p-6 backdrop-blur">
            <div className="space-y-4">
              
              <div className="max-w-xs rounded-2xl bg-white/10 px-4 py-3 text-sm">
                Milyen floráriumot ajánlasz kevés fényhez?
              </div>
  
              <div className="ml-auto max-w-xs rounded-2xl bg-[#8fbf9e] px-4 py-3 text-sm text-[#17251d]">
                A zárt mohás floráriumok ideálisak alacsony fényviszonyokhoz.
              </div>
  
              <div className="max-w-xs rounded-2xl bg-white/10 px-4 py-3 text-sm">
                Kell locsolni?
              </div>
  
              <div className="ml-auto max-w-xs rounded-2xl bg-[#8fbf9e] px-4 py-3 text-sm text-[#17251d]">
                Nem gyakran — akár 2-3 hetente is elegendő lehet.
              </div>
  
            </div>
          </div>
  
        </div>
      </section>
    )
  }