db.students.find().forEach(function(doc) {
  if (doc.name) {
    const nameParts = doc.name.split(" ");
    const first = nameParts[0];
    const last = nameParts.slice(1).join(" ");
    db.students.updateOne(
      { _id: doc._id },
      {
        $unset: { name: "" },
        $set: { first_name: first, last_name: last }
      }
    );
  }
});
