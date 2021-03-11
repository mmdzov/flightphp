 # <a id="configuration"></a> پیکربندی

با تنظیم مقادیر پیکربندی از طریق "Set" می توانید برخی از رفتارهای Flight را سفارشی کنید.

``` php
Flight::set('flight.log_errors', true);
```

در زیر لیستی از تمام تنظیمات پیکربندی موجود آورده شده است:

``` html 
flight.base_url - Override the base url of the request. (default: null)
flight.case_sensitive - Case sensitive matching for URLs. (default: false)
flight.handle_errors - Allow Flight to handle all errors internally. (default: true)
flight.log_errors - Log errors to the web server's error log file. (default: false)
flight.views.path - Directory containing view template files. (default: ./views)
flight.views.extension - View template file extension. (default: .php)
```
