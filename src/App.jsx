import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Categorias from "./components/Categorias"
import CardPerfume from "./components/CardPerfume"
import BarraWhatsApp from "./components/BarraWhatsApp.jsx"
import Footer from "./components/Footer"
import VoltarTopo from "./components/VoltarTopo"

import perfumes from "./data/perfumes"

export default function App() {

  const [selecionados, setSelecionados] = useState({})
  const [categoriaAtiva, setCategoriaAtiva] =
    useState("Todos")

  function limparSelecionados() {
    setSelecionados({})
  }

  function selecionarPerfume(perfume) {

    setSelecionados((atual) => {

      if (atual[perfume.id]) {

        const novo = { ...atual }

        delete novo[perfume.id]

        return novo
      }

      return {
        ...atual,

        [perfume.id]: {
          ...perfume,
          quantidade: 1,
        },
      }
    })
  }

  function alterarQuantidade(perfume, valor) {

    if (!selecionados[perfume.id]) return

    setSelecionados((atual) => {

      const quantidadeAtual =
        atual[perfume.id].quantidade

      const novaQuantidade =
        quantidadeAtual + valor

      if (novaQuantidade <= 0) {

        const novo = { ...atual }

        delete novo[perfume.id]

        return novo
      }

      return {
        ...atual,

        [perfume.id]: {
          ...atual[perfume.id],
          quantidade: novaQuantidade,
        },
      }
    })
  }

  const listaSelecionados =
    Object.values(selecionados)

  const totalItens =
    listaSelecionados.reduce((total, item) => {
      return total + item.quantidade
    }, 0)

  const perfumesFiltrados =
    categoriaAtiva === "Todos"
      ? perfumes
      : perfumes.filter((perfume) => {
          return perfume.categoria === categoriaAtiva
        })

  const valorTotal =
    listaSelecionados.reduce((total, item) => {

      const precoNumero = Number(
        item.preco
          .replace("R$", "")
          .replace(".", "")
          .replace(",", ".")
          .trim()
      )

      return total + precoNumero * item.quantidade

    }, 0)

  const valorTotalFormatado =
    valorTotal.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })

  function finalizarWhatsapp() {

    let mensagem =
      "Olá! Tenho interesse nos seguintes perfumes:\n\n"

    listaSelecionados.forEach((item, index) => {

      const precoNumero = Number(
        item.preco
          .replace("R$", "")
          .replace(".", "")
          .replace(",", ".")
          .trim()
      )

      const subtotal =
        precoNumero * item.quantidade

      const subtotalFormatado =
        subtotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })

      mensagem += `${index + 1}. ${item.nome}\n\n`
      mensagem += `Categoria: ${item.categoria}\n`
      mensagem += `Quantidade: ${item.quantidade}\n`
      mensagem += `Valor unitário: ${item.preco}\n`
      mensagem += `Subtotal: ${subtotalFormatado}\n\n`

    })

    mensagem +=
      `Total do pedido: ${valorTotalFormatado}`

    const url =
      `https://wa.me/5561995689597?text=${encodeURIComponent(mensagem)}`

    window.open(url, "_blank")
  }

  return (

    <main className="relative min-h-screen overflow-hidden bg-[#020202] text-white">

      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_10%,rgba(234,179,8,0.12),transparent_30%),radial-gradient(circle_at_80%_40%,rgba(234,179,8,0.08),transparent_35%),linear-gradient(180deg,#030303,#090909,#030303)]" />

      <div className="pointer-events-none fixed inset-0 z-0 opacity-30 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.04)_50%,transparent_100%)]" />

      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.035] mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      <div className="relative z-10">

        <Header />

        <section id="inicio">
          <Hero />
        </section>

        <section
          id="catalogo"
          className="mx-auto max-w-7xl px-5 py-16 md:px-10 lg:px-20"
        >

          <div className="text-center">

            <p className="text-sm uppercase tracking-[0.45em] text-yellow-500">
              Nossa seleção
            </p>

            <h2 className="mt-3 font-serif text-4xl uppercase text-white md:text-6xl">
              Curadoria
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Escolha seus perfumes, defina a quantidade e finalize sua seleção pelo WhatsApp.
            </p>

          </div>

          <Categorias
            categoriaAtiva={categoriaAtiva}
            setCategoriaAtiva={setCategoriaAtiva}
          />

          <AnimatePresence mode="wait">

            <motion.div
              key={categoriaAtiva}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}

              className="mt-12 grid gap-7 sm:grid-cols-2 xl:grid-cols-4"
            >

              {perfumesFiltrados.map((perfume) => (

                <CardPerfume
                  key={perfume.id}
                  perfume={perfume}
                  selecionados={selecionados}
                  selecionarPerfume={selecionarPerfume}
                  alterarQuantidade={alterarQuantidade}
                />

              ))}

            </motion.div>

          </AnimatePresence>

        </section>

        <section
          id="sobre"
          className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-10 lg:grid-cols-2 lg:px-20"
        >

          <div className="rounded-[2rem] border border-yellow-700/30 bg-zinc-950/80 p-8 md:p-12">

            <p className="text-sm uppercase tracking-[0.45em] text-yellow-500">
              Sobre nós
            </p>

            <h2 className="mt-4 font-serif text-4xl uppercase md:text-5xl">
              Uma curadoria feita para impressionar
            </h2>

            <p className="mt-6 leading-relaxed text-zinc-300">
              A Bendito Perfume reúne fragrâncias árabes, designer e Brand Collection
              em uma experiência de compra elegante, acessível e personalizada.

              Cada perfume é selecionado para transmitir presença,
              sofisticação e exclusividade.
            </p>

          </div>

          <div className="rounded-[2rem] border border-yellow-700/30 bg-[radial-gradient(circle_at_top,rgba(212,175,55,.2),transparent_40%),#080808] p-8 md:p-12">

            <h3 className="font-serif text-3xl uppercase text-yellow-500">
              Atendimento premium
            </h3>

            <p className="mt-5 leading-relaxed text-zinc-300">
              Escolha seus favoritos no catálogo e envie a seleção diretamente pelo WhatsApp.

              Simples, rápido e com atendimento personalizado.
            </p>

          </div>

        </section>

        <Footer />

        <VoltarTopo />

        <BarraWhatsApp
          totalItens={totalItens}
          valorTotalFormatado={valorTotalFormatado}
          finalizarWhatsapp={finalizarWhatsapp}
          limparSelecionados={limparSelecionados}
        />

      </div>

    </main>
  )
}