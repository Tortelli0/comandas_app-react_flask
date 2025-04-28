// src/pages/ClienteForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';

const ClienteForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Dados do cliente:", data);
    navigate("/clientes"); // Redireciona para a lista de clientes
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ padding: 2 }}>
      <Typography variant="h4" textAlign="center" mb={2}>Cadastro de Cliente</Typography>

      <TextField
        label="Nome"
        fullWidth
        margin="normal"
        {...register("nome", { required: "Nome é obrigatório", maxLength: 100 })}
        error={!!errors.nome}
        helperText={errors.nome ? errors.nome.message : "Máximo de 100 caracteres"}
      />

      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        {...register("email", { required: "Email é obrigatório", maxLength: 100 })}
        error={!!errors.email}
        helperText={errors.email?.message || "Máximo de 100 caracteres"}
      />

      <InputMask
        mask="(99) 99999-9999"
        {...register("telefone", { required: "Telefone é obrigatório" })}
      >
        {(inputProps) => (
          <TextField
            {...inputProps}
            label="Telefone"
            fullWidth
            margin="normal"
            error={!!errors.telefone}
            helperText={errors.telefone?.message}
          />
        )}
      </InputMask>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Button sx={{ mr: 1 }} onClick={() => navigate("/clientes")}>Cancelar</Button>
        <Button type="submit" variant="contained">Cadastrar</Button>
      </Box>
    </Box>
  );
};

export default ClienteForm;
