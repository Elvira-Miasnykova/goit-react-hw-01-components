import PropTypes from 'prop-types';
import { FriendsLi, FriendsStatus, FriendsImg, FriendsName } from './FriendListItem.styled';

export const FriendListItem = ({isOnline, avatar, name}) => {
    return (
    <FriendsLi>
            <FriendsStatus status={isOnline}></FriendsStatus>
        <FriendsImg src={avatar} alt={avatar} width="48" />
            <FriendsName>{name}</FriendsName>
    </FriendsLi>);
};

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};


