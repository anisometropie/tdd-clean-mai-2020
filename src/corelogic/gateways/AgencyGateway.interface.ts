import { Observable } from 'rxjs'
import { Building } from '../models/Building.interface'

export interface AgencyGateway {
  retrieveBuildings (): Observable<Building[]>;
}
