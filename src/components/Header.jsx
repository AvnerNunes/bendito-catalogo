import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {

  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-yellow-500/20 bg-black/40 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-2xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">

        <div className="bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text font-serif text-2xl uppercase tracking-[0.2em] text-transparent">
          Bendito Perfume
        </div>

        <>
          <nav className="hidden gap-8 text-sm uppercase tracking-widest text-zinc-300 lg:flex">

            <a
              href="#inicio"
              className="transition hover:text-yellow-500"
            >
              Início
            </a>

            <a
              href="#catalogo"
              className="transition hover:text-yellow-500"
            >
              Árabes
            </a>

            <a
              href="#catalogo"
              className="transition hover:text-yellow-500"
            >
              Designer
            </a>

            <a
              href="#catalogo"
              className="transition hover:text-yellow-500"
            >
              Brand Collection
            </a>

            <a
              href="#sobre"
              className="transition hover:text-yellow-500"
            >
              Sobre Nós
            </a>

            <a
              href="#footer"
              className="transition hover:text-yellow-500"
            >
              Contato
            </a>

          </nav>

          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="text-yellow-500 lg:hidden"
          >
            {menuAberto
              ? <X size={28} />
              : <Menu size={28} />
            }
          </button>
        </>

      </div>

      {menuAberto && (

        <nav className="border-t border-yellow-500/20 bg-black/60 px-5 py-5 backdrop-blur-2xl lg:hidden">

          <div className="flex flex-col gap-4 text-sm uppercase tracking-widest text-zinc-300">

            <a
              href="#inicio"
              className="transition hover:text-yellow-500"
            >
              Início
            </a>

            <a
              href="#catalogo"
              className="transition hover:text-yellow-500"
            >
              Árabes
            </a>

            <a
              href="#catalogo"
              className="transition hover:text-yellow-500"
            >
              Designer
            </a>

            <a
              href="#catalogo"
              className="transition hover:text-yellow-500"
            >
              Brand Collection
            </a>

            <a
              href="#sobre"
              className="transition hover:text-yellow-500"
            >
              Sobre Nós
            </a>

            <a
              href="#footer"
              className="transition hover:text-yellow-500"
            >
              Contato
            </a>

          </div>

        </nav>

      )}

    </header>
  )
}