const style = {
    overlay: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        background: 'none',
        pointerEvents: 'none',
        transform: 'scale(0)',
        opacity: 0,
        transition: 'transform 0.2s ease 0s, opacity 0.2s ease 0s'
    },
    content: {
        position: 'static',
        maxWidth: 296,
        margin: '0 auto',
        padding: 0,
        border: 'none',
        borderRadius: 0,
        background: 'none'
    }
};

export default style;