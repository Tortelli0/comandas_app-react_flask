// src/pages/ProdutoList.jsx
import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Button, Toolbar } from '@mui/material';
import { Edit, Delete, Visibility, FiberNew } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ProdutoList = () => {
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper}>
      <Toolbar sx={{ backgroundColor: '#ADD8E6', padding: 2, borderRadius: 1, mb: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" color="primary">Produtos</Typography>
        <Button color="primary" onClick={() => navigate('/produto')} startIcon={<FiberNew />}>Novo</Button>
      </Toolbar>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell>ValorUnitario</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={1}>
            <TableCell>1</TableCell>
            <TableCell>Produto Teste</TableCell>
            <TableCell>Descricao</TableCell>
            <TableCell>R$50,00</TableCell>
            <TableCell>
              <IconButton> <Visibility color="primary" /> </IconButton>
              <IconButton> <Edit color="secondary" /> </IconButton>
              <IconButton> <Delete color="error" /> </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProdutoList;
