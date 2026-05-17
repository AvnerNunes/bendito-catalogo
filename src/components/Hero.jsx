import { motion } from "framer-motion"
import heroPerfume from "../assets/hero-perfume.png"

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 py-20 md:px-10 lg:px-20">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(212,175,55,.28),transparent_28%),linear-gradient(135deg,#030303,#111,#030303)]" />

      <div className="absolute inset-0 opacity-40">

        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />

      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="mb-4 text-sm uppercase tracking-[0.55em] text-yellow-500">
            Catálogo
          </p>

          <h2 className="bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text font-serif text-6xl font-bold uppercase leading-none text-transparent md:text-8xl">
            Perfumes
          </h2>

          <p className="mt-6 max-w-xl text-base uppercase tracking-[0.25em] text-zinc-200">
            Exclusividade. Sofisticação. Essência.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <img
            src={heroPerfume}
            alt="Perfume de luxo"
            className="h-auto w-full max-w-xl rounded-[2rem] border border-yellow-600/50 object-contain shadow-2xl shadow-yellow-900/30"
          />

        </motion.div>

      </div>

    </section>
  )
}