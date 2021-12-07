package com.example.tipoMedicamentoApp.repository;

import com.example.tipoMedicamentoApp.model.TipoMedicamento;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TipoMedicamentoRepository extends CrudRepository<TipoMedicamento,String> {


    public List<TipoMedicamento> findAll();

    public TipoMedicamento findByTipoMedicamentoId(int tipoMedicamentoId);


    TipoMedicamento save(TipoMedicamento tipoMedicamento);

    void delete(TipoMedicamento tipoMedicamento);

}
