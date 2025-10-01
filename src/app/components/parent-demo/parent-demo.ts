import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Child1Demo } from '../child1-demo/child1-demo';
import { Child2Demo } from '../child2-demo/child2-demo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-demo',
  imports: [
    Child1Demo,
    Child2Demo,
    FormsModule
  ],
  templateUrl: './parent-demo.html',
  styleUrl: './parent-demo.css'
})
export class ParentDemo {
  a: number;
  parentName: string = '';
  items = [1, 2, 3]
  @ViewChild('myInputBox') myInputBoxRef!: ElementRef;

  receiveDataFromChild(dataFromChild: any) {
    this.parentName = dataFromChild;
  }
  constructor(private cdr: ChangeDetectorRef) {
    this.a = 100;
    console.log("Parent constructor");
    console.log(this.myInputBoxRef);
  }
  ngOnInit() {
    console.log('Parent ngOnInit');

    setTimeout(() => {
      this.items.push(4, 5, 6);
    }, 3000);

  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
    this.cdr.markForCheck()
  }
  ngAfterContentInit() {
    console.log('Parent ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('Parent ngAfterContentChecked')
  }
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
    console.log(this.myInputBoxRef)
    this.myInputBoxRef?.nativeElement.focus();
    this.myInputBoxRef.nativeElement.style.backgroundColor = 'red'
  }
  ngAfterViewChecked() {
    console.log('Parent ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('Parent ngOnDestory');
  }
}
