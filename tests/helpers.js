import http from 'k6/http'
import { check } from "k6"
import { Counter, Rate } from "k6/metrics"

const defaultParams = {
  headers: {
      Accept: "application/json, text/plain, */*",
      Authorization:
          `Bearer ${__ENV.AUTH_JWT}`,
      'Content-Type': 'application/json',
  }
}

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

export function setupNamespace () {
  const body = {
    name: 'Test',
    slug: 'test',
    enabled: true,
    meta: {
        subtitle: 'test',
        description: 'test'
    }
  }

  let res = makeRequest({
    method: 'post',
    url: 'compose/namespace/',
    body,
  }).json()

  const namespaceID = (res.response || {}).namespaceID
  return { namespaceID }
}

export function deleteNamespace(namespaceID = '') {
  makeRequest({
    method: 'delete',
    url: `compose/namespace/${namespaceID}`,
  })
}

export function makeRequest ({ method = 'get', url = '', body = '', params = defaultParams }) {
  let response
  url = `${__ENV.CORTEZA_URL}/${url}`

  if (body) {
    body = JSON.stringify(body)
  }
  if (method === 'get') {
    response = http.get(url, params)
  } else if (method === 'post') {
    response = http.post(url, body, params)
  } else if (method === 'delete') {
    response = http.del(url, body, params)
  }

  if (response) {
    checkError(response)
  }

  return response
}
