import axios from 'axios'

export const defaultValuesRDStation = {
  deal: {
    name: 'Negociação'
  },
  deal_source: {
    _id: '649efda8572bd40015e06118'
  },
  contacts: [
    {
      legal_bases: [
        {
          type: 'consent',
          status: 'granted',
          category: 'communications'
        }
      ]
    }
  ]
}

export const RDStation = axios.create({
  baseURL: 'https://api.rd.services/v1',
  params: {
    token: '652587b1690ed9000dc5c49a'
  }
})
