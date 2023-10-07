package lailas-blog.API.java.model;

import java.math.BigDecimal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
public class Plant {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "plantgen")
	@SequenceGenerator(name = "plantgen", sequenceName = "PLANT_ID_SEQ", allocationSize = 1)
	private long id;
	
	@NotBlank(message = "Plant name must not be null or blank.")
	@Size(min = 1, max = 250, message = "Plant name must be longer than 1 character and less than 250.")
	private String name;

	@NotBlank(message = "Plant scientific must not be null or blank.")
	@Size(min = 1, max = 250, message = "Plant name must be longer than 1 character and less than 250.")
	private String scientific_name;
	
	@NotBlank(message = "Plant sunlight must not be null or blank.")
	@Size(min = 1, max = 250, message = "Employee province must be longer than 1 character and less than 500.")
	private String sunlight;
	
	@NotBlank(message = "Plant water must not be null or blank.")
	@Size(min = 1, max = 250, message = "Employee country must be longer than 1 character and less than 500.")
	private String water;

	@NotBlank(message = "Plant soil must not be null or blank.")
	@Size(min = 1, max = 250, message = "Employee country must be longer than 1 character and less than 500.")
	private String soil;

	//constructors
	public Plant() {
		super();
	}

	public Plant(String name, String scientific_name, String sunlight, String water, String soil) {
		super();
		this.name = name;
		this.scientific_name = scientific_name;
		this.sunlight = sunlight;
		this.water = water;
		this.soil = soil;
	}

	//getters & setters
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getScientific_name() {
		return scientific_name;
	}

	public void setScientific_name(String scientific_name) {
		this.scientific_name = scientific_name;
	}

	public String getSunlight() {
		return sunlight;
	}

	public void setSunlight(String sunlight) {
		this.sunlight = sunlight;
	}

	public String getWater() {
		return water;
	}

	public void setWater(String water) {
		this.water = water;
	}

	public String getSoil() {
		return soil;
	}

	public void setSoil(String soil) {
		this.soil = soil;
	}

}