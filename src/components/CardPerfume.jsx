import { motion } from "framer-motion"
import { useState } from "react"
import { Check, LoaderCircle } from "lucide-react"

export default function CardPerfume({
  perfume,
  selecionados,
  selecionarPerfume,
  alterarQuantidade,
}) {

  const [imagemCarregada, setImagemCarregada] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}

      className={`group overflow-hidden rounded-[2rem] border border-yellow-500/15 bg-white/[0.03] shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition duration-500 ${
        selecionados[perfume.id]
          ? "border-yellow-400/60 shadow-[0_0_45px_rgba(234,179,8,0.35)]"
          : "hover:-translate-y-3 hover:border-yellow-500/40 hover:shadow-[0_0_35px_rgba(234,179,8,0.18)]"
      }`}
    >

      <div className="relative h-80 overflow-hidden bg-black/40 backdrop-blur-xl">

        <span className="absolute left-4 top-4 z-10 rounded-full border border-yellow-500/60 bg-black/70 px-4 py-1 text-xs font-bold uppercase tracking-widest text-yellow-500 backdrop-blur-md">
          Premium
        </span>

        {selecionados[perfume.id] && (
          <div className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-yellow-400 bg-yellow-500 text-black shadow-lg shadow-yellow-500/40">
            <Check size={20} />
          </div>
        )}

        {!imagemCarregada && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <LoaderCircle
              size={40}
              className="animate-spin text-yellow-500"
            />
          </div>
        )}

        <img
          src={perfume.foto}
          alt={perfume.nome}
          loading="lazy"
          decoding="async"
          onLoad={() => setImagemCarregada(true)}
          className={`h-full w-full object-contain p-3 transition duration-700 hover:scale-105 ${
            imagemCarregada
              ? "opacity-100"
              : "opacity-0"
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.12),transparent_45%)]" />

      </div>

      <div className="relative p-5">

        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.08)_50%,transparent_100%)]" />

        <p className="relative text-xs uppercase tracking-[0.3em] text-yellow-500">
          {perfume.categoria}
        </p>

        <h3 className="relative mt-2 font-serif text-2xl uppercase text-white">
          {perfume.nome}
        </h3>

        <p className="relative mt-3 min-h-16 text-sm leading-relaxed text-zinc-400">
          {perfume.descricao}
        </p>

        <div className="relative mt-5 flex items-center justify-between">

          <span className="text-2xl font-bold text-yellow-500">
            {perfume.preco}
          </span>

          <div className="flex items-center gap-2 rounded-full border border-yellow-700/40 px-2 py-1">

            <button
              onClick={() => alterarQuantidade(perfume, -1)}
              className="rounded-full p-2 text-lg hover:bg-yellow-500 hover:text-black"
            >
              -
            </button>

            <span className="w-8 text-center text-lg font-bold">
              {selecionados[perfume.id]?.quantidade || 1}
            </span>

            <button
              onClick={() => alterarQuantidade(perfume, 1)}
              className="rounded-full p-2 text-lg hover:bg-yellow-500 hover:text-black"
            >
              +
            </button>

          </div>

        </div>

        <button
          onClick={() => selecionarPerfume(perfume)}
          className={`relative mt-5 w-full rounded-full px-5 py-3 text-sm font-bold uppercase tracking-widest transition ${
            selecionados[perfume.id]
              ? "border border-yellow-500 bg-transparent text-yellow-500"
              : "bg-yellow-500 text-black shadow-lg shadow-yellow-900/40 hover:bg-white hover:shadow-yellow-500/30"
          }`}
        >
          {selecionados[perfume.id]
            ? "Selecionado"
            : "Selecionar"}
        </button>

      </div>

    </motion.article>
  )
}