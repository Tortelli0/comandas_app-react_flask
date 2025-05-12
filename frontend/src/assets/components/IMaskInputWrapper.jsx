// import React from "react";
// import { useForm } from "react-hook-form";
// import IMaskInputWrapper from "./IMaskInputWrapper";  // Importe o componente

// const MyForm = () => {
//   const { register, handleSubmit, setValue } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);  // Aqui você pode ver o valor da entrada com a máscara aplicada
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label htmlFor="phone">Phone</label>
//         <IMaskInputWrapper
//           {...register("phone", { required: true })}
//           mask="(000) 000-0000"
//           onChange={(e) => setValue("phone", e.target.value)}  // Atualiza o valor no formulário
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default MyForm;

import React, { forwardRef } from "react";
import { IMaskInput } from "react-imask";

// Componente Wrapper para lidar com a ref e propriedades
const IMaskInputWrapper = forwardRef(function IMaskInputWrapper(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
          {...other}
          // Passa a ref corretamente para o IMaskInput
          inputRef={ref}
          // Atualiza o valor no react-hook-form usando o onChange
          // O onAccept é chamado quando o valor é aceito, então chamamos o onChange com o novo valor
          onAccept={(value) => onChange({ target: { value } })}
      />
    );
});

export default IMaskInputWrapper;