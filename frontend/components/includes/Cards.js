import styled from 'styled-components';
import { media } from './Breakpoints';

const BaseCard = styled.div`
    box-shadow: 0 10px 20px rgba(0,0,0,0.1),0 6px 6px rgba(0,0,0,0.1);
    position: relative;
    margin-bottom: 1rem;
    text-align: center;
    padding: 20px;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s;
    background: #fff;
    color: #333;
    border-radius: 15px;
    width: 100%;
    opacity: 1;
    transform: translateY(0px);

    h3 {
        font-family: "Open Sans";
    }

    p {
        font-size: 16px;
        line-height: 1;
    }

    .price {
        font-family: 'Chivo';
        font-size: 20px;
        font-weight: bold;
    }

    ${media.desktop`
        width: 32%;
    `}
`;

export {
    BaseCard,
}