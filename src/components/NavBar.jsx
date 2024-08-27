import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import '../App.css'
import { AuthContext } from "../context/AuthContext"
import { useContext } from 'react';

const pages = ['Recetas', 'Crear Receta'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const {isAuth} = useContext(AuthContext)
  const {logout} = useContext(AuthContext)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar style={{backgroundColor:'#8AA37B'}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display:'flex', justifyContent:'space-between',flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Box sx={{display:'flex'}}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={'/'} className='link'>
                RECETAS
                </Link>
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={'/new-recipe'} className='link'>
                CREAR RECETA
                </Link>
              </Button>
            </Box>
              <Box sx={{display:'flex'}}> 
              {isAuth ?  (<Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link onClick={logout} className='link'>
                Cerrar sesión
                </Link>
              </Button>) 
              : 
              (<>
                  <Button
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    <Link to={'/login'} className='link'>
                    Iniciar sesión
                    </Link>
                  </Button>
                  <Button
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    <Link to={'/register'} className='link'>
                    Registrarse
                    </Link>
                  </Button>
              </>
              )}
              </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
