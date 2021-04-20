<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="theme-color" content="#F3F8FE">
        <meta name="apple-mobile-web-app-capable" content="yes">

        <title>{{ config('app.name', 'Laravel') }}</title>

<!-- Fonts -->       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/34e7e261ec.js" crossorigin="anonymous"></script>
        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <link rel="stylesheet" href="css/login-page.css">
        <!-- Scripts -->
        <script src="{{ mix('js/app.js') }}" defer></script>
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="meta-apple-mobile-web-app-capable" content="yes"/>
        <meta name="viewport" content="initial-scale=1,user-scalable=no,viewport-fit=cover">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <meta name="meta-apple-mobile-web-app-status-bar-style" content="black-translucent"/>
        <meta name=”“apple-mobile-web-app-status-bar-style”" content="black-translucent" />
        <meta name="format-dection" content="telephone=no">
    </head>
    <body>
        <div class="font-sans text-gray-900 antialiased">
            {{ $slot }}
        </div>
        <button class="reload" onclick="window.location.reload(1);"></button>
    </body>
   
</html>
