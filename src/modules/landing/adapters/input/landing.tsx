import { HeroSection, RegistrationSection, FeaturedBooks } from './components';
import './landing.scss';

export const Landing = () => {
  return (
    <div className='landing'>
      <HeroSection />
      <RegistrationSection />
      <FeaturedBooks limit={6} />
    </div>
  );
};
