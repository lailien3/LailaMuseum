package lailas-blog.API.java.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import lailas-blog.API.java.ResourceNotFoundException;
import lailas-blog.API.java.model.Plant;
import lailas-blog.API.java.repository.PlantRepository;

@Service
public class PlantService {

	private final PlantRepository plantRepo;

	public PlantService(PlantRepository bookRepo) {
		super();
		this.plantRepo = bookRepo;
	}
	
	public List<Plant> findAll() {
		return plantRepo.findAll();
	}

	/* find plant by id */
	public Plant findById(long id) {
		Optional<Plant> plantOpt = plantRepo.findById(id);
		if(plantOpt.isEmpty()) {
			throw new ResourceNotFoundException("Plant with id " + id + " not found.");
		}
		return plantOpt.get();
	}

}
