export const style = {
    play: {
        hover: {
            backgroundColor: 'blue',
            color: 'white'
        },
        button: {
            padding: '5px',
            fontFamily: 'Helvetica',
            fontSize: '1.0em',
            cursor: 'pointer',
            pointerEvents: 'none',
            outline: '#4CAF50 solid 10px',
            backgroundColor: 'red',
            border: '3px solid orange',
            borderRadius: '15px',
            // if we define height and width, the play icons shows but it's not scaled or centered
            height: '50px',
            width: '200px',
            // to center or scale  it
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        // the svg needs to be styled via css with
        // display: block;
        // height: 100%;
    },
    pause: {
        hover: {},
        button: {},
    },
    stop: {
        hover: {},
        button: {},
    },
    resume: {
        hover: {},
        button: {},
    },
};

const minimalButtonStyle = {
    height: '40px',
    width: '40px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const minimalHoverButtonStyle = {
    backgroundColor: 'white'
}

// nb all buttons need to be listed even if not used
export const simpleButton = {
    play: {
        hover: minimalHoverButtonStyle,
        button: minimalButtonStyle,
    },
    pause: {
        hover: {},
        button: {},
    },
    stop: {
        hover: {},
        button: {},
    },
    resume: {
        hover: {},
        button: {},
    },
};

export const simpleAllButtons = {
    play: {
        hover: minimalHoverButtonStyle,
        button: minimalButtonStyle,
    },
    pause: {
        hover: minimalHoverButtonStyle,
        button: minimalButtonStyle,
    },
    stop: {
        hover: minimalHoverButtonStyle,
        button: minimalButtonStyle,
    },
    resume: {
        hover: minimalHoverButtonStyle,
        button: minimalButtonStyle,
    },
};

export const smallButton = {
    ...simpleButton,
    play: {
        ...simpleButton.play,
        button: {
            ...minimalButtonStyle,
            height: '30px',
            width: '30px',
            margin: '0 5px'
        }
    }
}