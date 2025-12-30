import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';

export const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='hero-section__background'>
        <div className='hero-section__gradient'></div>
        <div className='hero-section__pattern'></div>
      </div>
      <div className='hero-section__content'>
        <div className='hero-section__icon'>
          <BookOpen size={48} />
        </div>
        <h1 className='hero-section__title'>Relatos de Papel</h1>
        <p className='hero-section__subtitle'>
          Descubre tu próxima gran lectura en nuestra librería online
        </p>
        <p className='hero-section__description'>
          Más de 1,000 libros disponibles para todos los gustos. Encuentra tu
          próxima aventura literaria con nuestras recomendaciones personalizadas
          y ofertas exclusivas.
        </p>
        <div className='hero-section__actions'>
          <Link to='/books'>
            <Button size='lg' className='hero-section__cta-button'>
              Explorar Catálogo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
