// Format salary like $126,000

function formatSalary(salary){
    const result = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    }).format(salary)

    return result;
}

export default formatSalary;