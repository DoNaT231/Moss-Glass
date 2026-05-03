import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoogleGenAI } from '@google/genai'

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
})

const quickQuestions = [
  'Melyik florárium jó ajándékba?',
  'Melyik bírja kevés fénnyel?',
  'Hol találom a kiegészítőket?',
  'Hogyan gondozzam a floráriumot?',
  'Melyik való nagyobb nappaliba?',
]

async function getGeminiReply(userMessage) {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: `
Te a Florarium Niche Webshop magyar nyelvű AI asszisztense vagy.

A weboldal fenntartható, prémium floráriumokat, üvegbe zárt mini kerteket, XL viváriumokat és gondozási kiegészítőket kínál.

Feladatod:
- segíts a vásárlónak eligazodni a weboldalon
- ajánlj termékkategóriát
- magyarázd el, melyik florárium kinek való
- adj rövid gondozási tanácsokat
- válaszolj magyarul
- legyél kedves, rövid, érthető és hasznos
- ne írj túl hosszú válaszokat
- ne találj ki nem létező oldalakat

Weboldal oldalak:
- Főoldal: /
- Termékkatalógus: /termekek
- Kosár: /kosar
- Gondozási útmutató: /gondozas
- AI asszisztens: /asszisztens

Termékkategóriák:
1. Kis floráriumok
   - Kompakt, könnyen elhelyezhető mini kertek
   - Ajándékba, íróasztalra, polcra jók

2. XL viváriumok
   - Nagyobb, látványos növénykompozíciók
   - Nappaliba, irodába, prémium enteriőrbe jók

3. Kiegészítők és gondozás
   - Földkeverék
   - Aktív szén
   - Dekorkavics
   - Moha csomag
   - Eszközkészlet
   - Permetező palack

Fontos gondozási alapelvek:
- Ne tedd közvetlen napfényre
- A túl sok víz káros lehet
- A párásodás természetes, de a túl sok pára esetén szellőztetni kell
- A mohás floráriumok általában közvetett fényt szeretnek
- Kezdőknek a kisebb, zárt jellegű floráriumok ajánlottak

Felhasználó kérdése:
${userMessage}
    `,
  })

  return response.text
}

export default function AiChatPage() {
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: 'Szia! Én vagyok a Florarium AI asszisztense. Segítek floráriumot választani, eligazodni a webshopban vagy gondozási tanácsot adni.',
    },
  ])

  async function sendMessage(messageText = input) {
    const trimmed = messageText.trim()

    if (!trimmed || isLoading) return

    const userMessage = {
      role: 'user',
      text: trimmed,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const replyText = await getGeminiReply(trimmed)

      const botReply = {
        role: 'bot',
        text: replyText,
      }

      setMessages((prev) => [...prev, botReply])
    } catch (error) {
      console.error(error)

      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: 'Sajnos most nem tudok válaszolni. Ellenőrizd, hogy az API kulcs be van-e állítva, majd próbáld újra.',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f4f1ea] px-5 py-16 text-[#17251d] sm:px-8 lg:px-10">
      <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[420px_1fr]">
        <aside className="h-fit rounded-[2rem] bg-white p-7 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3f6b4b]">
            AI asszisztens
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight">
            Segítünk választani
          </h1>

          <p className="mt-4 text-sm leading-6 text-[#5b685f]">
            Kérdezz a floráriumokról, gondozásról, kiegészítőkről vagy arról,
            melyik termék illene legjobban az otthonodba.
          </p>

          <div className="mt-7 space-y-3">
            <Link
              to="/termekek"
              className="block rounded-full bg-[#254d34] px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-[#1d3d29]"
            >
              Termékek megtekintése
            </Link>

            <Link
              to="/gondozas"
              className="block rounded-full border border-[#254d34]/20 px-6 py-3 text-center text-sm font-bold text-[#254d34] transition hover:bg-[#f4f1ea]"
            >
              Gondozási útmutató
            </Link>
          </div>

          <div className="mt-8 rounded-3xl bg-[#f4f1ea] p-5">
            <h2 className="font-bold text-[#17251d]">Miben tud segíteni?</h2>

            <ul className="mt-4 space-y-2 text-sm text-[#5b685f]">
              <li>✓ ajándék választásban</li>
              <li>✓ kis vagy XL florárium kiválasztásában</li>
              <li>✓ gondozási kérdésekben</li>
              <li>✓ kiegészítők ajánlásában</li>
            </ul>
          </div>
        </aside>

        <section className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
          <div className="border-b border-[#e5dfd3] bg-[#17251d] px-6 py-5 text-white">
            <h2 className="text-xl font-bold">Florarium chatbot</h2>
            <p className="mt-1 text-sm text-white/70">
              Magyar nyelvű vásárlási és gondozási asszisztens
            </p>
          </div>

          <div className="h-[520px] space-y-4 overflow-y-auto bg-[#f8f6f0] p-5">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[85%] rounded-3xl px-5 py-4 text-sm leading-6 shadow-sm ${
                  message.role === 'user'
                    ? 'ml-auto bg-[#254d34] text-white'
                    : 'bg-white text-[#17251d]'
                }`}
              >
                {message.text}
              </div>
            ))}

            {isLoading && (
              <div className="max-w-[85%] rounded-3xl bg-white px-5 py-4 text-sm text-[#5b685f] shadow-sm">
                Az asszisztens válaszol...
              </div>
            )}
          </div>

          <div className="border-t border-[#e5dfd3] bg-white p-5">
            <div className="mb-4 flex flex-wrap gap-2">
              {quickQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => sendMessage(question)}
                  disabled={isLoading}
                  className="rounded-full bg-[#f4f1ea] px-4 py-2 text-xs font-bold text-[#254d34] transition hover:bg-[#e8e2d6] disabled:opacity-50"
                >
                  {question}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') sendMessage()
                }}
                placeholder="Írj egy kérdést..."
                className="min-w-0 flex-1 rounded-full border border-[#d9d1c3] px-5 py-4 text-sm outline-none transition focus:border-[#254d34]"
              />

              <button
                onClick={() => sendMessage()}
                disabled={isLoading}
                className="rounded-full bg-[#254d34] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#1d3d29] disabled:opacity-60"
              >
                Küldés
              </button>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}