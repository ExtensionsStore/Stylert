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
        
        return true;
    };
    
    var close = function(e)
    {
        e.preventDefault();
        $('#stylert').hide();        
    };
    
    return {
        init : function()
        {
            if (typeof stylertEnabled != 'undefined' && stylertEnabled === true){
                window.alert = function() {

                    var message = arguments[0];
                    return stylert(message);
                };       

                $('.stylert-close, .stylert-ok','#stylert').click(this.close);                
            }
            
        },
        close : function(e)
        {
            close(e);
        },        
        stylert : function(message)
        {
            return stylert(message);
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