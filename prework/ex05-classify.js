const durationMs = 1000

if (durationMs < 1000) {
        console.log('fast')
    } else if (durationMs >= 1000 && durationMs <= 3000) {
        console.log('ok')
    } else if (durationMs > 3000) {
        console.log('slow')
    }


var status = 'passed';

    switch (status) {
        case 'passed':
            console.log('PASS');
            break;
        case 'failed':
            console.log('FAIL');
            break;
        case 'skipped':
            console.log('SKIP');
            break;
        default:
            console.log('UNKNOWN');
    }
