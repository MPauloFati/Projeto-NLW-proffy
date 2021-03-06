const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
  proffyValue = {
    name: "Marcos Paulo",
    avatar: "https://github.https://avatars1.githubusercontent.com/u/68435259?s=460&u=5dbc7a7eac38803d83b5a37b1179baeabe358762&v=4/diego3g.png", 
    whatsapp: "940028922", 
    bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
  }

  classValue = {
    subject: 1, 
    cost: "20", 

  }

  classScheduleValues = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]



const selectecProffys = await db.all("SELECT * FROM proffys")


const selectClassesAndProffys = await db.all(`
    SELECT classes. *, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
`)

const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "520"
`)


}) 
