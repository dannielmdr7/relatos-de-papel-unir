import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const RegistrationSection = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se podría agregar lógica de registro
    // Por ahora, simplemente redirige a /books
    navigate('/books');
  };

  return (
    <div className='registration-section'>
      <div className='registration-section__container'>
        <div className='registration-section__content'>
          <h2 className='registration-section__title'>
            Únete a nuestra comunidad de lectores
          </h2>
          <p className='registration-section__description'>
            Regístrate ahora y accede a miles de libros, ofertas exclusivas y
            recomendaciones personalizadas.
          </p>
          <form className='registration-section__form' onSubmit={handleSubmit}>
            <div className='registration-section__form-group'>
              <input
                type='text'
                placeholder='Nombre completo'
                className='registration-section__input'
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>
            <div className='registration-section__form-group'>
              <input
                type='email'
                placeholder='Correo electrónico'
                className='registration-section__input'
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <Button
              type='submit'
              size='lg'
              className='registration-section__submit-button'
            >
              Registrarse y Explorar
            </Button>
          </form>
          <div className='registration-section__login-link'>
            <span>¿Ya tienes una cuenta? </span>
            <button
              className='registration-section__login-button'
              onClick={() => navigate('/books')}
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
