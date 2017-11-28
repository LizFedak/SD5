import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.MongoException;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import static com.mongodb.client.model.Projections.*;
import static com.mongodb.client.model.Filters.*;

public class MongoTest {
    public static void main(String[] args) {
        final String DB_ADDRESS = "mongodb://localhost:27017";
        MongoClientURI dbURL = new MongoClientURI(DB_ADDRESS);
        MongoClient mongoClient = new MongoClient(dbURL);
        MongoDatabase db = mongoClient.getDatabase("test");

        MongoCollection<Document> collection = null;

        try {
            collection = db.getCollection("students");
        } catch (MongoException e){
            System.err.println(e.getStackTrace());
        }

//  1: Find All
        if (collection != null) {
            try {
                MongoCursor<Document> cursor = collection.find().iterator();
//  UNCOMMENT TO PRINT ALL RECORDS
//                while (cursor.hasNext()) {
//                    System.out.println(cursor.next().toJson());
//                }
            } catch (MongoException e) {
                System.err.println(e.getStackTrace());
            }
        }

//  2a: Find with Query (using a Document)
        if (collection != null) {
            try {
//  UNCOMMENT TO PRINT A SINGLE RECORD
                Document doc = collection.find(
                        new Document("name", "Echo Pippins")).first();
//                System.out.println(doc.toJson());
            } catch (MongoException e) {
                System.err.println(e.getStackTrace());
            }
        }

        //  2b: Find with Query (using a Document)... complex
        if (collection != null) {
            try {
//  UNCOMMENT TO PRINT A SINGLE RECORD
                Document doc = collection.find(
                        new Document("scores",
                                new Document("$elemMatch",
                                        new Document("type", "quiz")))).first();
//                System.out.println(doc.toJson());
            } catch (MongoException e) {
                System.err.println(e.getStackTrace());
            }
        }

//  2c: Find with Query with a Query Filter (using eq)
// (import static com.mongodb.client.model.Filters.*;)
// https://docs.mongodb.com/getting-started/java/query/
        if (collection != null) {
            try {
//  UNCOMMENT TO PRINT A SINGLE RECORD
                Document doc = collection.find(
                        eq("name", "Echo Pippins")).first();
//                System.out.println(doc.toJson());
            } catch (MongoException e) {
                System.err.println(e.getStackTrace());
            }
        }

        if (collection != null) {
            try {
//  UNCOMMENT TO PRINT A SINGLE RECORD
                Document doc = collection.find(
                        eq("name", "Echo Pippins")).first();
//                System.out.println(doc.toJson());
            } catch (MongoException e) {
                System.err.println(e.getStackTrace());
            }
        }

//  3: Find with Query and Project -->
// uses the projection library
// (import static com.mongodb.client.model.Projections.*;)
//     http://mongodb.github.io/mongo-java-driver/3.2/builders/projections/
        if (collection != null) {
            try {
//  UNCOMMENT TO PRINT ONLY SCORES
                Document doc = collection.find(eq("name", "Echo Pippins"))
                        .projection(fields(
                                exclude("_id"),include("scores"))).first();
//  UNCOMMENT TO PRINT A SINGLE RECORD'S SCORES
                System.out.println(doc.toJson());
            } catch (MongoException e) {
                System.err.println(e.getStackTrace());
            }
        }
    }
}
