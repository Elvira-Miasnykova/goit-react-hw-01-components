import styled from '@emotion/styled';

export const Tr = styled.tr`
padding-bottom: ${p => p.theme.space[3]}px;
padding-top: ${p => p.theme.space[3]}px;
text-align: center;
font-family: ${p => p.theme.fonts.body};
font-size: ${p => p.theme.fontSizes[2]}px;
border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
color: ${p => p.theme.colors.black};


`;

export const Td = styled.td`
border: ${p => p.theme.borders.regular} ${p => p.theme.colors.secondary};
`;