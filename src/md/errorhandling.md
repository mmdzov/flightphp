# <a id="errorhandling"></a> مدیریت خطا

## خطا ها و استثنا ها

تمام خطا ها و استثناها در Flight به متد خطا هدایت می شوند.

رفتار پیشفرض آن همراه با هدر `HTTP 500 Internal Server Error` است که اطلاعاتی در مورد خطا هم به دنبال دارد.

شما می توانید رفتار این را به شیوه زیر تغییر دهید و سفارشی کنید:

``` php
Flight::map('error', function(Exception $ex){
    // Handle error
    echo $ex->getTraceAsString();
});
```

بصورت پیشفرض خطا ها در سرور ذخیره و لاگ نمی شود؛ شما می توانید این را به شیوه زیر فعال کنید:

``` php
Flight::set('flight.log_errors', true);
```

## Not Found

وقتی یک آدرس یا الگو نمی تواند پیدا شود،
میکرو فریم ورک Flight متد پیشفرضی را صدا خواهد زد.
که خودش بصورت خودکار هدر `HTTP 404 Not Found` را هم ارسال می کند.

شما می توانید رفتار این را به شیوه زیر تغییر دهید و سفارشی کنید:

``` php
Flight::map('notFound', function(){
    // Handle not found
});
```
