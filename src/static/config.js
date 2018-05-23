require.config({
    baseUrl: 'http://localhost:3000/js',
    paths : {
        "jquery" : ["https://cdn.bootcss.com/jquery/1.9.0/jquery.min","jquery.min"],
        "doT":["https://cdn.bootcss.com/dot/2.0.0-beta.0/doT.min","doT.min"],
        'slide':'superslide' 
    },
    shim:{
        'slide':['jquery'],
        'doT':{ exports : 'doT'}
    }
});