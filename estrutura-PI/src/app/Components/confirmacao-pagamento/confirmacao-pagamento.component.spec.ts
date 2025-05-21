import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoPagamentoComponent } from './confirmacao-pagamento.component';

describe('ConfirmacaoPagamentoComponent', () => {
  let component: ConfirmacaoPagamentoComponent;
  let fixture: ComponentFixture<ConfirmacaoPagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacaoPagamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacaoPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
