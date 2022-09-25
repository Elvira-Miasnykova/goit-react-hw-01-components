import styled from '@emotion/styled';

export const Title = styled.h2`
width: 100%;
padding-top: ${p => p.theme.space[4]}px;
padding-bottom: ${p => p.theme.space[4]}px;
text-align: center;
text-transform: uppercase;
font-family: ${p => p.theme.fonts.head};
color: ${p => p.theme.colors.secondary};
`;