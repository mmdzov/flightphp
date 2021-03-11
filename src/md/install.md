# نصب و راه اندازی

### 1. دانلود فایل ها

اگر در نظر دارید تا از [Composer](https://getcomposer.org/) برای دانلود فایل ها کمک بگیرید, می توانید به سادگی دستور فوق را اجرا کنید:

``` html
composer require mikecao/flight
```

یا شما می توانید بصورت دستی فایل ها را [دانلود](https://github.com/mikecao/flight/archive/master.zip) و آنها را در پوشه وب سایت خود از حالت فشرده خارج کنید.

### 2. تنظیمات مربوط به وبسرور

برای وبسرور آپاچی, فایل `.htaccess` خود را ویرایش یا ایجاد کنید و محتوای زیر را درون آن قرار دهید:

``` html
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php [QSA,L]
```

برای وبسرور _Nginx_, دستوران زیر را در فایل کانفیگ مورد نظر اضافه و اعمال کنید:

``` html
server {
    location / {
        try_files $uri $uri/ /index.php;
    }
}
```

### 3. ایجاد فایل اصلی پروژه `index.php`

ابتدا در فایل باید فریم ورک را لود کنید.
برای اینکار می توانید به شیوه زیر عمل کنید:

``` php
require 'flight/Flight.php';
```

در اگر شما فریم ورک را به کمک Composer نصب کرده اید باید فایل autoloader را به شیوه زیر لود کنید:

``` php
require 'vendor/autoload.php';
```

سپس یک نمونه مسیر را تعریف کنید و آن را با یک تابع پوشش دهید.

در این صورت هر درخواستی به مسیر اصلی وب سرویس شما ارسال شود پاسخ درخواست دستوراتی خواهد بود که در تابع می نویسید:

``` php
Flight::route('/', function(){
    echo 'hello world!';
});
```

در نتایج در انتهای فایل می توانید فریم ورک را به حالت اجرا در بیاورید:

```php
Flight::start();
```
