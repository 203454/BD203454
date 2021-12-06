package com.example.duenioApp.repository;


import com.example.duenioApp.model.Duenio;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DuenioRepository extends CrudRepository<Duenio,String> {




    public List<Duenio> findAll();

    public Duenio findByDuenioId(int duenioId);




    Duenio save(Duenio duenio);

    void delete(Duenio duenio);
}
