package com.example.medicamentoApp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Medicamento {

    @Id
    private int medicamentoId;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "fechaCaducidad")
    private String fechaCaducidad;

    @Column(name = "sustanciaActiva")
    private String sustanciaActiva;

    @Column(name = "tipoMedicamentoId")
    private int tipoMedicamentoId;

    public Medicamento() {
    }

    public Medicamento(int medicamentoId, String nombre, String fechaCaducidad, String sustanciaActiva, int tipoMedicamentoId) {
        this.medicamentoId=medicamentoId;
        this.nombre=nombre;
        this.fechaCaducidad=fechaCaducidad;
        this.sustanciaActiva=sustanciaActiva;
        this.tipoMedicamentoId=tipoMedicamentoId;
    }

    public int getMedicamentoId() {
        return medicamentoId;
    }

    public void setMedicamentoId(int medicamentoId) {
        this.medicamentoId = medicamentoId;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getFechaCaducidad() {
        return fechaCaducidad;
    }

    public void setFechaCaducidad(String fechaCaducidad) {
        this.fechaCaducidad = fechaCaducidad;
    }

    public String getSustanciaActiva() {
        return sustanciaActiva;
    }

    public void setSustanciaActiva(String sustanciaActiva) {
        this.sustanciaActiva = sustanciaActiva;
    }

    public int getTipoMedicamentoId() {
        return tipoMedicamentoId;
    }

    public void setTipoMedicamentoId(int tipoMedicamentoId) {
        this.tipoMedicamentoId = tipoMedicamentoId;
    }
}
