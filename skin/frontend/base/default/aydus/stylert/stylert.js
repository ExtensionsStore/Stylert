/**
 * Stylert js
 *
 * @category   Aydus
 * @package    Aydus_Stylert
 * @author     Aydus Consulting <davidt@aydus.com>
 */

function Stylert($)
{
    var stylert = function(message)
    {
        $('.stylert-message','#stylert').html(message);
        $('#stylert').show();            
    };
    
    return {
        init : function()
        {
            //var proxy = window.alert;

            window.alert = function() {

                //return proxy.apply(this, arguments);
                var message = arguments[0];
                return stylert(message);
            };            
            $('.stylert-close, .stylert-ok','#stylert').click(this.close);
            
        },
        close : function(e)
        {
            e.preventDefault();
            $('#stylert').hide();
        },        
        alert : function(message)
        {
            stylert(message);
            
            return true;
        }
    };
}

if (!window.jQuery){
	
    document.write('<script src="//ajax.googleapis.com/ajax/libs/$/1.11.2/$.min.js">\x3C/script><script>$.noConflict(); var stylert = new Stylert(jQuery); jQuery(function(){ stylert.init(); });</script>');
	
} else {
	
    var stylert = new Stylert(jQuery);
    jQuery(function(){ 
        stylert.init(); 
    });
}