import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ExplorerPage } from './explorer.page';

describe('ExplorerPage', () => {
  let component: ExplorerPage;
  let fixture: ComponentFixture<ExplorerPage>;
  let listPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplorerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(ExplorerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    listPage = fixture.nativeElement;
    const items = listPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
