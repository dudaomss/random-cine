import Button from '@mui/material/Button';

const BotaoMenu = () => {
    return(
    <div className="botao-menu">
        <Button
            variant="contained"
            style={{
                height: '50px',
                width: '290px',
                padding:'4px',
                borderRadius: '89px',
                backgroundColor: 'white',
                color: '#480202',
                fontWeight: '600',
            }}
        >
            sorteie um aqui &#58;&#41;
        </Button>
    </div> 
)};

export default BotaoMenu;
