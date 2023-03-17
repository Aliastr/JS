// Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.
// Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.
async function getUsers(names) {
    async function getUsers(names) {
        let jobs = [];
        for(let name of names) {
          let job = fetch(`https://api.github.com/users/${name}`).then(
            successResponse => {
                if (successResponse.status != 200) {
                    return null;
                } else {
                    return successResponse.json();
                }
            },
            failResponse => {
                 return null;
            }
          );
          jobs.push(job);
        }
        let results = await Promise.all(jobs);
        return results;
      }
}