import { useState, ChangeEvent, FormEvent } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';
import Logo from 'assets/images/Logo.png';
import paths from 'routes/paths';
import './styleAuth.css';
import authService from './service';

interface User {
  [key: string]: string;
}

const SignUp = () => {
  const [user, setUser] = useState<User>({ name: '', email: '', username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  const result =  await authService.saveUser(user);
    if(result){
      console.log(result)
    }
  };

  return (
    <Stack mx="auto" direction="column" alignItems="center" width={1} maxWidth={450}>
      <ButtonBase LinkComponent={Link} href="/" sx={{ mt: 6 }} disableRipple>
        <Image src={Logo} alt="logo" height={92} width={92} />
      </ButtonBase>
      <Typography mt={4} variant="h2" fontWeight={600}>
        Hostel Liberty
      </Typography>

      <Box component="form" className='box_auth' onSubmit={handleSubmit}>
        <TextField
          id="name"
          name="name"
          type="text"
          color="secondary"
          label="Nombres"
          value={user.name}
          onChange={handleInputChange}
          variant="filled"
          placeholder="Ingrese Nombres"
          autoComplete="email"
          sx={{ mt: 3 }}
          fullWidth
          autoFocus
          required
        />
        <TextField
          id="email"
          name="email"
          type="email"
          color="secondary"
          label="Correo"
          value={user.email}
          onChange={handleInputChange}
          variant="filled"
          placeholder="mail@example.com"
          autoComplete="email"
          sx={{ mt: 6 }}
          fullWidth
          required
        />
        <TextField
          id="username"
          name="username"
          type="text"
          color="secondary"
          label="Usuario"
          value={user.username}
          onChange={handleInputChange}
          variant="filled"
          placeholder="Ingrese Username"
          autoComplete="email"
          sx={{ mt: 6 }}
          fullWidth
          required
        />
        <TextField
          id="password"
          name="password"
          label="Contraseña"
          color="secondary"
          type={showPassword ? 'text' : 'password'}
          value={user.password}
          onChange={handleInputChange}
          variant="filled"
          placeholder="Min. 8 characters"
          autoComplete="current-password"
          sx={{ mt: 6 }}
          fullWidth
          required
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  opacity: user.password ? 1 : 0,
                  pointerEvents: user.password ? 'auto' : 'none',
                }}
              >
                <IconButton
                  size="small"
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  sx={{ border: 'none', bgcolor: 'transparent !important' }}
                  edge="end"
                >
                  <IconifyIcon
                    icon={showPassword ? 'mdi:visibility' : 'mdi:visibility-off'}
                    color="neutral.main"
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit" variant="contained" size="large" sx={{ mt: 3 }} fullWidth>
          Create account
        </Button>
      </Box>

      <Typography
        mt={4}
        pb={12}
        variant="body2"
        textAlign={{ xs: 'center', md: 'left' }}
        letterSpacing={0.25}
      >
        Tienes una cuenta creada?{' '}
        <Link href={paths.signin} color="primary.main" fontWeight={600}>
          Login
        </Link>
      </Typography>
    </Stack>
  );
};

export default SignUp;
