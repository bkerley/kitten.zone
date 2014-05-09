function jsonFlickrApi(data) {
    if (data['photos']['photo'].length < 1) {
        $('#loading').text("failed, see js console :(");
        return;
    }
    
    startMarquee(data['photos']['photo']);
    $('#loading').hide();
    return;
}

function startMarquee(photos) {
    $(photos).each(function(index, photo) {
        var content = template.render(photo);
        $('body').append(content);
    });
}

var template = Hogan.compile($('#template').html());

window.jsonFlickrApi = jsonFlickrApi;

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-605807-20', 'kitten.zone');
ga('send', 'pageview');
