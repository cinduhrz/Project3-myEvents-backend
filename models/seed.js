const mongoose = require("./connection");
const Event = require('./event')

mongoose.connection.on("open", () => { 
  const starterEvents = [
    {
      title: "End of SEIR-920 Cohort Party",
      url: "https://zoom.us/",
      dateTime: "2023-04-01 04:30:00.001",
      description: "Celebratory party for completing the Sofware Engineering course at GE",
      username: "Alexei"
    },
    {
      title: "Project #3: MERN Stack - Group Project",
      url: "https://turmeric.seircohort.com/unit-projects/unit-three-project-requirements",
      dateTime: "2023-01-28 11:00:00.001",
      description: "For this project, you will be making another full CRUD app using the technologies outlined below. When thinking of an app idea, try to frame the project in terms of trying to solve a problem and think about the purpose of the app, who would use it, etc. The problem doesn't have to be anything intense and can be something small and simple! ",
      username: "Cindy"
    },
    {
      title: "Unit Four - tumeric seircohort",
      url: "https://turmeric.seircohort.com/",
      dateTime: "2023-01-31 06:30:00.001",
      description: "Alex's Birthday Party celebration",
      username: "Rene"
    },
  ]
Event.deleteMany({}, (err, data)=>{
  Event.create(starterEvents, (err, events)=>{
    console.log("created + " + events);

    mongoose.connection.close();
  });
});
});