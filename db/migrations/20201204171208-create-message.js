'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Messages', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            content: {
                allowNull: false,
                type: Sequelize.TEXT,
            },
            sid: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                },
                onDelete: 'CASCADE',
            },
            rid: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                },
                onDelete: 'CASCADE',
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
        return queryInterface.dropTable('Messages');
    },
};
