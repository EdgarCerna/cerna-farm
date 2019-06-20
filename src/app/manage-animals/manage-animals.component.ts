import { Component, OnInit } from '@angular/core';
import { CowService } from "../services/cow.service";
import { HorseService } from "../services/horse.service";
import { Cow } from "../models/cow.model";
import { AnimalType } from "../models/animal-type.enum";
import { Horse } from '../models/horse.model';

class Animal {
  constructor(public type: AnimalType){
    type = AnimalType.Cows;
  }
}

@Component({
  selector: 'app-manage-animals',
  templateUrl: './manage-animals.component.html',
  styleUrls: ['./manage-animals.component.scss']
})
export class ManageAnimalsComponent implements OnInit {
  cows: Cow[];
  horses: Horse[];
  animalType: AnimalType;
  public animal: Animal;

  constructor(private cowService: CowService, 
              private horseService: HorseService) {
    this.animal = new Animal(AnimalType.Chickens);
    this.animalType = AnimalType.Cows;
   }

  ngOnInit() {
    this.cowService.getCows().subscribe(cows => {
      this.cows = cows;
    });

    this.horseService.getHorses().subscribe(horses => {
      this.horses = horses;
    });
  }

  setType(type: AnimalType) {
    this.animal.type = type;
  }

}
