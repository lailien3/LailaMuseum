package lailas-blog.API.java.controller;

import java.net.URI;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import lailas-blog.API.java.model.Plant;
import lailas-blog.API.java.service.PlantService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.headers.Header;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/plants")
public class PlantController {
	
	private final PlantService plantService;

	public PlantController(PlantService plantService) {
		super();
		this.plantService = plantService;
	}
// ----------------	
	@Operation(
			summary = "Retrieves all plants.",
			description = "Retrieves all plants and displays them in a list.",
			method = "GET",
			responses = {
				@ApiResponse(
						responseCode = "200",
						description = "JSON list of plants",
						content = {@Content(mediaType = MediaType.APPLICATION_JSON_VALUE)}
						)	
					}
				)
	
	@GetMapping
	public ResponseEntity<List<Plant>> getPlants() {
		List<Plant> plants = plantService.findAll();
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(plants);
	}
// ----------------	
	@Operation(
			summary = "Retrieves a plants by the supplied id.",
			description = "Retrieves all plants.",
			method = "GET",
			responses = {
					@ApiResponse(
							responseCode = "200",
							description = "if plant exists, returned as JSON object",
							content = {@Content(mediaType = MediaType.APPLICATION_JSON_VALUE)}	
							),
					@ApiResponse(
							responseCode = "404",
							description = "if plant doesn't exists, error message returned as plain text",
							content = {@Content(mediaType = MediaType.TEXT_PLAIN_VALUE)}
							)	
						}
					)
	
@GetMapping("/{id}")
public ResponseEntity<Plant> getPlant(@PathVariable long id) {
    return ResponseEntity
            .status(HttpStatus.OK)
            .body(plantService.findById(id));
}


// ----------------
}
