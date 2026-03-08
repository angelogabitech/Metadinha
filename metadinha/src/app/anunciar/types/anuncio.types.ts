export interface AnuncioFormData {
  titulo: string;

  cidade: string;
  estado: string;
  cep: string;
  rua: string;

  tipoImovel: string;

  modoHospedagem: "inteiro" | "dividido";

  maxCompanheiros: number;

  hospedes: number;
  quartos: number;
  camas: number;
  banheiros: number;

  comodidades: string[];

  imagens: string[];

  preco: number;

  dataInicio: Date | undefined;
  dataFim: Date | undefined;

  regras: string;
}
