const forms = (a) => {
  let form = document.querySelectorAll('form');
  let input = document.querySelectorAll('input[name="user_phone"]');

  input.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    });
  });

  let massage = {
    sending: `Надсилання даних ...`,
    successfully: `Дані надіслані успішно`,
    unsuccessful: `Сталася помилка, спробуте ще раз`,
  };

  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMassage = document.createElement('div');
      statusMassage.textContent = massage.sending;
      item.append(statusMassage);

      function closeStatusMessage() {
        setTimeout(() => {
          statusMassage.remove();
        }, 5000);
      }

      const formData = new FormData(item);

      if (item.getAttribute('data-calc') === '1') {
        for (const key in a) {
          formData.append(key, a[key]);
        }
      }

      fetch('./assets/server.php', {
          method: "POST",
          body: formData,
        }).then(data => data.text())
        .then(data => {
          console.log(data);
          statusMassage.textContent = massage.successfully;
        }).catch(() => {
          statusMassage.textContent = massage.unsuccessful;
        }).finally(() => {
          closeStatusMessage();
          item.reset();
        });

    });
  });


};
export default forms;