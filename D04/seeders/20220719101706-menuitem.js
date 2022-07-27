'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MenuItems', [{
      title: 'Menu',
      picture: null,
      cost: 0,
      callQuantity: 0,
      description: 'Food Menu',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MenuItems', null, {});
  }
};
