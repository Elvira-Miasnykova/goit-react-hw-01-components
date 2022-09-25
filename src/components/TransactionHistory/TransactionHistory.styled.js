import styled from '@emotion/styled';

export const THead = styled.thead`
    
`;

export const Tr = styled.tr`
padding-bottom: ${p => p.theme.space[3]}px;
padding-top: ${p => p.theme.space[3]}px;
font-family: ${p => p.theme.fonts.body};
font-size: ${p => p.theme.fontSizes[3]}px;
border: ${p => p.theme.borders.regular} ${p => p.theme.colors.secondary};
color: ${p => p.theme.colors.black};
background-color: ${p => p.theme.colors.accent};
text-align: center;
`;

export const Th = styled.th`
    border: ${p => p.theme.borders.regular} ${p => p.theme.colors.secondary};
`;

export const TBody = styled.tbody`
    
`;