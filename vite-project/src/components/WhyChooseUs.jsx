const benefits = [
    {
      title: 'Fenntartható alapanyagok',
      text: 'Természetközeli dekorációk tudatosan válogatott üvegekkel, mohákkal és növényi elemekkel.',
    },
    {
      title: 'Kézzel készített design',
      text: 'Minden florárium egyedi kompozíció, amely prémium lakásdekorációként is megállja a helyét.',
    },
    {
      title: 'Kevés gondozás',
      text: 'Kezdőknek is ideális mini ökoszisztémák, egyszerű gondozási útmutatóval.',
    },
  ]
  
  export default function WhyChooseUs() {
    return (
      <section className="bg-[#f4f1ea] px-5 py-20 text-[#17251d] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3f6b4b]">
              Miért Florarium?
            </p>
  
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Természetes szépség, modern vásárlási élmény
            </h2>
          </div>
  
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#e5dfd3] bg-white p-7 shadow-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#254d34] text-xl text-white">
                  ✓
                </div>
  
                <h3 className="text-xl font-bold">{item.title}</h3>
  
                <p className="mt-3 text-sm leading-6 text-[#5b685f]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }