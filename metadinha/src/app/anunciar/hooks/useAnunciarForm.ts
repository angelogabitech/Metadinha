"use client";

import { useEffect, useState } from "react";
import { AnuncioFormData } from "../types/anuncio.types";

export function useAnunciarForm() {
  const [step, setStep] = useState(1);

  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState<AnuncioFormData>({
    titulo: "",

    cidade: "",
    estado: "",
    cep: "",
    rua: "",

    tipoImovel: "Apartamento",

    modoHospedagem: "inteiro",

    maxCompanheiros: 2,

    hospedes: 1,
    quartos: 1,
    camas: 1,
    banheiros: 1,

    comodidades: [],

    imagens: [],

    preco: 0,

    dataInicio: undefined,
    dataFim: undefined,

    regras: "",
  });

  // salvar rascunho
  useEffect(() => {
    const saved = localStorage.getItem("anuncio_draft");

    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("anuncio_draft", JSON.stringify(formData));
  }, [formData]);

  function updateField(field: keyof AnuncioFormData, value: any) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // limpa erro ao digitar
    if (errorMessage) {
      setErrorMessage("");
    }
  }

  function validateStep() {
    setErrorMessage("");

    if (step === 1) {
      if (!formData.titulo) {
        setErrorMessage("Adicione um título para o anúncio");
        return false;
      }

      if (!formData.cidade) {
        setErrorMessage("Informe a cidade");
        return false;
      }

      if (!formData.estado) {
        setErrorMessage("Informe o estado");
        return false;
      }

      if (!formData.cep) {
        setErrorMessage("Informe o CEP");
        return false;
      }

      if (!formData.rua) {
        setErrorMessage("Informe a rua ou localização");
        return false;
      }
    }

    if (step === 2) {
      if (!formData.tipoImovel) {
        setErrorMessage("Selecione o tipo de imóvel");
        return false;
      }

      if (formData.modoHospedagem === "dividido" && !formData.maxCompanheiros) {
        setErrorMessage("Informe quantas pessoas podem dividir a hospedagem");
        return false;
      }
    }

    if (step === 3) {
      if (formData.imagens.length === 0) {
        setErrorMessage("Adicione pelo menos uma imagem do imóvel");
        return false;
      }
    }

    if (step === 4) {
      if (!formData.preco) {
        setErrorMessage("Defina o preço da hospedagem");
        return false;
      }

      if (!formData.dataInicio || !formData.dataFim) {
        setErrorMessage("Selecione as datas disponíveis");
        return false;
      }
    }

    return true;
  }

  function nextStep() {
    if (!validateStep()) return;

    if (step < 5) {
      setStep((prev) => prev + 1);
    }
  }

  function prevStep() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  return {
    step,
    formData,
    errorMessage,
    updateField,
    nextStep,
    prevStep,
    setStep
  };
}
