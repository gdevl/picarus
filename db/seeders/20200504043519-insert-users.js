'use strict';

const bcrypt = require('bcryptjs');

function createPassword() {
    return bcrypt.hashSync('password');
}

function r(o) {
    o.createdAt = new Date();
    o.updatedAt = new Date();
    return o;
}

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            r({
                displayName: 'jeff',
                email: 'jeff@example.com',
                avatarUrl:
                    'https://64.media.tumblr.com/avatar_6127abd6f52e_128.pnj',
                hashedPassword: createPassword(),
            }),
            r({
                displayName: 'abed',
                email: 'abed@example.com',
                avatarUrl:
                    'https://pbs.twimg.com/profile_images/3122852421/a7f312e3a413b5178a86bec20ce9270d.jpeg',
                hashedPassword: createPassword(),
            }),
            r({
                displayName: 'britta',
                email: 'britta@example.com',
                avatarUrl:
                    'https://64.media.tumblr.com/avatar_fcd03a1bd247_128.pnj',
                hashedPassword: createPassword(),
            }),
            r({
                displayName: 'troy',
                email: 'troy@example.com',
                avatarUrl: 'shorturl.at/gouQ8',
                hashedPassword: createPassword(),
            }),
            r({
                displayName: 'pierce',
                email: 'pierce@example.com',
                avatarUrl:
                    'https://pbs.twimg.com/profile_images/3098256871/2836aacc9ce759900c7a1dc5df43eaa9.jpeg',
                hashedPassword: createPassword(),
            }),
            r({
                displayName: 'shirley',
                email: 'shirley@example.com',
                avatarUrl: 'shorturl.at/kJRTW',
                hashedPassword: createPassword(),
            }),
            r({
                displayName: 'annie',
                email: 'annie@example.com',
                avatarUrl:
                    'https://64.media.tumblr.com/avatar_d257b0d7b06f_128.pnj',
                hashedPassword: createPassword(),
            }),
            r({
                displayName: 'garret',
                email: 'garret@example.com',
                avatarUrl:
                    'https://static.wikia.nocookie.net/community-sitcom/images/2/2b/5x3_Promotional_photo_1.jpg',
                hashedPassword: createPassword(),
            }),
            r({
                displayName: 'rich',
                email: 'rich@example.com',
                avatarUrl:
                    'https://static.wikia.nocookie.net/community-sitcom/images/e/e6/It_should_have_been_you%21.jpg',
                hashedPassword: createPassword(),
            }),
            r({
                displayName: 'vaughn',
                email: 'vaughn@example.com',
                avatarUrl:
                    'https://pbs.twimg.com/profile_images/1168039285/Community1x04_0371.jpg',
                hashedPassword: createPassword(),
            }),
            r({
                displayName: 'ian',
                email: 'ian@example.com',
                avatarUrl:
                    'https://static.wikia.nocookie.net/community-sitcom/images/a/ab/Duncan.jpg',
                hashedPassword: createPassword(),
            }),
            r({
                displayName: 'alex',
                email: 'alex@example.com',
                avatarUrl:
                    'https://pbs.twimg.com/profile_images/2184710310/Screen_shot_2012-05-02_at_11.15.48_AM_400x400.png',
                hashedPassword: createPassword(),
            }),
            r({
                displayName: 'leonard',
                email: 'leonard@example.com',
                avatarUrl:
                    'https://pbs.twimg.com/profile_images/577903655203946496/-Dpf3jAB.png',
                hashedPassword: createPassword(),
            }),
            r({
                displayName: 'ben',
                email: 'ben@example.com',
                avatarUrl:
                    'https://static.wikia.nocookie.net/community-sitcom/images/c/c1/Chang_S5_headshot.jpg',
                hashedPassword: createPassword(),
            }),
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users');
    },
};
