import Link from 'next/link';
import Container from '../Container';
import FooterList from './FooterList';
import { MdCode, MdFacebook } from 'react-icons/md';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Produtos</h3>
            <Link href="#">Celulares</Link>
            <Link href="#">Notebooks</Link>
            <Link href="#">Computadores</Link>
            <Link href="#">Relógios</Link>
            <Link href="#">TVs</Link>
            <Link href="#">Acessórios</Link>
          </FooterList>

          <FooterList>
            <h3 className="text-base font-bold mb-2">Atendimento ao Cliente</h3>
            <Link href="#">Fale Conosco</Link>
            <Link href="#">Política de Envio</Link>
            <Link href="#">Devoluções & Trocas</Link>
            <Link href="#">FAQs</Link>
          </FooterList>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">Sobre Nós</h3>
            <p className="mb-2">
              Em nossa loja de eletrônicos, nos dedicamos a fornecer os melhores
              e mais recentes dispositivos e acessórios para nossos clientes.
              Com uma ampla seleção de telefones, TVs, laptops, relógios e
              acessórios.
            </p>
            <p>
              &copy; {new Date().getFullYear()} JanelaStore. Todos os direitos
              reservados.
            </p>
          </div>

          <FooterList>
            <h3 className="text-base font-bold mb-2">Redes Sociais</h3>
            <div className="flex gap-2">
              <Link
                href="https://facebook.com/trichains"
                target="_blank"
                rel="noopener noreferrer">
                <MdFacebook size={24} />
              </Link>
              <Link
                href="https://github.com/trichains"
                target="_blank"
                rel="noopener noreferrer">
                <AiFillGithub size={24} />
              </Link>
              <Link
                href="https://trichains.dev"
                target="_blank"
                rel="noopener noreferrer">
                <MdCode size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/trichains/"
                target="_blank"
                rel="noopener noreferrer">
                <AiFillLinkedin size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
