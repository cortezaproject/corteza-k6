import { sleep } from 'k6'
import { setupNamespace, makeRequest, deleteNamespace } from '../helpers.js'

export const options = {
  stages: [
    { duration: '15s', target: 10 },
    { duration: '30s', target: 10 },
    { duration: '15s', target: 0 }
  ]
}

export function setup() {
  return setupNamespace()
}

export function teardown({ namespaceID }) {
  deleteNamespace(namespaceID)
}

export default function({ namespaceID }) {
  makeRequest({
    method: 'post',
    url: '/system/auth/internal/login',
    body: {
      email: 'test@mail.com',
      password: 'test'
    }
  })

  makeRequest({
    url: '/system/auth/check',
  })

  makeRequest({
    url: '/system/application/',
  })

  makeRequest({
    url: '/compose/settings/current',
  })

  makeRequest({
    url: '/compose/automation/',
  })

  makeRequest({
    url: '/system/auth/check',
  })

  makeRequest({
    url: '/compose/namespace/',
  })

  makeRequest({
    url: '/messaging/settings/current',
  })

  makeRequest({
    url: `/compose/namespace/${namespaceID}/module/`,
  })

  makeRequest({
    url: `/compose/namespace/${namespaceID}/chart/`,
  })

  makeRequest({
    url: `/compose/namespace/${namespaceID}/page/?sort=weight+AS`,
  })
  
  makeRequest({
    url: `/messaging/channels/`,
  })

  makeRequest({
    url: `/messaging/commands/`,
  })

  makeRequest({
    url: `/messaging/permissions/effective`,
  })

  makeRequest({
    url: `/messaging/status/`,
  })

  makeRequest({
    url: `/compose/namespace/${namespaceID}/page/tree`,
  })

  sleep(1)
}
