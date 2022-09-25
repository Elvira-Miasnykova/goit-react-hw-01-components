import styled from '@emotion/styled';

export const FriendsLi = styled.li`
display: flex;
margin-bottom: ${p => p.theme.space[3]}px;
padding-top: ${p => p.theme.space[3]}px;
padding-bottom: ${p => p.theme.space[3]}px;
padding-left: ${p => p.theme.space[3]}px;
padding-right: ${p => p.theme.space[3]}px;
    
:last-child{
    margin-bottom: ${p => p.theme.space[0]}px;
}
align-items: center;
box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);    
`;

export const FriendsStatus = styled.span`
display: block;
width: 15px;
height: 15px;
margin-right: ${p => p.theme.space[4]}px;
border-radius: ${p => p.theme.radii.round};
background-color: ${p => p.status ? 'green' : 'red'};
`;

export const FriendsImg = styled.img`
margin-right: ${p => p.theme.space[2]}px;
`;

export const FriendsName = styled.p`
font-family: ${p => p.theme.fonts.body};
font-size: ${p => p.theme.fontSizes[2]}px;
color: ${p => p.theme.colors.black};
`;