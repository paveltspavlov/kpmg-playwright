
import {
    idFormatter,
    slaCalculator,
    isOverdue,
    titleValidator,
    categoryCheck,
    summaryTextValidator
} from './requestUtils.ts';

const allowedCategories = ["bug", "change request"];

let requestt: [id: number, startDate: Date, endDate: Date, title: string, category: string, summaryText: string][] = [

    [1, new Date("2026-11-01"), new Date("2026-11-13"), "Missing banner", "bug", "Banner is not visible on homepage"],
    [2, new Date("2026-11-02"), new Date("2026-11-22"), "Background color change", "change request", "The background color of the homepage should be changed to blue"],
    [3, new Date("2026-10-15"), new Date("2026-11-14"), "Submitting new request returns an error", "bug", "Submitting a change request returns an error 404"],
    [4, new Date("2026-11-10"), new Date("2026-11-25"), "Login button unresponsive", "bug", "Login button does not respond to clicks on mobile"],
    [5, new Date("2026-11-05"), new Date("2026-11-10"), "Add dark mode toggle", "change request", "Users requested a toggle to switch between light and dark themes"],
    [6, new Date("2026-09-01"), new Date("2026-09-30"), "Export to CSV fails", "bug", "Exporting large reports to CSV times out"],
    [7, new Date("2026-11-18"), new Date("2026-12-01"), "Clarify password policy", "question", "Need clarification on minimum password length requirements"],
    [8, new Date("2026-11-20"), new Date("2026-11-21"), "Typo in footer", "bug", "Footer text has a spelling mistake in 'Contact Us'"]

]

for (let i = 0; i < requestt.length; i++) {
    let reportSubmission = requestt[i];

    let ids = idFormatter(reportSubmission[0]);
    let sla = slaCalculator(reportSubmission[1], reportSubmission[2]);
    let overdue = isOverdue(reportSubmission[2]);
    let titleOk = titleValidator(reportSubmission[3]);
    let categoryValidate = categoryCheck(reportSubmission[4], allowedCategories);
    let summary = summaryTextValidator(reportSubmission[5]);
  
  //console.log(summary);
  console.log("  SLA:", sla, "h | Overdue:", overdue, "| Title OK:", titleOk, "| Category OK:", categoryValidate);
}