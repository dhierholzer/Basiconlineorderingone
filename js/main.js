
//Sortable Function
  $(function() {
    $( "#sortable1, #sortable2, #sortable3" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  });


function getRadioVal(form, name) {
    // get list of radio buttons with specified name
    var radios = form.elements[name];
    
    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            var vam = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return vam;
}




		$(document).ready(function () {
			var val; //Defined Here So That It Should Be Able To Be Used On Both Functions Below.

            
			$('#pizzatoppingsform').submit(function( event ) {
					val = getRadioVal(this, 'pizzatoppings');
					alert(val); //Used Just To Verify The Value Is Being Stored.  
					});


			$("input[name='toppingtypes']").change(function () {
				var maxAllowed = Number(val); //If I Use An Actual Number Such As 2 Instead of This val Variable, This Function Works.
				var cnt = $("input[name='toppingtypes']:checked").length;
				if (cnt > maxAllowed) {
					$(this).prop("checked", "");
					alert('You can select a maximum of' + maxAllowed + ' Toppings');
				}
			});
		});
