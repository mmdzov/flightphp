# میکرو فریم ورک Flight چیست؟

این یک فریم ورک قابل توسعه، ساده و سریع برای پی اچ پی است.

این شما را قادر میسازد تا به سادگی در کمترین زمان وب اپلیکیشن های RESTful طراحی و توسعه دهید.


``` php
require 'flight/Flight.php';

Flight::route('/', function(){
  echo 'hello world!';
});

Flight::start();
```

[یادگیری بیشتر](learn)

# پیش نیاز ها

میکرو فریم ورک Flight برای اجرا نیاز به حداقل نسخه 5.3 پی اچ پی دارد.

# لایسنس

میکرو فریم ورک Flight تحت لایسنس [MIT](https://github.com/mikecao/flight/blob/master/LICENSE) منتشر شده است.

# مشارکت

این وب سایت توسط گیت هاب میزبانی می شود و می توانید به توسعه آن در [گیت هاب](https://github.com/mikecao/flightphp.com) به ما کمک کنید.
