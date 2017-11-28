package come.kane;

public class Magazine {
	/*
	 * Fields
	 */
	private int capacity;
	private int currentCapacity;
	
	/*
	 * Constructors
	 */
	
	public Magazine(int capacity, int currentCapacity) {
		super();
		this.capacity = capacity;
		this.currentCapacity = currentCapacity;
	}
	
	public Magazine() {
		this(30,30);
	}

	
	/*
	 * Methods
	 */
	
	@Override
	public String toString() {
		return "Magazine [capacity=" + capacity + ", currentCapacity=" + currentCapacity + "]";
	}

	/*
	 * Gets/Sets
	 */
	public int getCapacity() {
		return capacity;
	}
	
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
	
	public int getCurrentCapacity() {
		return currentCapacity;
	}
	
	public void setCurrentCapacity(int currentCapacity) {
		this.currentCapacity = currentCapacity;
	}
}
