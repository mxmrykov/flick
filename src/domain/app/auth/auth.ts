import { JwtInternalModel } from "../../constant/model/jwt"
import { decode } from "../crypto/base64.ts"

export default function needAuth():boolean {
    const token = localStorage.getItem("token")
    if (token === null) {
        clearFootPrint()
        return true
    }
    else if (typeof token !== "string") {
        clearFootPrint()
        return true
    }
    const payload:JwtInternalModel = JSON.parse(
        decode(token.split(".")[1])
    )

    Object.keys(payload).forEach(i => {
        if (payload[i] === null || payload[i] === undefined) {
            clearFootPrint()
            return true
        }
    })

    return false
}

function clearFootPrint() {
    localStorage.removeItem("token")
    localStorage.removeItem("device_footprint")
}