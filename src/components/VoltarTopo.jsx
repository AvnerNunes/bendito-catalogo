import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

export default function VoltarTopo() {

  const [visivel, setVisivel] = useState(false)

  useEffect(() => {

    function verificarScroll() {

      if (window.scrollY > 300) {
        setVisivel(true)
      } else {
        setVisivel(false)
      }
    }

    window.addEventListener("scroll", verificarScroll)

    return () => {
      window.removeEventListener("scroll", verificarScroll)
    }

  }, [])

  function voltarAoTopo() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!visivel) return null

  return (
    <button
      onClick={voltarAoTopo}
      className="fixed bottom-28 right-5 z-50 rounded-full border border-yellow-600/60 bg-black/85 p-4 text-yellow-500 shadow-2xl shadow-yellow-900/30 backdrop-blur-xl transition hover:bg-yellow-500 hover:text-black"
    >
      <ArrowUp size={22} />
    </button>
  )
}