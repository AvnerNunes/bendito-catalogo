export default function BarraWhatsApp({
  totalItens,
  valorTotalFormatado,
  finalizarWhatsapp,
  limparSelecionados,
}) {

  if (totalItens <= 0) return null

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-24px)] max-w-6xl -translate-x-1/2 overflow-hidden rounded-[2rem] border border-yellow-500/20 bg-black/30 shadow-[0_12px_45px_rgba(0,0,0,0.45)] backdrop-blur-3xl">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.16),transparent_45%)]" />

      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.08)_50%,transparent_100%)]" />

      <div className="relative flex flex-col gap-5 p-5 md:flex-row md:items-center md:justify-between">

        <div>

          <p className="text-xs uppercase tracking-[0.4em] text-yellow-500">
            Seleção Bendito Perfume
          </p>

          <div className="mt-2 flex items-center gap-3">

            <span className="rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-2 text-sm font-bold text-yellow-500">
              {totalItens} item(ns)
            </span>

            <span className="text-2xl font-bold text-white">
              {valorTotalFormatado}
            </span>

          </div>

        </div>

        <div className="flex flex-col gap-3 md:flex-row">

          <button
            onClick={limparSelecionados}
            className="rounded-full border border-yellow-600/50 px-6 py-4 text-sm font-bold uppercase tracking-widest text-yellow-500 transition hover:bg-yellow-500 hover:text-black"
          >
            Limpar
          </button>

          <button
            onClick={finalizarWhatsapp}
            className="rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-8 py-4 text-sm font-bold uppercase tracking-widest text-black shadow-lg shadow-yellow-900/40 transition hover:bg-white"
          >
            Finalizar no WhatsApp
          </button>

        </div>

      </div>

    </div>
  )
}