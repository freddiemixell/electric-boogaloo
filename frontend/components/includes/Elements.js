import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import { media } from './Breakpoints';
const { useRef, useState, useEffect, useCallback } = React;

const Button = styled.a.attrs((props) => ({
    ariaLabel: props.label ? props.label : ''
}))`
    display: inline-block;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);
    color: ${({ color }) => color ? color : 'white'};
    padding: 8px 40px;
    transition: background 0.3s ease 0s, box-shadow 0s ease 0s, transform 0s ease 0s;
    background-color: ${ ({ background }) => background ? background : '#f27d00' };
    border-radius: 15px;
    box-sizing: border-box;
    cursor: pointer;
    line-height: 36px;
    font-weight: 700;
    font-size: 24px;
    &:hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);
        transform: translate3d(0px, -2px, 0px);
    }
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: flex-start;
    text-align: center;
    margin: 0px auto;
    opacity: 1;
    transform: translateY(0px);
`;

const AnimatedWrapper = styled.div`
min-height: 356px;
.transitions-item {
    font-family: 'Chivo';
    overflow: hidden;
    width: 100%;
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 50px;
    font-weight: 800;
    text-transform: uppercase;
    will-change: transform, opacity, height;
    white-space: nowrap;
    line-height: 50px;
    z-index: 9999;
    ${media.desktop`
        font-size: 5em;
        line-height: 80px;
    `}
}
`;

const AnimatedHero = () => {
    const ref = useRef([])
    const [items, set] = useState([])
    const transitions = useTransition(items, null, {
        from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#8fa5b6' },
        enter: [
            { opacity: 1, height: 80, innerHeight: 80 },
            { transform: 'perspective(600px) rotateX(180deg)', color: '#f27d00' },
            { transform: 'perspective(600px) rotateX(0deg)' },
        ],
        leave: [{ color: '#f27d00' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
        update: { color: '#f5f5f5' },
    });

    const reset = useCallback(() => {
        ref.current.map(clearTimeout);
        ref.current = [];
        set([]);
        ref.current.push(setTimeout(() => set(['Managed', 'WordPress']), 0));
        ref.current.push(setTimeout(() => set(['Managed', 'Headless', 'WordPress']), 1000));
    }, []);

    useEffect(() => void reset(), []);

    return (
        <AnimatedWrapper>
            {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
            <animated.div className="transitions-item" key={key} style={rest}>
                <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
            </animated.div>
            ))}
            <p>Familiar CMS, Modern Frameworks.</p>
            <ButtonBox>
                <Button>
                    Get Started
                </Button>
                <Button
                style={{marginLeft: '2%'}}
                background="#333"
                >
                    Learn More
                </Button>
            </ButtonBox>
        </AnimatedWrapper>
    );
}

export {
    Button, ButtonBox, AnimatedHero,
};
