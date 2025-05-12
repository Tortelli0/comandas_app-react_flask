/* eslint-disable no-unused-vars */
// // src/pages/ProdutoForm.jsx
// import React from "react";
// import { useForm } from "react-hook-form";
// import { TextField, Button, Box, Typography } from "@mui/material";
// import { useNavigate } from 'react-router-dom';

// const ProdutoForm = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     console.log("Dados do produto:", data);
//     navigate("/produtos"); // Redireciona para a lista de produtos
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ padding: 2 }}>
//       <Typography variant="h4" textAlign="center" mb={2}>Cadastro de Produto</Typography>

//       <TextField
//         label="Nome"
//         fullWidth
//         margin="normal"
//         {...register("nome", { required: "Nome é obrigatório", maxLength: 100 })}
//         error={!!errors.nome}
//         helperText={errors.nome ? errors.nome.message : "Máximo de 100 caracteres"}
//       />

//       <TextField
//         label="Preço"
//         type="number"
//         fullWidth
//         margin="normal"
//         {...register("preco", {
//           required: "Preço é obrigatório",
//           min: { value: 0, message: "Preço deve ser maior que 0" },
//         })}
//         error={!!errors.preco}
//         helperText={errors.preco ? errors.preco.message : ""}
//       />

//       <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
//         <Button sx={{ mr: 1 }} onClick={() => navigate("/produtos")}>Cancelar</Button>
//         <Button type="submit" variant="contained">Cadastrar</Button>
//       </Box>
//     </Box>
//   );
// };

// export default ProdutoForm;

import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography, Toolbar } from "@mui/material";

const ProdutoForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Dados do produto:", data);
  };

  return (
<Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ backgroundColor: '#ADD8E6', padding: 2, borderRadius: 1, mt: 2 }}>

    <Toolbar sx={{ backgroundColor: '#ADD8E6', padding: 1, borderRadius: 2, mb: 2, display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h6" color="primary">Dados Produto</Typography>
    </Toolbar>

      <Box sx={{ backgroundColor: 'white', padding: 2, borderRadius: 3, mb: 2 }}>

        <TextField
            label="Nome" fullWidth margin="normal"
            {...register('nome', { required: 'Nome é obrigatório' })} error={!!errors.nome} helperText={errors.nome?.message}
        />
        <TextField
            label="Descrição" fullWidth margin="normal"
            {...register('descricao', { required: 'Descrição é obrigatória' })} error={!!errors.cpf} helperText={errors.cpf?.message}
        />
        <TextField
            label="ValorUnitario" fullWidth margin="normal"
            {...register('valorunitario', { required: 'Valor Unitario é obrigatória' })} error={!!errors.cpf} helperText={errors.cpf?.message}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button sx={{ mr: 1 }}>
            Cancelar
          </Button>
          <Button type="submit" variant="contained">
            Cadastrar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProdutoForm;
