dateLib = (() => {
    const days = [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье'
    ];

    const months = [
       'Января',
       'Февраля',
       'Марта',
       'Апреля',
       'Мая',
       'Июня',
       'Июля',
       'Августа',
       'Сентября',
       'Октрября',
       'Ноября',
       'Декабря',
    ]
    return {
      transformDate: function (date) {
        const [day, month, year] = date.split('.');
        const jsDate = new Date(`${month}.${day}.${year}`)
        
        // делаем так, так как месяц может начинаться в среду
        return `${days[jsDate.getDay()]}, ${Math.floor((+day + jsDate.getDay()) / 7) + 1} неделя ${months[jsDate.getMonth()]} ${year} года`;
      },
    };
  })();
  