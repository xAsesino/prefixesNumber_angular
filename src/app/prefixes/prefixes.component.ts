import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prefixes',
  templateUrl: './prefixes.component.html',
  styleUrls: ['./prefixes.component.scss']
})
export class PrefixesComponent implements OnInit {

  title : string = "Prefixes number"
  description : string = "Enter your phone number ( without the 0 ) and with the prefix ( starting with + )"

  myNumber : any

  choice : any = "+32"

  countries : any [] = [
    {
      "country" : "Belgium",
      "prefixe" : "+32"
    },
    {
      "country" : "France",
      "prefixe" : "+33"
    },
    {
      "country" : "Italy", 
      "prefixe" : "+39"
    },
    {
      "country" : "Germany", 
      "prefixe" : "+49"
    },
    {
      "country" : "Spain", 
      "prefixe" : "+34"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
