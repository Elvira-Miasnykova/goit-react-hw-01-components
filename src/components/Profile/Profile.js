import PropTypes from 'prop-types';
import {UserImage, UserName, UserTag, UserLocation, UserStatsItem, UserStatsLabel, UserStatsQuantity} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className="profile">
            <div className="description">
                <UserImage
                    src={avatar}
                    alt={username}
                    
                />
                <UserName>{username}</UserName>
                <UserTag>@{tag}</UserTag>
                <UserLocation>{location}</UserLocation>
            </div>

            {/* Box */}
            <ul class="stats"> 
                <UserStatsItem>
                    <UserStatsLabel>Followers</UserStatsLabel>
                    <UserStatsQuantity>{stats.followers}</UserStatsQuantity>
                </UserStatsItem>
                <UserStatsItem>
                    <UserStatsLabel>Views</UserStatsLabel>
                    <UserStatsQuantity>{stats.views}</UserStatsQuantity>
                </UserStatsItem>
                <UserStatsItem>
                    <UserStatsLabel>Likes</UserStatsLabel>
                    <UserStatsQuantity>{stats.likes}</UserStatsQuantity>
                </UserStatsItem>
            </ul>
        </div>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
    // followers: PropTypes.number.isRequired,
    // views: PropTypes.number.isRequired,
    // likes: PropTypes.number.isRequired,
};