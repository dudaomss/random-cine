import Button from '@mui/material/Button';
import Link from 'next/link'

const BotaoSortearNovamente = ({genreId}) => {
    return(
    <div className="sortear-novamente-container">
        <Link href="/escolher-categoria" className="link-botao">
            <Button
            className="botao-sortear-novamente"
            variant="contained"
            style={{
            height: '50px',
            width: '290px',
            padding:'4px',
            color: '#ffffff',
            fontWeight: '600',  
            }}
        >
            NÃO CURTIU &#41;&#58; ? SORTEAR NOVAMENTE
            </Button>
        </Link>
        
    </div> 
)};

export default BotaoSortearNovamente;