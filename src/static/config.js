require.config({
    baseUrl: 'http://show-self.tech/bs/js/',
    paths : {
        "jquery" : ["https://cdn.bootcss.com/jquery/1.9.0/jquery.min","jquery.min"],
        "doT":["https://cdn.bootcss.com/dot/2.0.0-beta.0/doT.min","doT.min"],
        "dropdown":'bs/dropdown',
        "button":'bs/button',
        "carousel":'bs/carousel',
        "collapse":'bs/collapse',
        "modal":'bs/modal',
        "popover":'bs/popover',
        "scrollspy":'bs/scrollspy',
        "tooltip":'bs/tooltip',
        "transition":'bs/transition',
        "alert":'bs/alert',
        "affix":'bs/affix',
        'slide':'superslide',
        'common':'common'
    },
    shim:{
        'common':['jquery'],
        "dropdown":['jquery'],
        "button":['jquery'],
        "carousel":['jquery'],
        "collapse":['jquery'],
        "modal":['jquery'],
        "popover":['jquery'],
        "scrollspy":['jquery'],
        "tooltip":['jquery'],
        "transition":['jquery'],
        'dropdown':['jquery'],
        'doT':{ exports : 'doT'}
    }
});