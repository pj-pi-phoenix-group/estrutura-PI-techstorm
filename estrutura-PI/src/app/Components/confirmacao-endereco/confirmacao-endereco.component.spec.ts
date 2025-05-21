import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoEnderecoComponent } from './confirmacao-endereco.component';

describe('ConfirmacaoEnderecoComponent', () => {
  let component: ConfirmacaoEnderecoComponent;
  let fixture: ComponentFixture<ConfirmacaoEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacaoEnderecoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacaoEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
