function strip(x: number | string): string | number {
    if (typeof x === 'number') {
        return x.toFixed(2)
    } else {
        return x.trim()
    }
}

class MyResp {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    message = 'error result'
}

function hendle(res: MyResp | MyError) {
    if (res instanceof MyResp) {
        return res.header + res.result
    } else {
        return res.header + res.message
    }
}

// ===================

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {
    // do somth...
}

setAlertType('success')
// setAlertType('default') //ERROR
setAlertType('danger')
