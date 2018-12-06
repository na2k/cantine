import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCommandeComponent } from './template-commande.component';

describe('TemplateCommandeComponent', () => {
  let component: TemplateCommandeComponent;
  let fixture: ComponentFixture<TemplateCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
