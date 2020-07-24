import { Observable, of } from 'rxjs'
import { Building } from '../../corelogic/models/Building.interface'
import { AgencyGateway } from '../../corelogic/gateways/AgencyGateway.interface'

export class InMemoryAgencyGateway implements AgencyGateway {
  private _buildings: Map<string, Building[]> = new Map<string, Building[]>()

  retrieveBuildings(): Observable<Building[]> {
    if (this._buildings.size === 0) return of([])
    return of(this._buildings.values().next().value)
  }

  set buildings(buildings: Map<string, Building[]>) {
    this._buildings = buildings
  }
}
