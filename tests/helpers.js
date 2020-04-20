import { check } from "k6"
import { Counter, Rate } from "k6/metrics";

const ErrorCount = new Counter("errors")
const ErrorRate = new Rate("error_rate")

export function checkError (response) {
  const success = check(response, {
    "status is 200": r => r.status === 200
  })

  if (!success) {
    ErrorCount.add(1)
    ErrorRate.add(true)
  } else {
    ErrorRate.add(false)
  }
}