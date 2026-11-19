let statuss = ["Submitted", "In Review", "Resolved", "Waiting for Info"];

let currentStatus = "Submitted";
let nextStatus = "In Review";

function statusValidator(currentStatuss: string): string {
    if (currentStatuss === "Submitted" && nextStatus === "In Review") {
    console.log("Valid status");
    return "Valid status";
    } else if (currentStatuss === "In Review" && nextStatus === "Resolved") {
    console.log("Valid status");
    return "Valid status";
    } else if (currentStatuss === "In Review" && nextStatus === "Waiting for Info") {
    console.log("Valid status");
    return "Valid status";
    } else if (currentStatuss === "Waiting for Info" && nextStatus === "In Review") {
    console.log("Valid status");
    return "Valid status";
    } else{
        console.log("Invalid status");
        return "Invalid status";
    }
}

const request: {id: number, title: string, priority: 1 | 2 | 3 | 4 | 5, status: string, nextStatus: string}[] = [
    {id: 1, title:"Test request 01", priority: 1, status: "Submitted", nextStatus: "In Review"},
    {id: 2, title:"Test request 02", priority: 2, status: "In Review", nextStatus: "In Review"},
    {id: 3, title:"Test request 03", priority: 3, status: "Resolved", nextStatus: "In Review"}, 
    {id: 4, title:"Test request 04", priority: 4, status: "Waiting for Info", nextStatus: "In Review"},
    {id: 5, title:"Test request 05", priority: 5, status: "Submitted", nextStatus: "In Review"},
    {id: 6, title:"Test request 06", priority: 1, status: "Submitted", nextStatus: "In Review"}, 
    {id: 7, title:"Test request 07", priority: 2, status: "In Review", nextStatus: "In Review"},
    {id: 8, title:"Test request 08", priority: 3, status: "Resolved", nextStatus: "In Review"}, 
    {id: 9, title:"Test request 09", priority: 4, status: "Waiting for Info", nextStatus: "In Review"},
    {id: 10, title:"Test request 10", priority: 5, status: "Submitted", nextStatus: "In Review"}
]

for (let i = 0; i < request.length; i++) {
    if (request[i].status === currentStatus) {
        const result = statusValidator(request[i].status);
        console.log(result);
        console.log(request[i]);
    } else{
        console.log("Workflow is not valid for this request");
    }
}