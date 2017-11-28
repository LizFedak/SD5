package come.kane;

public class Gun {
	/*
	 * fields
	 */
	private float caliber;
	private Manufacturer manufacturer;
	private int serialNum;
	private String name;
	private Magazine magazine;
	
	/*
	 * constructors
	 */
	public Gun(float caliber, Manufacturer manufacturer, int serialNum, String name, Magazine magazine){
		super();
		this.caliber = caliber;
		this.manufacturer = manufacturer;
		this.serialNum = serialNum;
		this.name = name;
		this.magazine = magazine;
	}
	
	public Gun(){
		this(.223f, Manufacturer.COLT, 2323232, "6940", new Magazine(30,30));
	}
	/*
	 * methods
	 */
	
	
	@Override
	public String toString() {
		return "Gun [caliber=" + caliber + ", manufacturer=" + manufacturer + ", serialNum=" + serialNum + ", name="
				+ name + ", magazine=" + magazine + "]";
	}
	/*
	 * Gets/Sets
	 */

	public float getCaliber() {
		return caliber;
	}

	public void setCaliber(float caliber) {
		this.caliber = caliber;
	}

	public Manufacturer getManufacturer() {
		return manufacturer;
	}

	public void setManufacturer(Manufacturer manufacturer) {
		this.manufacturer = manufacturer;
	}

	public int getSerialNum() {
		return serialNum;
	}

	public void setSerialNum(int serialNum) {
		this.serialNum = serialNum;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Magazine getMagazine() {
		return magazine;
	}

	public void setMagazine(Magazine magazine) {
		this.magazine = magazine;
	}
	
}
