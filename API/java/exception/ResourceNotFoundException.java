package lailas-blog.API.java.exception;

public class ResourceNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1559048022222056258L;

	public ResourceNotFoundException(String message) {
		super(message);
	}

}
