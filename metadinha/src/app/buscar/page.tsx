"use client";
import Image from "next/image";
import styles from "./buscar.module.css";
import { useRouter } from "next/navigation";

export default function BuscarPage() {
  const router = useRouter();

  function verDetalhes() {
    router.push("/detalhesbusca/quartosimples");
    router.push("/detalhesbusca/quartocasal");
    router.push("/detalhesbusca/loft");
  }

  return (
    <div className={styles.container}>
      
      <main className={styles.conteudo}>
        <h1>Encontre seu quarto ideal</h1>
        <p className={styles.sub}>3 opções encontradas</p>

        
        <div className={styles.barraPesquisa}>
          <input
            type="text"
            placeholder="Buscar por cidade, título ou descrição..."
          />
        </div>

        
        <div className={styles.filtros}>
          <select>
            <option>Todos os tipos</option>
            <option>Hotel</option>
            <option>Pousada</option>
            <option>Hostel</option>
            <option>Apartamento</option>
            <option>Casa</option>
          </select>

          <select>
            <option>Qualquer preço</option>
            <option>Até R$ 50</option>
            <option>R$ 51 - R$ 100</option>
            <option>R$ 101 - R$ 200</option>
            <option>R$ 200+</option>
          </select>

          <select>
            <option>Qualquer capacidade</option>
            <option>1-2 pessoas</option>
            <option>3-4 pessoas</option>
            <option>5+ pessoas</option>
          </select>
        </div>

        
        <div className={styles.gridCards}>
          
          <div className={styles.card}>
            <span className={styles.tag}>Hostel</span>

            <div className={styles.foto}>
              <Image
                src="/quartosimples.webp"
                alt="Quarto simples"
                width={270}
                height={200}
              />
            </div>

            <h3>Quarto simples</h3>
            <p>Caruaru, PE</p>
            <strong>R$ 120</strong>

            <button className={styles.btnRoxo} onClick={() => router.push("/detalhesbusca/quartosimples")}>
              Ver detalhes
            </button>
          </div>

          
          <div className={styles.card}>
            <span className={styles.tag}>Hotel</span>

            <div className={styles.foto}>
              <Image
                src="/quartocasal.webp"
                alt="Quarto casal"
                width={270}
                height={200}
              />
            </div>

            <h3>Quarto casal</h3>
            <p>Caruaru, PE</p>
            <strong>R$ 150</strong>

            <button className={styles.btnRoxo} onClick={() => router.push("/detalhesbusca/quartocasal")}>
              Ver detalhes
            </button>
          </div>

          
          <div className={styles.card}>
            <span className={styles.tag}>Apartamento</span>

            <div className={styles.foto}>
              <Image
                src="/imovel.jpeg"
                alt="Loft compartilhado"
                width={270}
                height={200}
              />
            </div>

            <h3>Loft compartilhado</h3>
            <p>Rio de Janeiro, RJ</p>
            <strong>R$ 75</strong>

            <button className={styles.btnRoxo} onClick={() => router.push("/detalhesbusca/loft")}>
              Ver detalhes
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
