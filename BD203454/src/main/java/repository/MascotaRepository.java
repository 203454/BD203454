package repository;

import com.example.BD203454.model.Mascota;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MascotaRepository extends CrudRepository<Mascota,String> {
    List<Mascota> findAll();

    Mascota findByMascotaId(int mascotaId);

    Mascota save(Mascota mascota);

    void delete(Mascota mascota);
}
