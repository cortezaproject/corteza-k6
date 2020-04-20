import http from 'k6/http'
import { sleep } from 'k6'
import { checkError } from '../helpers.js'

export const options = {
  stages: [
    { duration: '1m', target: 10 },
    { duration: '3m', target: 10 },
    { duration: '1m', target: 0 }
  ]
}

export default function() {
  let response

  response = http.post(
    `${__ENV.CORTEZA_URL}/api/system/auth/internal/login`,
    '{\n  "email": "joze.fortun@gmail.com",\n  "password": "geslo"\n}\n',
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

  response = http.get(`${__ENV.CORTEZA_URL}/`, {
    headers: {
      "Upgrade-Insecure-Requests": "1",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
    }
  })

  checkError(response)

  response = http.get(`${__ENV.CORTEZA_URL}/messaging/`, {
    headers: {
      "Upgrade-Insecure-Requests": "1",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
    }
  })

  checkError(response)

  response = http.get(`${__ENV.CORTEZA_URL}/compose/ns/crm/`, {
    headers: {
      "Upgrade-Insecure-Requests": "1",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
    }
  })

  checkError(response)

  response = http.get(`${__ENV.CORTEZA_URL}/api/system/auth/check`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization:
        `Bearer ${__ENV.AUTH_JWT}`
    }
  })

  checkError(response)

  response = http.get(`${__ENV.CORTEZA_URL}/api/system/application/`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization:
        `Bearer ${__ENV.AUTH_JWT}`
    }
  })

  checkError(response)

  response = http.get(`${__ENV.CORTEZA_URL}/api/system/application/`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization:
        `Bearer ${__ENV.AUTH_JWT}`
    }
  })

  checkError(response)

  response = http.get(`${__ENV.CORTEZA_URL}/api/system/application/`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization:
        `Bearer ${__ENV.AUTH_JWT}`
    }
  })

  checkError(response)

  response = http.get(`${__ENV.CORTEZA_URL}/api/system/application/`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization:
        `Bearer ${__ENV.AUTH_JWT}`
    }
  })

  checkError(response)

  response = http.get(`${__ENV.CORTEZA_URL}/api/system/application/`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization:
        `Bearer ${__ENV.AUTH_JWT}`
    }
  })

  checkError(response)

  response = http.get(`${__ENV.CORTEZA_URL}/api/compose/settings/current`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization:
        `Bearer ${__ENV.AUTH_JWT}`
    }
  })

  checkError(response)

  response = http.get(`${__ENV.CORTEZA_URL}/api/compose/automation/`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization:
        `Bearer ${__ENV.AUTH_JWT}`
    }
  })

  checkError(response)

  response = http.get(`${__ENV.CORTEZA_URL}/api/system/auth/check`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization:
        `Bearer ${__ENV.AUTH_JWT}`
    }
  })

  checkError(response)

  response = http.get(`${__ENV.CORTEZA_URL}/api/compose/namespace/`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization:
        `Bearer ${__ENV.AUTH_JWT}`
    }
  })

  checkError(response)

  response = http.get(`${__ENV.CORTEZA_URL}/api/messaging/status/`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization:
        `Bearer ${__ENV.AUTH_JWT}`
    }
  })

  checkError(response)

  response = http.get(`${__ENV.CORTEZA_URL}/api/system/auth/check`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization:
        `Bearer ${__ENV.AUTH_JWT}`
    }
  })

  checkError(response)

  response = http.get(`${__ENV.CORTEZA_URL}/api/compose/namespace/`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization:
        `Bearer ${__ENV.AUTH_JWT}`
    }
  })

  checkError(response)

  response = http.get(
    `${__ENV.CORTEZA_URL}/api/system/reminder/?assignedTo=140636677554045455&scheduledOnly=true&excludeDismissed=true`,
    {
      headers: {
        Accept: "application/json, text/plain, */*",
        Authorization:
          `Bearer ${__ENV.AUTH_JWT}`
      }
    }
  )

  checkError(response)

  response = http.get(`${__ENV.CORTEZA_URL}/api/messaging/settings/current`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization:
        `Bearer ${__ENV.AUTH_JWT}`
    }
  })

  checkError(response)

  response = http.get(
    `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/`,
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
    `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/chart/`,
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
    `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/page/?sort=weight+ASC`,
    {
      headers: {
        Accept: "application/json, text/plain, */*",
        Authorization:
          `Bearer ${__ENV.AUTH_JWT}`
      }
    }
  )

  checkError(response)

  response = http.get(`${__ENV.CORTEZA_URL}/api/messaging/channels/`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization:
        `Bearer ${__ENV.AUTH_JWT}`
    }
  })

  checkError(response)

  response = http.get(`${__ENV.CORTEZA_URL}/api/messaging/commands/`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization:
        `Bearer ${__ENV.AUTH_JWT}`
    }
  })

  checkError(response)

  response = http.get(
    `${__ENV.CORTEZA_URL}/api/messaging/permissions/effective`,
    {
      headers: {
        Accept: "application/json, text/plain, */*",
        Authorization:
          `Bearer ${__ENV.AUTH_JWT}`
      }
    }
  )

  checkError(response)

  response = http.get(`${__ENV.CORTEZA_URL}/api/messaging/status/`, {
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization:
        `Bearer ${__ENV.AUTH_JWT}`
    }
  })

  checkError(response)

  response = http.get(
    `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/page/tree`,
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
    `${__ENV.CORTEZA_URL}/api/system/reminder/?assignedTo=140636677554045455&perPage=0`,
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
    `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625528029711/record/?filter=Status+%3D+%27New%27&page=1&perPage=20&sort=&sort`,
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
    `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625695670799/record/?filter=StageName+%21%3D+%27Closed+Won%27+AND+StageName+%21%3D+%27Closed+Lost%27&page=1&perPage=20&sort=&sort`,
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
    `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625444274703/record/?filter=date%28ActivityDate%29+%3E%3D+%272020-03-31T22%3A00%3A00.000Z%27+AND+date%28EndDateTime%29+%3C+%272020-04-30T22%3A00%3A00.000Z%27`,
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
    `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625192681999/record/?filter=date%28ActivityDate%29+%3E%3D+%272020-03-31T22%3A00%3A00.000Z%27+AND+date%28ActivityDate%29+%3C+%272020-04-30T22%3A00%3A00.000Z%27`,
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
    `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625528029711/record/report?metrics=&metrics&dimensions=DATE%28created_at%29&filter=&filter`,
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
    `${__ENV.CORTEZA_URL}/api/compose/namespace/140636624286384655/module/140636625695670799/record/report?metrics=SUM%28Amount%29+AS+SUM_Amount&dimensions=StageName&filter=&filter`,
    {
      headers: {
        Accept: "application/json, text/plain, */*",
        Authorization:
          `Bearer ${__ENV.AUTH_JWT}`
      }
    }
  )

  checkError(response)

  sleep(1)
}
