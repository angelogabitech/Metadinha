"use client";

import styles from "../../anunciar.module.css";
import { AnuncioFormData } from "../../types/anuncio.types";

import { DndContext, closestCenter } from "@dnd-kit/core";

import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

interface Props {
  formData: AnuncioFormData;
  updateField: (field: keyof AnuncioFormData, value: any) => void;
}

function SortableImage({
  img,
  index,
  removeImage,
}: {
  img: string;
  index: number;
  removeImage: (index: number) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: img });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={styles.imageCard}
    >
      <img src={img} />

      {index === 0 && <div className={styles.coverTag}>Capa</div>}

      <button onClick={() => removeImage(index)} className={styles.removeImage}>
        ✕
      </button>
    </div>
  );
}

export default function Step3({ formData, updateField }: Props) {
  function handleImages(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);

    const urls = files.map((file) => URL.createObjectURL(file));

    updateField("imagens", [...formData.imagens, ...urls]);
  }

  function removeImage(index: number) {
    const images = [...formData.imagens];

    images.splice(index, 1);

    updateField("imagens", images);
  }

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = formData.imagens.indexOf(active.id);
      const newIndex = formData.imagens.indexOf(over.id);

      const newArray = arrayMove(formData.imagens, oldIndex, newIndex);

      updateField("imagens", newArray);
    }
  }

  return (
    <div>
      <h2 className={styles.stepTitle}>Imagens do imóvel</h2>

      <p className={styles.sectionLabel}>
        Arraste as fotos para definir a capa
      </p>

      <div className={styles.imagesGrid}>
        <label className={styles.addImageCard}>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImages}
            hidden
          />

          <div className={styles.addIcon}>＋</div>

          <span>Adicionar foto</span>
        </label>

        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={formData.imagens}
            strategy={verticalListSortingStrategy}
          >
            {formData.imagens.map((img, index) => (
              <SortableImage
                key={img}
                img={img}
                index={index}
                removeImage={removeImage}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}
