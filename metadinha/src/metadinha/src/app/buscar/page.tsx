"use client";

import Image from "next/image";
import styles from "./buscar.module.css";
import { useRouter } from "next/navigation";

export default function BuscarPage() {
  const router = useRouter();

  const anuncios = [
    {
      id: 1,
      tag: "Hostel",
      titulo: "Quarto simples",
      local: "Caruaru, PE",
      preco: "R$ 120",
      imagem: "/quartosimples.webp",
      rota: "/detalhesbusca/quartosimples",
    },
    {
      id: 2,
      tag: "Hotel",
      titulo: "Quarto casal",
      local: "Caruaru, PE",
      preco: "R$ 150",
      imagem: "/quartocasal.webp",
      rota: "/detalhesbusca/quartocasal",
    },
    {
      id: 3,
      tag: "Apartamento",
      titulo: "Loft compartilhado",
      local: "Rio de Janeiro, RJ",
      preco: "R$ 75",
      imagem: "/imovel.jpeg",
      rota: "/detalhesbusca/loft",
    },
  ];

  return (
    <main className={styles.conteudo}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>Encontre seu quarto ideal</h1>
          <p className={styles.sub}>{anuncios.length} opções encontradas</p>
        </div>

        {/* CARD DE FILTROS */}
        <div className={styles.filtroCard}>
          <div className={styles.barraPesquisa}>
            <input
              type="text"
              placeholder="Buscar por cidade, título ou descrição..."
            />
          </div>

          <div className={styles.filtros}>
            <select>
              <option>Todos os tipos</option>
            </select>

            <select>
              <option>Qualquer preço</option>
            </select>

            <select>
              <option>Qualquer capacidade</option>
            </select>
          </div>
        </div>

        {/* GRID */}
        <div className={styles.gridCards}>
          {anuncios.map((anuncio, index) => (
            <div
              key={anuncio.id}
              className={styles.card}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <span className={styles.tag}>{anuncio.tag}</span>

              <div className={styles.foto}>
                <img
                  src={anuncio.imagem}
                  alt={anuncio.titulo}
                  width={600}
                  height={400}
                  className={styles.img}
                />
              </div>

              <h3>{anuncio.titulo}</h3>
              <p>{anuncio.local}</p>
              <strong>{anuncio.preco}</strong>

              <p className={styles.extraInfo}>
                Wi-Fi • Ar-condicionado • Café incluso
              </p>

              <button
                className={styles.btnRoxo}
                onClick={() => router.push(anuncio.rota)}
              >
                Ver detalhes
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
