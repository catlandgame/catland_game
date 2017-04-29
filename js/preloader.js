let isUser, vk_account, game_account, into;

// isUser - статус авторизации приложения [typeof boolean]. vk_account - данные об аккаунте ВКонтакте, game_account - массив с внутренними переменными

// создаем запрос к ВК, получаем информацию о пользователе и изменяем статус авторизации.
VK.init (function () {
  isUser = true;
  VK.api ("users.get", { "fields": "photo_50,city" }, function (data) {
    isUser = true;
    vk_account = data.response[0];
    // после получения информации о пользователи с помощью функции wasUserInto получаем сведенья о том, было ли пользователем когда либо установлено приложение
    wasUserInto (isUser);
    if (into) {
        VK.api ("storage.get", {"keys": "fishes,coins,lvl,exp,name"}, function (data) {
          game_account = data.response;
          setTimeout (function () {
            preloader = false;
          }, 2000);
        });
    } else {
        VK.api ("storage.set", {"key": "fishes", "value": 6000}, null);
        VK.api ("storage.set", {"key": "coins", "value": 10}, null);
        VK.api ("storage.set", {"key": "lvl", "value": 1}, null);
        VK.api ("storage.set", {"key": "exp", "value": 50}, null);
        VK.api ("storage.set", {"key": "wasUserInto", "value": "true"}, null);
        VK.api ("storage.set", {"key": "name", "value": "Игрок"}, null)
        VK.api ("storage.get", {"keys": "fishes,coins,lvl,exp,name"}, function (data) {
          game_account = data.response;
          setTimeout (function () {
            preloader = false;
          }, 2000);
        });
    };
  });
}, function () {
  isUser = false;
}, "5.62");

function wasUserInto (init) {
  if (init) {
      VK.api ("storage.get", { "key": "wasUserInto" }, function (data) {
        if (data.response == "") {
          into = false;
        } else {
          into = true;
        };
      });
    };
};
