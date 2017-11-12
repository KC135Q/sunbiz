$.ajax({
    method: "GET",
    url: "/api/business",
})
    .done(function (businesses) {
       console.log(businesses);
       for (ctr = 0; ctr < businesses.length; ctr++ ) {
           $("#business-list").append(ctr + ": ");
           $("#business-list").append(businesses[ctr].name);
           $("#business-list").append("<br>");
       }
    });