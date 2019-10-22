/**
 * Events before generation
 */
hexo.on('generateBefore', function(){
    if(hexo.locals.get){
        var data = hexo.locals.get('data')
        data && data.sprinter && (hexo.theme.config = data.sprinter)
    }

})
