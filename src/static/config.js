require.config({
    baseUrl: 'http://localhost:3000/js',
    paths : {
        "jquery" : ["https://cdn.bootcss.com/jquery/1.9.0/jquery.min",'jquery.min'],
        'domReady':['https://cdn.bootcss.com/require-domReady/2.0.1/domReady','domReady'],
        'slide':'superslide' 
    },
    shim:{
        'slide':['jquery']
    }
});