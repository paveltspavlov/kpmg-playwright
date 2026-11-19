//Create request-utils.ts with at least 6 small, pure, typed functions: id formatting, SLA calculation, overdue check, title validation (5–100 characters), category check against an allowed list, summary text

function idFormatter(id: number): string {
    return `ID-${id.toString().padStart(5, '0')}`;
}

function slaCalculator(startDate: Date, endDate: Date): number {
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // returns the difference in days
}

function isOverdue(dueDate: Date): boolean {
    const today = new Date();
    return dueDate < today;
}

function titleValidator(title: string): boolean {
    return title.length >= 5 && title.length <= 100;
}

function categoryCheck(category: string, allowedCategories: string[]): boolean {
    return allowedCategories.includes(category);
}

function summaryTextValidator(summary: string): boolean {
    return summary.length >= 10 && summary.length <= 200;
}
