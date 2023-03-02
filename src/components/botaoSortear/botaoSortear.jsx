import Button from '@mui/material/Button';
import Link from 'next/link'

const BotaoSortear = ({genreId}) => {
    return(
    <div className="botao-sortear-container">
        <Link
          href={{
            pathname: '/sorteado',
            query: { genreId: genreId },
          }}
        >
            <Button
                className="botao-sortear"
                variant="contained"
                style={{
                height: '50px',
                width: '237px',
                padding:'4px',
                borderRadius: '89px',
                color: '#ffffff',
                fontWeight: '600',  
                }}
            >
                SORTEAR &#58;&#41;
            </Button>
        </Link>
        
    </div> 
)};

export default BotaoSortear;