$.ajax({
    method: "GET",
    url: "/api/agent",
})
    .done(function (agents) {
       console.log(agents);
       for (ctr = 0; ctr < agents.length; ctr++ ) {
           $("#agent-list").append(ctr + ": ");
           $("#agent-list").append(agents[ctr].name);
           $("#agent-list").append("<br>");
       }
    });