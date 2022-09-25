import styled from '@emotion/styled';

export const StatsLi = styled.li`
width: 100%;
background-color: ${getRandomHexColor};
`;

export const StatsLabel = styled.span`
display: block;
font-family: ${p => p.theme.fonts.monospace};
font-size: ${p => p.theme.fontSizes[2]}px;
text-align: center;
color: ${p => p.theme.colors.black};
`;

export const StatsPercentage = styled.span`
display: block;
font-family: ${p => p.theme.fonts.body};
font-size: ${p => p.theme.fontSizes[2]}px;
font-weight: ${p => p.theme.fontWeights.bold};
text-align: center;
color: ${p => p.theme.colors.black};
`;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }