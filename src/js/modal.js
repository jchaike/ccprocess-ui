$(document).ready(function() {
    var currentModal;

    /**
     ** When any element with the data-toggle "modal" is clicked
     ** set it as the current modal, and fade it in.
     **/
    $("*[data-toggle='modal']").live("click", function() {
        var targetModal = $(this).attr("data-target");
        currentModal = targetModal;
        $(targetModal).fadeIn();
    });

    /**
     ** hook into, and close the current modal that is open. 
     **/
    $(".modal .close").live("click", function() {
        $(currentModal).fadeOut();
    });

    /**
     ** On save, do validation check, gather all
     ** required, missing fields and display missing fields
     ** in an alert. Change input style to error
     ** if any required fields are left blank.
     **/
    $(".modal .save").live("click", function() {

        //show the alert if fields are missing.
        var missing = [];
        $(".required").each(function() {
            if ($(this).val() == "") {
                missing.push($(this).prev().text())
                $(this).addClass("error");
                $(".alert").addClass("danger").fadeIn();
            }
        });

        //gather missing fields and display them in the alert.
        if (missing.length > 0) {
            if (missing.length == 1) {
                $(".alert p").text("The following field is required: ")    
            } else {
                $(".alert p").text("The following fields are required: ")
            }
            
            for (x in missing) {
                if (missing[x] == missing[missing.length - 1]) {
                    if (missing.length == 1) {
                        $(".alert p").append("<b>" + missing[x] + "</b>.");    
                    } else {
                        $(".alert p").append("and <b>" + missing[x] + "</b>.");
                    }
                    
                } else {
                    if (missing.length == 2 && x == 1) {
                        $(".alert p").append("<b>" + missing[x] + "</b>, ");
                    } else {
                        $(".alert p").append("<b>" + missing[x] + "</b> ");
                    }
                    

                }
            }
            if (missing.length == 1 ) {
                $(".alert p").append(" Please fill in the missing field and re-submit your order.")    
            } else {
                $(".alert p").append(" Please fill in the missing fields and re-submit your order.")
            }
            

        } else {
            $(".modal .alert").fadeOut();
            $(".modal form input").each(function() {
                console.log($(this).attr("id") + ": " + $(this).val());
            })
        }

    });
});
