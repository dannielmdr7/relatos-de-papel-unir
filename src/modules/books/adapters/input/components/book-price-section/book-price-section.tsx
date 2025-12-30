import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Share2 } from 'lucide-react';
import { BookModel } from '../../../../domain/book.model';
import {
  calculateDiscount,
  formatAvailability,
  formatPrice,
} from '../../utils/format.utils';

interface BookPriceSectionProps {
  book: BookModel;
  className?: string;
  isItemInCar: boolean;
  onAddToCart: () => void;
  onAddToWishlist?: () => void;
  onShare?: () => void;
}

export const BookPriceSection = ({
  book,
  isItemInCar,
  onAddToCart,
  onAddToWishlist,
  onShare,
  className = '',
}: BookPriceSectionProps) => {
  const originalPrice = book.price * 1.1;
  const discount = calculateDiscount(originalPrice, book.price);
  const hasDiscount = discount > 0;

  const getAvailabilityClass = () => {
    if (book.availability > 50) return 'book-price-section__availability--high';
    if (book.availability > 0)
      return 'book-price-section__availability--medium';
    return 'book-price-section__availability--low';
  };

  return (
    <div className={`book-price-section ${className}`.trim()}>
      <Card className='book-price-section__discount-card'>
        <CardContent className='book-price-section__discount-content'>
          <div className='book-price-section__info'>
            <span className='book-price-section__label'>Libro Nuevo</span>
            <span className='book-price-section__separator'>•</span>
            <span className='book-price-section__label'>Origen: Colombia</span>
            <span className='book-price-section__shipping'>Envío Rápido</span>
          </div>
          <div className='book-price-section__price-container'>
            {hasDiscount && (
              <>
                <span className='book-price-section__original-price'>
                  {formatPrice(originalPrice)}
                </span>
                <Badge
                  variant='destructive'
                  className='book-price-section__badge'
                >
                  -{discount}%
                </Badge>
              </>
            )}
            <span className='book-price-section__current-price'>
              {formatPrice(book.price)}
            </span>
          </div>
        </CardContent>
      </Card>

      <Card className='book-price-section__purchase-card'>
        <CardContent className='book-price-section__purchase-content'>
          <div className='book-price-section__info'>
            <span className='book-price-section__label'>Libro Nuevo</span>
          </div>
          <div className='book-price-section__availability'>
            <span
              className={`book-price-section__availability-text ${getAvailabilityClass()}`}
            >
              {formatAvailability(book.availability)}
            </span>
          </div>
          <div className='book-price-section__final-price'>
            <span>{formatPrice(book.price)}</span>
          </div>
          <Button
            onClick={onAddToCart}
            className='book-price-section__buy-button'
            size='lg'
          >
            {isItemInCar ? 'Eliminar del carrito' : 'Agregar al carrito'}
          </Button>
          <div className='book-price-section__shipping-info'>
            Se enviará desde nuestra bodega entre el
            <span className='book-price-section__shipping-link'>
              Martes 30 de Diciembre
            </span>
            y el
            <span className='book-price-section__shipping-link'>
              Viernes 02 de Enero
            </span>
          </div>
          <div className='book-price-section__actions'>
            <Button
              variant='outline'
              size='sm'
              className='book-price-section__action-button'
              onClick={onAddToWishlist}
            >
              <Heart className='book-price-section__icon' />
              Agregar a lista de deseos
            </Button>
            <Button
              variant='outline'
              size='sm'
              className='book-price-section__action-button'
              onClick={onShare}
            >
              <Share2 className='book-price-section__icon' />
              Comparte y gana dinero
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
