package model;


import javax.persistence.*;

@Entity
@Table(name = "mascota")
public class Mascota {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int mascotaId;

    @Column (name = "nombre")
    private String nombre;

    @Column (name = "tipo")
    private String tipo;

    @Column (name = "motivoIngreo")
    private String motivoIngreso;

    @Column (name="fechaIngreso")
    private String fechaIngreso;

    public Mascota(){

    }

    public Mascota(int mascotaId, String nombre, String tipo, String motivoIngreso, String fechaIngreso){
        this.mascotaId=mascotaId;
        this.nombre=nombre;
        this.tipo=tipo;
        this.motivoIngreso=motivoIngreso;
        this.fechaIngreso=fechaIngreso;
    }

    public int getMascotaId() {
        return mascotaId;
    }

    public void setMascotaId(int mascotaId) {
        this.mascotaId = mascotaId;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getMotivoIngreso() {
        return motivoIngreso;
    }

    public void setMotivoIngreso(String motivoIngreso) {
        this.motivoIngreso = motivoIngreso;
    }

    public String getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(String fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }
}
