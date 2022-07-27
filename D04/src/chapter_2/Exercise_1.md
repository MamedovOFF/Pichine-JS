![RestaurantDB](https://user-images.githubusercontent.com/48245816/171473967-cb0bfafd-d596-4695-88db-abff2951c824.jpg)

При выполнении задания установите пакеты sequelize, sequelize-cli. Инициализируйте sequelize командой ```npx sequelize-cli init```, после этого у вас должны создаться 4 папки: config, seeds, migrations, models. Для создания базы воспользуйтесь командой ```npx sequelize-cli db:create``` . Обязательно добавьте в package.json команду: ```"dbr": "npx sequelize db:drop && npx sequelize db:create && npx sequelize db:migrate && npx sequelize db:seed:all"```
    