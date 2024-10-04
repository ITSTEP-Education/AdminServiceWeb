import styled from 'styled-components';

interface DisplayContent {
    _direction?: string;
    _justify?: string;
    _align?: string;
}

export const Display = styled.div<DisplayContent>`
    display: flex;
    flex-direction: ${props => props._direction || 'row'};
    justify-content: ${props => props._justify || 'space-between' };
    align-items: ${props => props._align || 'center'};
`;