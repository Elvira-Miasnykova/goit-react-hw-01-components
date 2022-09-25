import styled from '@emotion/styled';

export const UserImage = styled.img`
width: 150px;
height: 150px;
margin: 0, auto;
border: ${p => p.theme.borders.regular};
border-radius: ${p => p.theme.radii.round};
`;

export const UserName = styled.p`
margin-top: ${p => p.theme.space[2]}px;
margin-bottom: ${p => p.theme.space[2]}px;
font-family: ${p => p.theme.fonts.body};
font-weight: ${p => p.theme.fontWeights.head};
font-size: ${p => p.theme.fontSizes[4]}px;
text-aligh: center;
color: ${p => p.theme.colors.black};
`;

export const UserTag = styled.p`
margin-bottom: ${p => p.theme.space[2]}px;
font-family: ${p => p.theme.fonts.body};
font-weight: ${p => p.theme.fontWeights.body};
font-size: ${p => p.theme.fontSizes[2]}px;
text-aligh: center;
color: ${p => p.theme.colors.secondary};
`;

export const UserLocation = styled.p`
margin-bottom: ${p => p.theme.space[2]}px;
font-family: ${p => p.theme.fonts.monospace};
font-weight: ${p => p.theme.fontWeights.body};
font-size: ${p => p.theme.fontSizes[2]}px;
text-aligh: center;
color: ${p => p.theme.colors.secondary};
`;

export const UserStatsItem = styled.li`
width: 100%;
border: ${p => p.theme.borders.regular} ${p => p.theme.colors.secondary};
text-aligh: center;
`;

export const UserStatsLabel = styled.span`
display: block;
margin-bottom: ${p => p.theme.space[2]}px;
font-size: ${p => p.theme.fontSizes[1]}px;
color: ${p => p.theme.colors.secondary};
`;

export const UserStatsQuantity = styled.span`
display:block;
font-weight: ${p => p.theme.fontWeights.bold};
font-size: ${p => p.theme.fontSizes[3]}px;
color: ${p => p.theme.colors.black};
`;

