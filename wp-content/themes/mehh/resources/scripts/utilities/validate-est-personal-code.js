export function validateEstonianPersonalCode(code) {
    // Check if the code is 11 digits long
    if (code.length !== 11 || isNaN(code)) {
        return false;
    }

    // Extract birth date components
    const day = parseInt(code.substring(5, 7), 10);
    const month = parseInt(code.substring(3, 5), 10);
    const year = parseInt(code.substring(1, 3), 10);
    const fullYear = (year < 32) ? 2000 + year : 1900 + year;

    // Validate birth date
    const birthDate = new Date(fullYear, month - 1, day);
    if (
        birthDate.getDate() !== day ||
        birthDate.getMonth() + 1 !== month ||
        birthDate.getFullYear() !== fullYear
    ) {
        return false;
    }

    // Validate checksum
    const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(code.charAt(i)) * weights[i];
    }
    const remainder = sum % 11;
    const checksum = remainder < 10 ? remainder : 0;

    return parseInt(code.charAt(10)) === checksum;
}
