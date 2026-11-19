total = Number(40)
failed = Number(6)
skipped = Number(2)

passed = total - failed - skipped
passRate = (passed / total) * 100
passRound = Math.round((passed / total) * 100)

console.log('Passed: ' + passed);
console.log('Pass Rate: ' + passRate + '%');
if (failed===0 && passRound >= 80) {
    console.log('Green run: passed')
} else{
    console.log('Green run: failed')
}