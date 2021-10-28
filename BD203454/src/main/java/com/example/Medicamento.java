import net.bytebuddy.dynamic.loading.InjectionClassLoader;

        import javax.persistence.*;
@Entity
@Table(name="Medicamento")
public class Medicamento {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id_Medicamento")
    private  int idMeciamento;

    @Column(name="nombre")
    private String nombre;

    @Column(name="fecha_caducidad")
    private int fecha_caducidad;

    @Column(name="sustancia_activa")
    private String sustancia_activa;

    public medicamento(String _nombre, int fecha_caducidad, String sustancia_activa, int ID_medicamento){
        this.id_Medicamento = idMedicamento;
        this.nombre = nombre;
        this.fecha_caducidad = fecha_caducidad;
        this.sustancia_activa = sustancia_activa;
    }

    public  Medicamento(){}

    public int getIdMeciamento(){
        return idMeciamento;
    }

    public void setIdMeciamento(int idMeciamento){
        this.idMeciamento=idMeciamento;
    }

    public String getNombre(){
        return nombre;
    }

    public void  setNombre(){
        this.nombre=nombre:
    }

    public  int getFecha_caducidad(){
        return  fecha_caducidad;
    }

    public void setFecha_caducidad(){
        this.fecha_caducidad=fecha_caducidad;
    }

    public String getSustancia_activa(){
        return sustancia_activa;
    }

    public  void  setSustancia_activa(){
        this.sustancia_activa=sustancia_activa;
    }
}

