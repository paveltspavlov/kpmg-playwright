
export function idFormatter(id: number): string {
    return `ID-${id.toString().padStart(5, '0')}`;
}

export function slaCalculator(startDate: Date, endDate: Date): number {
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // returns the difference in days
}

export  function isOverdue(dueDate: Date): boolean {
    const today = new Date();
    return dueDate < today;
}

export function titleValidator(title: string): boolean {
    return title.length >= 5 && title.length <= 100;
}


let allowedCategories: string[] = ["bug", "change request", "question"];



export function categoryCheck(category: string, allowedCategories: string[]): boolean {
    return allowedCategories.includes(category);
}

export function summaryTextValidator(summary: string): boolean {
    return summary.length >= 10 && summary.length <= 200;
}
