<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"></script>
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        <!-- In this article, we are going to use JSX syntax for React components -->
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>