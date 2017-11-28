package come.kane;

public class GunTest {
	public static void main(String[] args) {
		GunSafe safe = new GunSafe();
		
		Gun[] guns = new Gun[2];
		
		Gun ar15 = new Gun();
		Gun p229 = new Gun(9,Manufacturer.SIG, 1818181, "P229", new Magazine(12,12));
		
		guns[0] = ar15;
		guns[1] = p229;
		
		safe.setGuns(guns);
		safe.showGuns();
		Gun m1911 = new Gun(45, Manufacturer.SIG, 12937, "1911", new Magazine(8,8));
		safe.addGun(m1911);
		System.out.println();
		safe.showGuns();
		
//		System.out.println(ar15);
//		System.out.println(p229);
		
	}
}










