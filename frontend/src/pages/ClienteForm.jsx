/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// // src/pages/ClienteForm.jsx
// import React from "react";
// import { useForm } from "react-hook-form";
// import { TextField, Button, Box, Typography } from "@mui/material";
// import InputMask from 'react-input-mask';
// import { useNavigate } from 'react-router-dom';

// const ClienteForm = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     console.log("Dados do cliente:", data);
//     navigate("/clientes"); // Redireciona para a lista de clientes
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ padding: 2 }}>
//       <Typography variant="h4" textAlign="center" mb={2}>Cadastro de Cliente</Typography>

//       <TextField
//         label="Nome"
//         fullWidth
//         margin="normal"
//         {...register("nome", { required: "Nome é obrigatório", maxLength: 100 })}
//         error={!!errors.nome}
//         helperText={errors.nome ? errors.nome.message : "Máximo de 100 caracteres"}
//       />

//       <TextField
//         label="Email"
//         type="email"
//         fullWidth
//         margin="normal"
//         {...register("email", { required: "Email é obrigatório", maxLength: 100 })}
//         error={!!errors.email}
//         helperText={errors.email?.message || "Máximo de 100 caracteres"}
//       />

//       <InputMask
//         mask="(99) 99999-9999"
//         {...register("telefone", { required: "Telefone é obrigatório" })}
//       >
//         {(inputProps) => (
//           <TextField
//             {...inputProps}
//             label="Telefone"
//             fullWidth
//             margin="normal"
//             error={!!errors.telefone}
//             helperText={errors.telefone?.message}
//           />
//         )}
//       </InputMask>

//       <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
//         <Button sx={{ mr: 1 }} onClick={() => navigate("/clientes")}>Cancelar</Button>
//         <Button type="submit" variant="contained">Cadastrar</Button>
//       </Box>
//     </Box>
//   );
// };

// export default ClienteForm;

// src/pages/ClienteForm.jsx

import { useForm,Controller } from 'react-hook-form';
import React, { useState } from 'react';
import {
    TextField,
    Button,
    Box,
    Typography,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Toolbar
} from '@mui/material';

// import do IMaskInputWrapper, que é o wrapper do IMaskInput
import IMaskInputWrapper from '../assets/components/IMaskInputWrapper.jsx';

const ClienteForm = () => {
  const { control, register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Dados do cliente:", data);
  };

  return (
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ backgroundColor: '#ADD8E6', padding: 2, borderRadius: 1, mt: 2 }}>

      <Toolbar sx={{ backgroundColor: '#ADD8E6', padding: 1, borderRadius: 2, mb: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" color="primary">Dados Cliente</Typography>
        </Toolbar>
    
        <Box sx={{ backgroundColor: 'white', padding: 2, borderRadius: 3, mb: 2 }}>

          <TextField
              label="Nome" fullWidth margin="normal"
              {...register('nome', { required: 'Nome é obrigatório' })} error={!!errors.nome} helperText={errors.nome?.message}
          />
          <Controller
            name="cpf" control={control} defaultValue="" rules={{ required: 'CPF é obrigatório' }}
            render={({ field }) => (
              <TextField
                  {...field}
                  label="CPF" fullWidth margin="normal"
                  error={!!errors.cpf} helperText={errors.cpf?.message}
                  InputProps={{
                      // Define o IMaskInputWrapper como o componente de entrada
                      inputComponent: IMaskInputWrapper,
                      inputProps: {
                          mask: "000.000.000-00",
                          // O regex [0-9] aceita apenas números de 0 a 9
                          definitions: {
                              "0": /[0-9]/,
                          },
                          // Retorna apenas os números no valor
                          unmask: true,
                      },
                    }}
                  />
                )}
          />
          {/* Telefone com máscara */}
          <Controller
            name="telefone"
            control={control}
            defaultValue=""
            rules={{ required: 'Telefone é obrigatório' }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Telefone"
                fullWidth
                margin="normal"
                error={!!errors.telefone}
                helperText={errors.telefone?.message}
                InputProps={{
                  inputComponent: IMaskInputWrapper,
                  inputProps: {
                    mask: "(00) 00000-0000",
                    definitions: {
                      "0": /[0-9]/,
                    },
                    unmask: true,
                  },
                }}
              />
            )}
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

    //   <TextField
    //     label="Nome"
    //     fullWidth
    //     margin="normal"
    //     {...register("nome", { required: "Nome é obrigatório", maxLength: 100 })}
    //     error={!!errors.nome}
    //     helperText={errors.nome ? errors.nome.message : "Máximo de 100 caracteres"}
    //   />

    //   <TextField
    //     label="Email"
    //     type="email"
    //     fullWidth
    //     margin="normal"
    //     {...register("email", { required: "Email é obrigatório", maxLength: 100 })}
    //     error={!!errors.email}
    //     helperText={errors.email?.message || "Máximo de 100 caracteres"}
    //   />

    //   <InputMask
    //     mask="(99) 99999-9999"
    //     {...register("telefone", { required: "Telefone é obrigatório" })}
    //   >
    //     {(inputProps) => (
    //       <TextField
    //         {...inputProps}
    //         label="Telefone"
    //         fullWidth
    //         margin="normal"
    //         error={!!errors.telefone}
    //         helperText={errors.telefone?.message}
    //       />
    //     )}
    //   </InputMask>

    //   <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
    //     <Button sx={{ mr: 1 }} onClick={() => navigate("/clientes")}>Cancelar</Button>
    //     <Button type="submit" variant="contained">Cadastrar</Button>
    //   </Box>
    // </Box>
  );
};

export default ClienteForm;
