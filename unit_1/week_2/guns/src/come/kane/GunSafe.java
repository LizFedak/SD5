package come.kane;

public class GunSafe {
	private Gun[] guns;
	
	public GunSafe(Gun[] guns){
		super();
		this.guns = guns;
	}
	
	public GunSafe() {
		this(null);
	}
	
	/*
	 * Methods
	 */
	
	public void addGun(Gun gun) {
		Gun[] newGuns = new Gun[this.guns.length + 1];
		for (int i = 0 ; i < guns.length ; i++) {
			newGuns[i] = guns[i];
		}
		newGuns[newGuns.length-1] = gun;
		this.guns = newGuns;
	}
	
	public void removeGunByIndex(int index){}
	
	public void removeGun(Gun gun){}
	
	public void showGuns() {
		for (Gun g : this.guns) {
			System.out.println(g.toString());
		}
	}
	
	/*
	 * Gets/Sets
	 */

	public Gun[] getGuns() {
		return guns;
	}

	public void setGuns(Gun[] guns) {
		this.guns = guns;
	}
	
	
	
}
