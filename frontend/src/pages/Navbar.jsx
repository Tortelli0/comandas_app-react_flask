import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  // Verifica se o login foi realizado
  const loginRealizado = localStorage.getItem('loginRealizado');

  // Evento para deslogar o usuário
  const handleLogout = () => {
    localStorage.removeItem('loginRealizado');
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Comandas
        </Typography>

        {loginRealizado && (
          <>
            <Button color="inherit" onClick={() => navigate('/home')}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate('/funcionarios')}>
              Funcionários
            </Button>
            <Button color="inherit" onClick={() => navigate('/clientes')}>
              Clientes
            </Button>
            <Button color="inherit" onClick={() => navigate('/produtos')}>
              Produtos
            </Button>
            <Button color="inherit" onClick={handleLogout}>
              Sair
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
