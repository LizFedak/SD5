import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.*;

import java.util.List;

@Entity("class")
public class StudentRecord {
    @Id
    private ObjectId id;
    private String name;
    @Embedded
    private List<Score> scores;

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Score> getScores() {
        return scores;
    }

    public void setScores(List<Score> scores) {
        this.scores = scores;
    }

    @Override
    public String toString() {
        return "StudentRecord{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", scores=" + scores +
                '}';
    }
}
