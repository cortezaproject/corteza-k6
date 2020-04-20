// Creator: k6 Browser Recorder 0.2.0

import { sleep, group } from "k6"
import http from "k6/http"
import { checkError } from "../helpers.js"

export const options = {
  vus: 10,
  duration: "5m"
}

export default function() {
  let response

  group("CRM", () => {
    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625528029711/record/?filter=&filter&page=1&perPage=20&sort=createdAt+DESC`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625528029711/record/report?metrics=&metrics&dimensions=Status&filter=&filter`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625528029711/record/report?metrics=&metrics&dimensions=Country&filter=&filter`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625528029711/record/report?metrics=&metrics&dimensions=LeadSource&filter=&filter`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636624923984399/record/?filter=&filter&page=1&perPage=20&sort=createdAt+DESC`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625695670799/record/?filter=&filter&page=1&perPage=20&sort=createdAt+DESC`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625981014543/record/?filter=&filter&page=1&perPage=20&sort=createdAt+DESC`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636624705815055/record/?filter=&filter&page=1&perPage=20&sort=createdAt+DESC`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636624923984399/record/?filter=&filter&page=1&perPage=20&sort=createdAt+DESC`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/system/users/?userID%5B%5D=undefined`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636624923984399/record/?perPage=10`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/system/users/?userID%5B%5D=undefined`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625695670799/record/?filter=AccountId+%3D+0&page=1&perPage=20&sort=&sort`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625981014543/record/?filter=AccountId+%3D+0&page=1&perPage=20&sort=&sort`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636624387113487/record/?filter=AccountId+%3D+0&page=1&perPage=20&sort=createdAt+DESC`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625796334095/record/?filter=AccountId+%3D+0&page=1&perPage=20&sort=createdAt+DESC`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625444274703/record/?filter=AccountId+%3D+0&page=1&perPage=20&sort=ActivityDate+DESC`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625192681999/record/?filter=AccountId+%3D+0&page=1&perPage=20&sort=ActivityDate+DESC`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625343349263/record/?filter=AccountId+%3D+0&page=1&perPage=20&sort=&sort`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.post(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636624923984399/record/`,
      '{"values":[{"name":"Description","value":"<p><br></p>"},{"name":"AccountName","value":"test"}]}',
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`,
          "Content-Type": "application/json"
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636624923984399/record/140641576954102287`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/system/users/?userID%5B%5D=undefined`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625695670799/record/?filter=AccountId+%3D+140641576954102287&page=1&perPage=20&sort=&sort`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625981014543/record/?filter=AccountId+%3D+140641576954102287&page=1&perPage=20&sort=&sort`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636624387113487/record/?filter=AccountId+%3D+140641576954102287&page=1&perPage=20&sort=createdAt+DESC`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625796334095/record/?filter=AccountId+%3D+140641576954102287&page=1&perPage=20&sort=createdAt+DESC`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625444274703/record/?filter=AccountId+%3D+140641576954102287&page=1&perPage=20&sort=ActivityDate+DESC`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625192681999/record/?filter=AccountId+%3D+140641576954102287&page=1&perPage=20&sort=ActivityDate+DESC`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625343349263/record/?filter=AccountId+%3D+140641576954102287&page=1&perPage=20&sort=&sort`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636624923984399/record/?filter=&filter&page=1&perPage=20&sort=createdAt+DESC`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)

    response = http.get(
      `${__ENV.CORTEZA_URL}/api/system/users/?userID%5B%5D=undefined`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization:
            `Bearer ${__ENV.AUTH_JWT}`
        }
      }
    )

    checkError(response)
  })

  sleep(1)
}