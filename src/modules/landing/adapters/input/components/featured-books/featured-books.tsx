import { useBookServices } from '@common/context/di-context';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

interface FeaturedBooksProps {
  limit?: number;
}

export const FeaturedBooks = ({ limit = 6 }: FeaturedBooksProps) => {
  const bookService = useBookServices();

  const { data: books, isLoading } = useQuery({
    queryKey: ['books'],
    queryFn: () => bookService.getBooks(),
  });

  const featuredBooks = books?.slice(0, limit) || [];

  if (isLoading) {
    return (
      <div className='featured-books'>
        <div className='featured-books__loading'>
          Cargando libros destacados...
        </div>
      </div>
    );
  }

  return (
    <div className='featured-books'>
      <div className='featured-books__container'>
        <h2 className='featured-books__title'>Libros Destacados</h2>
        <div className='featured-books__grid'>
          {featuredBooks.map(book => (
            <Link
              key={book.id}
              to={`/book/${book.id}`}
              className='featured-books__card'
            >
              {book.image && (
                <div className='featured-books__image'>
                  <img src={book.image} alt={book.title} />
                </div>
              )}
              <div className='featured-books__info'>
                <h3 className='featured-books__book-title'>{book.title}</h3>
                <p className='featured-books__book-author'>{book.author}</p>
                <p className='featured-books__book-price'>
                  ${book.price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Link to='/books' className='featured-books__view-all'>
          Ver todos los libros →
        </Link>
      </div>
    </div>
  );
};
