/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import { useForm, Controller } from 'react-hook-form';
// import React from "react";
// import { TextField, Button, Box, Typography, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
// import IMaskInputWrapper from '../components/IMaskInputWrapper';

// const FuncionarioForm = () => {
//   // Remova o register e reset, pois não são necessários no seu caso
//   const { control, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     console.log("Dados do funcionário:", data);
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ backgroundColor: '#ADD8E6', padding: 2, borderRadius: 1, mt: 2 }}>
//       {/* CPF com máscara */}
//       <Controller
//         name="cpf"
//         control={control}
//         defaultValue=""
//         rules={{ required: 'CPF é obrigatório' }}
//         render={({ field }) => (
//           <TextField
//             {...field}
//             label="CPF"
//             fullWidth
//             margin="normal"
//             error={!!errors.cpf}
//             helperText={errors.cpf?.message}
//             InputProps={{
//               inputComponent: IMaskInputWrapper,
//               inputProps: {
//                 mask: "000.000.000-00",
//                 definitions: { "0": /[0-9]/ },
//                 unmask: true,
//               },
//             }}
//           />
//         )}
//       />
      
//       {/* Nome do Funcionário */}
//       <Controller
//         name="nome"
//         control={control}
//         defaultValue=""
//         rules={{ required: 'Nome é obrigatório' }}
//         render={({ field }) => (
//           <TextField
//             {...field}
//             label="Nome"
//             fullWidth
//             margin="normal"
//             error={!!errors.nome}
//             helperText={errors.nome?.message}
//           />
//         )}
//       />
      
//       {/* Cargo */}
//       <Controller
//         name="cargo"
//         control={control}
//         defaultValue=""
//         rules={{ required: 'Cargo é obrigatório' }}
//         render={({ field }) => (
//           <FormControl fullWidth margin="normal" error={!!errors.cargo}>
//             <InputLabel>Cargo</InputLabel>
//             <Select {...field}>
//               <MenuItem value="Gerente">Gerente</MenuItem>
//               <MenuItem value="Assistente">Assistente</MenuItem>
//               <MenuItem value="Analista">Analista</MenuItem>
//             </Select>
//             <Typography variant="body2" color="error">{errors.cargo?.message}</Typography>
//           </FormControl>
//         )}
//       />

//       {/* Botão de Envio */}
//       <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Salvar</Button>
//     </Box>
//   );
// };

// export default FuncionarioForm;

import { useForm, Controller } from 'react-hook-form';
import React from 'react';
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

const FuncionarioForm = () => {
    const { control, register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
      console.log("Dados do funcionário:", data);
    };

    return (
      
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ backgroundColor: '#ADD8E6', padding: 2, borderRadius: 1, mt: 2 }}>
        
        <Toolbar sx={{ backgroundColor: '#ADD8E6', padding: 1, borderRadius: 2, mb: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" color="primary">Dados Funcionário</Typography>
        </Toolbar>
    
        <Box sx={{ backgroundColor: 'white', padding: 2, borderRadius: 3, mb: 2 }}>

          <TextField
              label="Nome" fullWidth margin="normal"
              {...register('nome', { required: 'Nome é obrigatório' })} error={!!errors.nome} helperText={errors.nome?.message}
          />
                  {/* CPF com máscara */}
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
          <TextField
              label="Matrícula" fullWidth margin="normal"
              {...register('matricula', { required: 'Matrícula é obrigatória' })} error={!!errors.matricula} helperText={errors.matricula?.message}
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
          <TextField
              label="Senha" type="password" fullWidth margin="normal"
              {...register('senha', { required: 'Senha é obrigatória', minLength: { value: 6, message: 'Senha deve ter pelo menos 6 caracteres' } })}
              error={!!errors.senha} helperText={errors.senha?.message}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="grupo-label">Grupo</InputLabel>
            <Select
                labelId="grupo-label"
                label="Grupo"
                onChange={(e) => setGrupo(e.target.value)}
                {...register('grupo')}
            >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="gerente">Gerente</MenuItem>
                <MenuItem value="funcionario">Funcionário</MenuItem>
            </Select>
          </FormControl>
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

export default FuncionarioForm;