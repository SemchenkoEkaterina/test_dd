features = (() => {
  return {
    initScrollToTopButton: function () {
      const btnUp = {
        el: document.querySelector(".btn-up"),
        show() {
          // удалим у кнопки класс btn-up_hide
          this.el.classList.remove("btn-up_hide");
        },
        hide() {
          // добавим к кнопке класс btn-up_hide
          this.el.classList.add("btn-up_hide");
        },
        addEventListener() {
          // при прокрутке содержимого страницы
          window.addEventListener("scroll", () => {
            // определяем величину прокрутки
            const scrollY =
              window.scrollY || document.documentElement.scrollTop;
            // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
            scrollY > 100 ? this.show() : this.hide();
          });
          // при нажатии на кнопку .btn-up
          this.el.onclick = () => {
            // переместим в начало страницы
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          };
        },
      };

      return btnUp.addEventListener();
    },

    initChangeTheme: function () {
      const btnT = {
        el: document.querySelector(".btn-theme"),
        showDarkTheme() {
          // удалим у кнопки класс btn-up_hide
          document.body.setAttribute("dark", "");
        },
        hideDarkTheme() {
          // добавим к кнопке класс btn-up_hide
          document.body.removeAttribute("dark");
        },
        addEventListener() {
          this.el.onclick = () => {
            document.body.hasAttribute("dark")
              ? this.hideDarkTheme()
              : this.showDarkTheme();
          };
        },
      };

      return btnT.addEventListener();
    },
  };
})();
