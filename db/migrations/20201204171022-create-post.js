'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Posts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            uid: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                },
                onDelete: 'CASCADE',
            },
            content: {
                type: Sequelize.STRING(255),
            },
            caption: {
                type: Sequelize.STRING(255),
            },
            location: {
                type: Sequelize.STRING(255),
            },
            imageUrl: {
                allowNull: false,
                type: Sequelize.STRING(255),
            },
            hidden: {
                allowNull: false,
                defaultValue: false,
                type: Sequelize.BOOLEAN,
            },
            private: {
                allowNull: false,
                defaultValue: true,
                type: Sequelize.BOOLEAN,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Posts');
    },
};
