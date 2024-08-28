
const deliveryStageText = document.getElementById('delivery-stage_text');
let deliveryStageButtons = document.querySelectorAll('.delivery-stage_btn');



deliveryStageButtons.forEach(button => {
    button.addEventListener('click', () => {
        removeActiveClass();
        if (button.innerText === "Согласование условий и оформление документов") {
            deliveryStageText.innerText = "В BigBoxShipping, мы уделяем особое внимание тщательному согласованию условий и оформлению документов, чтобы обеспечить максимальную прозрачность и надежность перевозок. Мы заключаем договор о перевозке, который четко определяет условия перевозки, содержит подробную информацию о сторонах, их права и обязанности, а также контактные данные. Кроме того, мы оформляем необходимые документы, такие как заявки к договору, коммерческий акт, которые визируются сторонами и формируются в единый пакет, упрощая документооборот и обеспечивая прозрачность и безопасность грузоперевозок.";
            button.classList.add('active');
        } else if (button.innerText === "Подача контейнера клиенту") {
            deliveryStageText.innerText = "Мы подаем контейнер клиенту к согласованным дате и времени. Процесс начинается с подачи грузового транспортного средства к складу клиента, где грузоотправитель загружает груз в контейнер. Затем, после загрузки, для обеспечения целостности груза, контейнер опломбировывается с использованием специальных пломб, имеющих контрольные знаки. Это гарантирует, что груз будет доставлен в неизменном состоянии и без доступа посторонних лиц.";
            button.classList.add('active');
        } else if (button.innerText === "Доставка контейнера в порт и погрузка на судно") {
            deliveryStageText.innerText = "Мы обеспечиваем надежную и эффективную логистику контейнерных перевозок, от загрузки контейнера на складе клиента до доставки в порт в Санкт-Петербурге, для его дальнейшей транспортировки в Калининград судном. В процессе организации перевозок наши специалисты занимаются всеми этапами, включая подготовку необходимой документации, выбор оптимального маршрута, координацию с транспортными предприятиями и обеспечивают безопасность и целостность груза на протяжении всего пути. Благодаря нашей комплексной услуге «от двери к двери», мы сокращаем временные и материальные издержки клиентов и обеспечиваем максимальную эффективность логистических процессов. Это позволяет нашим клиентам сосредоточиться на своей основной деятельности, зная, что их груз находится в надежных руках.";
            button.classList.add('active');
        } else if (button.innerText === "Перевозка судном в порт Калининград") {
            deliveryStageText.innerText = "При перевозке судна в порт Калининграда, наши специалисты тщательно координируют все этапы морской транспортировки, гарантируя безопасность и целостность груза. Мы сотрудничаем с надежными судоходными компаниями, имеющими необходимые разрешения и сертификаты, что позволяет нам обеспечить высокий уровень сервиса и соблюдение всех требований морских перевозок. Наши логисты следят за судном на протяжении всего маршрута, обеспечивая своевременную доставку груза в порт Калининграда.";
            button.classList.add('active');
        } else if (button.innerText === "Доставка груза получателю") {
            deliveryStageText.innerText = "После прибытия в порт, мы организуем выгрузку контейнера и его доставку получателю, завершая цикл логистических услуг. На этом этапе наши специалисты обеспечивают тщательный контроль за процессом выгрузки, чтобы гарантировать своевременность получения груза клиентом. Это позволяет нашим клиентам получить свой груз в кратчайшие сроки и без дополнительных хлопот, что является ключевым аспектом нашей комплексной логистической услуги «от двери к двери».";
            button.classList.add('active');
        }
});
});

function removeActiveClass() {
    deliveryStageButtons.forEach(button => {
      button.classList.remove('active');
    });
  }






console.log(deliveryStageButtons)