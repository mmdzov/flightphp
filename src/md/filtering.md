# <a id="filtering"></a> فیلتر کردن

Flight allows you to filter methods before and after they are called. There are no
predefined hooks you need to memorize. You can filter any of the default framework
methods as well as any custom methods that you've mapped.

یک تابع فیلتر مشابه زیر است:

``` php
function(&$params, &$output) {
    // Filter code
}
```

Using the passed in variables you can manipulate the input parameters and/or the output.

شما می توانید فیلتری قبل از اجرای متد داشته باشید:

``` php
Flight::before('start', function(&$params, &$output){
    // Do something
});
```

شما می توانید یک فیلتر بعد از اجرای متد داشته باشید:

``` php
Flight::after('start', function(&$params, &$output){
    // Do something
});
```

You can add as many filters as you want to any method. They will be called in the
order that they are declared.

این یک مثال از نحوه عملکرد فیلتر است:

``` php
// Map a custom method
Flight::map('hello', function($name){
    return "Hello, $name!";
});

// Add a before filter
Flight::before('hello', function(&$params, &$output){
    // Manipulate the parameter
    $params[0] = 'Fred';
});

// Add an after filter
Flight::after('hello', function(&$params, &$output){
    // Manipulate the output
    $output .= " Have a nice day!";
});

// Invoke the custom method
echo Flight::hello('Bob');
```

این باید نمایش دهد:

``` html
Hello Fred! Have a nice day!
```

If you have defined multiple filters, you can break the chain by returning `false`
in any of your filter functions:

``` php
Flight::before('start', function(&$params, &$output){
    echo 'one';
});

Flight::before('start', function(&$params, &$output){
    echo 'two';

    // This will end the chain
    return false;
});

// This will not get called
Flight::before('start', function(&$params, &$output){
    echo 'three';
});
```

Note, core methods such as `map` and `register` cannot be filtered because they
are called directly and not invoked dynamically.
