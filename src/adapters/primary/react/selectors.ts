import { AppState } from '../../../store/AppState'

export const getZipCodes = (state: AppState) => {
  return state.buildings.reduce((acc: string[], building) => {
    const zipCode = extractZipCode(building.address)
    return zipCode && !acc.includes(zipCode) ? [...acc, zipCode] : acc
  }, [])
}

const extractZipCode = (buildingAddress: string) => {
  const splitAddress = buildingAddress.split(' ')
  return splitAddress[splitAddress.length - 2]
}
