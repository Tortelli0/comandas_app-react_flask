// src/pages/ProdutoForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const ProdutoForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Dados do produto:", data);
    navigate("/produtos"); // Redireciona para a lista de produtos
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ padding: 2 }}>
      <Typography variant="h4" textAlign="center" mb={2}>Cadastro de Produto</Typography>

      <TextField
        label="Nome"
        fullWidth
        margin="normal"
        {...register("nome", { required: "Nome é obrigatório", maxLength: 100 })}
        error={!!errors.nome}
        helperText={errors.nome ? errors.nome.message : "Máximo de 100 caracteres"}
      />

      <TextField
        label="Preço"
        type="number"
        fullWidth
        margin="normal"
        {...register("preco", {
          required: "Preço é obrigatório",
          min: { value: 0, message: "Preço deve ser maior que 0" },
        })}
        error={!!errors.preco}
        helperText={errors.preco ? errors.preco.message : ""}
      />

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button sx={{ mr: 1 }} onClick={() => navigate("/produtos")}>Cancelar</Button>
        <Button type="submit" variant="contained">Cadastrar</Button>
      </Box>
    </Box>
  );
};

export default ProdutoForm;
