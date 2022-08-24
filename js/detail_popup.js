var eid = $('#employee-info-div');
    var blurb = '<div id="pop1" class="popbox"><h2>Access Request</h2> <p><b>Service Description :</b>   A access request, is a "ask" to a entity or organisation asking for access to the application </p> <p><b>Service Execution Steps :</b> <ol> <li>Login </li> <li>Choose the service from the list of services</li>	<li>Fill in the application data</li> <li>Submit for approval (Stage 1 - Line Manager; Stage 2 - Business Owner; Stage 3 - Informamtion Security (if applicable) </li><li>Receipt of the request (electronic mail) </li> </ol> </p> </div>';

    function hovIn() {
        $(this).css({ 'font-weight': 'bold', 'color': 'blue' });
        eid.html(blurb);
        eid.dialog('open');
    }
    function hovOut() {
        //eid.html(''); //<-- Causes dlg text to appear/disappear as you move mouse on/off checkbox and label
        $(this).css({ 'font-weight': 'normal', 'color': 'black' });
    }

    $('.employee-id').hover(hovIn, hovOut);

    eid.dialog({
        autoOpen: false,
        title: "Your jQueryUI Dialog",
        show: "fade",
        hide: "fade",
        width: 500, //orig defaults: width: 300, height: auto
        buttons: {
            Ok: function () {
                $(this).dialog('close');
            }
        }
    }); 