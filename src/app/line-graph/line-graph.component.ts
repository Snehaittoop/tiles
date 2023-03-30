import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnInit{
  constructor(private api:ApiService,private route:ActivatedRoute){}
  id:any;
  ngOnInit():void{
    this.id = this.route.snapshot.queryParamMap.get('identifier');
    
    let vital=this.api.fetchData();
    vital.connect({},()=>{
      vital.subscribe("/topic/"+this.id,(message)=>{
        console.log(message);
      })
    })
  }

}
