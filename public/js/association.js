$.ajax({
    method: "GET",
    url: "/api/association",
})
    .done(function (associations) {
       console.log(associations);
       for (ctr = 0; ctr < associations.length; ctr++ ) {
           $("#association-list").append(" ID: " + ctr);
           $("#association-list").append(" Agent: " + associations[ctr].agent_id);
           $("#association-list").append(" Role: " + associations[ctr].role);
           $("#association-list").append(" Business: " +  associations[ctr].business_id);
           $("#association-list").append("<br>");
       }
    });