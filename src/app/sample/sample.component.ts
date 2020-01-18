import { Component, Input, ChangeDetectorRef,AfterViewInit
 } from '@angular/core';

@Component({
  selector: 'sample',
  templateUrl: `./sample.component.html`,
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements AfterViewInit{
  @Input() values: string[];

  constructor(private cdr: ChangeDetectorRef){}

  ngAfterViewInit(){
    this.cdr.detectChanges();
  }

  disableTooltip(index, elementRef){
    const element = elementRef.children[index];
    return (element.offsetWidth >= element.scrollWidth);
  }
}
