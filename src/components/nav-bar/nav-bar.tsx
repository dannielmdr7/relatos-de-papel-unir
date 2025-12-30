import { Input } from '@/components/ui/input';
import './nav-bar.scss';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useCart } from '@/modules/cart';

export const NavBar = () => {
  const { items } = useCart();

  const path = useLocation();

  useEffect(() => {
    console.log('Daniel location', { path });
  }, []);

  const options: { id: number; icon: string; tooltipText: string }[] = [
    {
      id: 1,
      icon: 'fa-heart',
      tooltipText: 'Mis listas',
    },
    {
      id: 2,
      icon: 'fa-question',
      tooltipText: 'Ayuda',
    },
    {
      id: 3,
      icon: 'fa-star',
      tooltipText: 'Opiniones de clientes',
    },
  ];

  

  return (
    <div className='nav-bar__container__content'>
      <div className='nav-bar__container__content__information'>
        <div className='nav-bar__container__content__information__site-name'>
          <span>busca libre</span>
        </div>
        <div className='nav-bar__container__content__information__site-direction'>
          <span>ingresa tu</span>
          <span>direccion</span>
        </div>
        <div className='nav-bar__container__content__information__search'>
          <Input
            type='text'
            placeholder='Título, Autor o ISBN'
            style={{ height: '100%' }}
          />
        </div>
      </div>
      <div className='nav-bar__container__content__options'>
        <div className=' nav-bar-icon nav-bar__container__content__options__car'>
          {items.length > 0 && (
            <div className='nav-bar__container__content__options__car__items'>
              {items.length}
            </div>
          )}
          <i className='fa-solid fa-cart-shopping'></i>
        </div>
        <div className='nav-bar__container__content__options__actions'>
          <TooltipProvider>
            {options.map(item => (
              <Tooltip key={item.id}>
                <TooltipTrigger asChild>
                  <i className={`fa-solid ${item.icon}`}></i>
                </TooltipTrigger>
                <TooltipContent>
                  <p className='nav-bar__container__content__options__actions__tooltip'>
                    {item.tooltipText}
                  </p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
        <div className='nav-bar__container__content__options__personal'>
          <div className='nav-bar__container__content__options__personal__user'>
            <div className='nav-bar__container__content__options__personal__user__icon'>
              <i className='fa-solid fa-user'></i>
            </div>
            <span className='nav-bar__container__content__options__personal__user__text'>
              Mi Cuenta
            </span>
          </div>
          <div className='nav-bar__container__content__options__personal__language'>
            <i className='fa-solid fa-flag'></i>
          </div>
        </div>
      </div>
    </div>
  );
};
