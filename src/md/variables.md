# <a id="variables"></a> متغییر ها

فریم ورک Flight به شما این امکان را می دهد که متغییر هایی تعریف کنید و از آنها در سر تا سر اپلیکیشن خود استفاده کنید.

```php
// Save your variable
Flight::set('id', 123);

// Elsewhere in your application
$id = Flight::get('id');
```

برای تشخیص اینکه آیا یک متغیری تعریف شده است یا خیر می توانید به شیوه زیر اطمینان حاصل کنید:

```php
if (Flight::has('id')) {
     // Do something
}
```

به شیوه زیر می توانید متغیری که قبلا تعریف شده است را حذف کنید:

```php
// Clears the id variable
Flight::clear('id');

// Clears all variables
Flight::clear();
```

برخی پیکربندی های Flight هم به کمک متغیر ها صورت می گیرد بنابراین با تعریف برخی اسم های خاص تنظیمات فریم ورک قابل تنظیم است.

در میبینید که Flight برای تعیین کردن لاگ گرفتن از خطا ها از همین امکان استفاده می کند:

```php
Flight::set('flight.log_errors', true);
```
