export default function Footer() {
  return (
    <footer className="border-t border-yellow-700/30 bg-black px-5 pb-28 pt-12 md:px-10 lg:px-20">

      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">

        <div>

          <h3 className="font-serif text-2xl uppercase tracking-widest text-yellow-500">
            Bendito Perfume
          </h3>

          <p className="mt-3 text-sm text-zinc-400">
            Fragrâncias exclusivas para momentos marcantes.
          </p>

        </div>

        <div>

          <h4 className="font-bold uppercase text-yellow-500">
            Links rápidos
          </h4>

          <div className="mt-3 flex flex-col gap-2 text-sm text-zinc-400">

            <a href="#inicio" className="hover:text-yellow-500">
              Início
            </a>

            <a href="#catalogo" className="hover:text-yellow-500">
              Catálogo
            </a>

            <a href="#sobre" className="hover:text-yellow-500">
              Sobre Nós
            </a>

          </div>

        </div>

        <div>

          <h4 className="font-bold uppercase text-yellow-500">
            Contato
          </h4>

          <div className="mt-3 flex flex-col gap-2 text-sm text-zinc-400">

            <p>WhatsApp: (61) 99568-9597</p>

            <p>Instagram: @benditoperfume_bsb</p>

            <p>Entrega para todo o Brasil</p>

          </div>

        </div>

      </div>

    </footer>
  )
}