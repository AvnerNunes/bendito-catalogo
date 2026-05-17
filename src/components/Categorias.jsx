import { motion } from "framer-motion"

export default function Categorias({
  categoriaAtiva,
  setCategoriaAtiva,
}) {

  const categorias = [
    "Todos",
    "Árabes",
    "Designer",
    "Brands",
  ]

  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">

      {categorias.map((categoria) => {

        const ativo =
          categoriaAtiva === categoria

        return (

          <motion.button
            key={categoria}

            whileHover={{
              scale: 1.05,
            }}

            whileTap={{
              scale: 0.96,
            }}

            onClick={() =>
              setCategoriaAtiva(categoria)
            }

            className={`relative overflow-hidden rounded-full border px-7 py-3 text-sm uppercase tracking-[0.25em] transition duration-500 ${
              ativo
                ? "border-yellow-400 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black shadow-[0_0_30px_rgba(234,179,8,0.30)]"
                : "border-yellow-500/15 bg-white/[0.03] text-zinc-300 backdrop-blur-xl hover:border-yellow-500/40 hover:text-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.15)]"
            }`}
          >

            {!ativo && (
              <div className="absolute inset-0 opacity-0 transition duration-500 hover:opacity-100 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.08)_50%,transparent_100%)]" />
            )}

            <span className="relative z-10">
              {categoria}
            </span>

          </motion.button>

        )
      })}

    </div>
  )
}