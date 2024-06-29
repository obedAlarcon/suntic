import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
@Input({required:true}) duration = 0;
@Input({required:true}) message='';
  counter: any;

 constructor(){
  // No asyng 
  // este corre antes de que corra el compnets 

  console.log('constructor');
  console.log('-'. repeat(10))
 }
  ngOnChanges(changes: SimpleChanges){
    // este detecta los cambio  
    
  console.log('constructor');
  console.log('-'. repeat(10));
  console.log(changes);
  const duration = changes['duration'];
  if(duration && duration.currentValue !== duration.previousValue){
    this.doSomething();
  }
  }
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
   


          ngAfterViewInit(){
            // si los hijo ya fueron renderizados
            console.log('ngAfterViewInit'),
            console.log('-',repeat(10))
          }

        



          ngOnDestry(){
            console.log('ngOnDestroy'),
            console.log('-',repeat(10))
          }
          doSomething(){
            console.log('change duration')
          }
  }

