import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;
import org.mongodb.morphia.query.Query;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Kane on 6/16/16.
 */
public class MorphiaTest {

    public static void main(String[] args) {

        final Morphia morphia = new Morphia();


// tell Morphia where to find your classes
// can be called multiple times with different packages or classes


        morphia.mapPackage("main.java");

        // create the Datastore connecting to the default port on the local host



        final Datastore datastore = morphia.createDatastore(
                new MongoClient(
                        new MongoClientURI("mongodb://localhost:27017")), "test");
        datastore.ensureIndexes();




// Create Query for the 'students' collection
        Query<StudentRecord> query = datastore.createQuery(StudentRecord.class);

// Find All As List :
        System.out.println(query.asList());

// Find One By Name : Execute query --> note, query is not executed until '.get()' is called
        System.out.println(query.field("name").equal("Bob Dobbs").get());

// Create with Morphia
        // Begin creating new entity
        StudentRecord myRec = new StudentRecord();

        myRec.setName("Bob Dobbs");

        List<Score> scores = new ArrayList<Score>();
        Score score = new Score();
        score.setScore(89.2D);
        score.setType("Morphia");
        scores.add(score);

        myRec.setScores(scores);
        // End creating new entity

        // Persist entity with Morphia
        datastore.save(myRec);




        // MAKE MORE DATA!
//        myRec.setName("OTHER");
//        datastore.save(myRec);
    }
}
