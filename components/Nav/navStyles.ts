
const main = '#35012C'
const menu = '#3A015C'


export const dropBtnStyles: { [key: string]: React.CSSProperties } = {
    btn: {
        backgroundColor: menu,
        color: 'white',
        cursor: 'pointer',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        listStyleType: 'none',
        position: 'relative', 
        width: '100%',
        height: '48px',
        top: '-1px',
        zIndex: 100, 
    },
    bars: {
        width: '35px',
        height: '5px',
        backgroundColor: '#606c94',
        margin: '6px auto',
        pointerEvents: 'none'
    },
    barOne: {
        transition: '0.5s', 
    },
    barTwo: {
        transition: '0.3s',
    },
    barThree: {
        transition: '0.5s',
    },
    barOneX: {
        transform: 'translate(0, 11px) rotate(-45deg)',
    },
    barTwoX: {
        opacity: '0',
    },
    barThreeX: {
        transform: 'translate(0, -11px) rotate(45deg)',
    },
    dropContent: {
        transform: 'scaleY(0)',
        transformOrigin: 'top',
        transitionDuration: '0.5s',
        position: 'absolute',
        backgroundColor: '#242D37',
        width: '100%',
        zIndex: 100,
        textAlign: 'center',
        scale: 1.7,
        top: '54px'
    },
    dropContentShow: {
        transform: 'scaleY(1)',
        transformOrigin: 'top center',
    },
    dropItem: {
        display: 'block',
        color: 'white',
        padding: '6px 16px',
        textDecoration: 'none',
        borderBottom: '1px solid #000',
    },
};