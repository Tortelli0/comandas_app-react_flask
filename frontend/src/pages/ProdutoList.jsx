/* eslint-disable no-undef */
// src/pages/ProdutoList.jsx
import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Button, Toolbar } from '@mui/material';
import { Edit, Delete, Visibility, FiberNew } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ProdutoList = () => {
    // O useNavigate é um hook que permite navegar programaticamente entre as rotas da aplicação
    const navigate = useNavigate();
  
    // // Hook para detectar o tamanho da tela
    // // theme: Obtém o tema do Material-UI.
    // const theme = useTheme();
    // // Aqui, estamos verificando se a tela é menor ou igual ao breakpoint 'sm' definido no tema
    // // O valor 'sm' é definido no tema do Material-UI e representa um breakpoint específico (geralmente 600px)
    // const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
    // // useState: usado para gerenciar o estado local do componente, como a lista de produtos.
    // // Aqui, estamos criando um estado chamado produtos e uma função para atualizá-lo chamada setProdutos.
    // // O estado inicial é um array vazio, que será preenchido com os dados dos produtos após a chamada da API / Proxy/BFF.
    // const [produtos, setProdutos] = useState([]);
  
    // // useEffect usado para executar efeitos colaterais, como buscar dados da API / Proxy/BFF ao carregar o componente.
    // // O array vazio [] significa que o efeito será executado apenas uma vez, quando o componente for montado.
    // useEffect(() => {
    //   fetchProdutos();
    // }, []);
    
    // // Função para buscar a lista de produtos da API / Proxy/BFF
    // // getProdutos: função que faz a chamada à API / Proxy/BFF para buscar os produtos.
    // const fetchProdutos = async () => {
    //   try {
    //       const data = await getProdutos();
    //       setProdutos(data);
    //   } catch (error) {
    //       console.error('Erro ao buscar produtos:', error);
    //   }
    // };
  
    // // Função para lidar com o clique no botão de deletar produto
    // // handleDeleteClick: função que exibe um toast de confirmação antes de excluir o produto.
    // const handleDeleteClick = (produto) => {
    //   toast(
    //       <div>
    //           <Typography>
    //               Tem certeza que deseja excluir o produto <strong>{produto.nome}</strong>?
    //           </Typography>
    //           <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
    //               <Button
    //                   variant="contained"
    //                   color="error"
    //                   size="small"
    //                   onClick={() => handleDeleteConfirm(produto.id_produto)}
    //                   style={{ marginRight: '10px' }}
    //               >
    //                   Excluir
    //               </Button>
    //               <Button
    //                   variant="outlined"
    //                   size="small"
    //                   onClick={() => toast.dismiss()}
    //               >
    //                   Cancelar
    //               </Button>
    //           </div>
    //       </div>,
    //       {
    //           position: "top-center",
    //           autoClose: false,
    //           closeOnClick: false,
    //           draggable: false,
    //           closeButton: false,
    //       }
    //   );
    // };
  
    // const handleDeleteConfirm = async (id) => {
    //   try {
    //       await deleteProduto(id);
    //       fetchProdutos();
    //       toast.dismiss(); // Fecha o toast após a exclusão
    //       toast.success('Produto excluído com sucesso!', { position: "top-center" });
    //   } catch (error) {
    //       console.error('Erro ao deletar produto:', error);
    //       toast.error('Erro ao excluir produto.', { position: "top-center" });
    //   }
    // };
  
    // return (
    //   <TableContainer component={Paper}>
          
    //       <Toolbar sx={{ backgroundColor: '#ADD8E6', padding: 2, borderRadius: 1, mb: 2, display: 'flex', justifyContent: 'space-between' }}>
    //           <Typography variant="h6" color="primary">Produtos</Typography>
    //           <Button color="primary" onClick={() => navigate('/produto')} startIcon={<FiberNew />}>Novo</Button>
    //       </Toolbar>
  
    //       <Table>
    //           <TableHead>
    //               <TableRow>
    //                   <TableCell>ID</TableCell>
    //                   <TableCell>Nome</TableCell>
    //                   <TableCell>Descrição</TableCell>
    //                   {/* conforme o tamanho da tela, define o que renderizar */}
    //                   {!isSmallScreen && (
    //                       <>
    //                           <TableCell>ValorUnitário</TableCell>
    //                       </>
    //                   )}
    //                   <TableCell>Ações</TableCell>
    //               </TableRow>
    //           </TableHead>
  
    //       <TableBody>
    //         {produtos.map((produto) => (
    //           <TableRow key={produto.id_produto}>
    //             <TableCell>{produto.id_produto}</TableCell>
    //             <TableCell>{produto.nome}</TableCell>
    //             <TableCell>{produto.descricao}</TableCell>
    //             {/* conforme o tamanho da tela, define o que renderizar */}
    //             {!isSmallScreen && (
    //               <>
    //                 <TableCell>{produto.valorUnitario}</TableCell>
    //               </>
    //             )}
    //             <TableCell>
    //               {/* executa a rota, passando o opr view e o id selecionado */}
    //               <IconButton onClick={() => navigate(`/produto/view/${produto.id_produto}`)}>
    //                 <Visibility color="primary" />
    //               </IconButton>
  
    //               {/* executa a rota, passando o opr edit e o id selecionado */}
    //               <IconButton onClick={() => navigate(`/produto/edit/${produto.id_produto}`)}>
    //                 <Edit color="secondary" />
    //               </IconButton>
  
    //               <IconButton onClick={() => handleDeleteClick(produto)}>
    //                 <Delete color="error" />
    //               </IconButton>
    //             </TableCell>
    //           </TableRow>
    //         ))}
    //       </TableBody>           
    //     </Table>
    //   </TableContainer>
    // );

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
