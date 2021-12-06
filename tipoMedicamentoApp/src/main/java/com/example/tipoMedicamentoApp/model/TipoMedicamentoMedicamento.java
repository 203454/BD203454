package com.example.tipoMedicamentoApp.model;

import java.util.List;

public class TipoMedicamentoMedicamento extends TipoMedicamento {
    private List<Medicamento> medicamentos;

    public TipoMedicamentoMedicamento(){}

    public List<Medicamento> getMascotas() {
        return medicamentos;
    }

    public void setMedicamentos(List<Medicamento> medicamentos) {
        this.medicamentos = medicamentos;
    }

    public TipoMedicamentoMedicamento(List<Medicamento> medicamentos) {
        this.medicamentos = medicamentos;
    }

    public TipoMedicamentoMedicamento(int tipoMedicamentoId, String nombre, String descripcion, List<Medicamento> medicamentos) {
        super(tipoMedicamentoId, nombre, descripcion);
        this.medicamentos = medicamentos;
    }
}
