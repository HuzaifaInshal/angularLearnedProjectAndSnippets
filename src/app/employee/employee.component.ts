import { Component, Self } from '@angular/core';
import { RoomserviceService } from '../rooms/services/roomservice.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  providers:[RoomserviceService]
})
export class EmployeeComponent {
  empname : string = "jpuhn"

  constructor (@Self() private roomService : RoomserviceService){}
  // levels are the dependecy resolutions/service finders
  // first local then parent then so on to app component then to app.config
  // then last to nullobject which returns error
  // @Self says that the specified service should be registered(instanciated) in this 
  // file i.e. must be set inside the providers tag; i.e. will only check service on this level
  // will never go up level
  // @SkipSelf specifies that the service is not in current file but on any 
  // above level so skip for searching here
  //  @Optional checks if a service is available at all levels if not found on any level
  // then it does not return any type of errror
  // @Host will pass on the instance created here to its child, all childs will not try
  // to find instance above the Host level 
}
