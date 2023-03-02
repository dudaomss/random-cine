import Image from 'next/image';
import Link from 'next/link';
import Logotipo from '../../img/random-cine-logo.png';
import BotaoMenu from '@/components/botaoMenu/botaoMenu';
import FadeIn from '@/components/animation/fadeIn';

const PaginaInicial = () => (
    <div>
      <FadeIn>
        <Image src={Logotipo} alt="Minha imagem" width={520} height={297} />
        <p className='mensagem-inicial'>CANSADO DE DEMORAR PARA ESCOLHER UM FILME?</p>
        <Link href="/escolher-categoria" className="link-botao">
          <BotaoMenu />
        </Link>
      </FadeIn>
    </div>
  );

export default PaginaInicial;
