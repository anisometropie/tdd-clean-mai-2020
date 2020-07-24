import { AgencyGateway } from '../../corelogic/gateways/AgencyGateway.interface'
import { Observable, of } from 'rxjs'
import { Building } from '../../corelogic/models/Building.interface'

export class HttpAgencyGateway implements AgencyGateway {
  retrieveBuildings(): Observable<Building[]> {
    const rawBuilding = [
      {
        buildingId: '3456abc',
        the_address: '4 rue Geoffroy Lasnier 75007 Paris'
      },
      {
        buildingId: '5556abc',
        the_address: '6 rue Geoffroy Lasnier 75007 Paris'
      },
      {
        buildingId: '5856abc',
        the_address: '8 rue de Courcelles 75017 Paris'
      }
    ]
    return of(
      rawBuilding.map((r) => ({ id: r.buildingId, address: r.the_address }))
    )
  }
}
