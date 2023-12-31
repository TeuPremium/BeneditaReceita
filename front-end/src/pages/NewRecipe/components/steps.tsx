import { BigInputs, StepAdded } from "../styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

export type Step = {
  Description: string;
  img: string;
  step: number | null;
};

const array: Step[] = [];
let count = 0;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Steps(prop: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step>();
  const [addStep, setaddStep] = useState('none')

  const onSubmit: SubmitHandler<Step> = (data) => {
    count++;
    data.step = count;
    array.push(data);
    prop.step(array);
    setaddStep('')
    setTimeout(() => {
      setaddStep('none')
    }, 1000);
  };

  return (
    <>
    <StepAdded style={{display:addStep}}>Passo adicionado</StepAdded>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Descreva o passo</h2>
        <input
          style={{ background: "white" }}
          placeholder="imagem para referencia"
          type="url"
          {...register("img", { required: true })}
        />

        {errors.img && (
          <span>
            Adicione uma imagem para a etapa! Precisa ser uma url de imagem
          </span>
        )}

        <BigInputs>
          <h2>Foto da receita pronta</h2>
          <input
            style={{ background: "white" }}
            placeholder="Descrição do passo"
            type="text"
            {...register("Description", { required: true })}
          />

          {errors.Description && (
            <span> Você precisa descrever esse passo! </span>
          )}
          {errors.Description && <span> Adicione uma descrição</span>}
        </BigInputs>

        <input
          style={{ background: "#FF531C", color: "#ffffff", border: "none" }}
          type="submit"
          value={"Adicionar passo"}
        />
      </form>
    </>
  );
}


