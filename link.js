function result(sessions) {
  // Your Code Here
  let result = {};

  for (let i = 0; i < sessions.length; i++) {
    if (!result[sessions[i].session_id]) {
      result[sessions[i].session_id] = {
        session_id: sessions[i].session_id,
        time: sessions[i].time,
        classes: [
          {
            class_id: sessions[i].class_id,
            name: sessions[i].name,
            students: [sessions[i].student],
          },
        ],
      };
    }
    // else {
    //     result[sessions[i].session_id].classes.push(sessions[i].class)
    // }
  }
  return result[1];
}

function getFilterData(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i].session_id]) {
      obj[arr[i].session_id] = {
        session_id: arr[i].session_id,
        time: arr[i].time,
        classes: [
          {
            class_id: arr[i].class.class_id,
            name: arr[i].class.name,
            students: [arr[i].student],
          },
        ],
      };
    } else {
      let status = false;
      for (let c = 0; c < obj[arr[i].session_id].classes.length; c++) {
        if (
          obj[arr[i].session_id].classes[c].class_id == arr[i].class.class_id
        ) {
          status = true;
        }
      }
      if (!status) {
        obj[arr[i].session_id].classes.push(arr[i].class);
      }

      for (let n = 0; n < obj[arr[i].session_id].classes.length; n++) {
        if (
          obj[arr[i].session_id].classes[n].class_id == arr[i].class.class_id
        ) {
          if (!obj[arr[i].session_id].classes[n].students) {
            obj[arr[i].session_id].classes[n]["students"] = [arr[i].student];
          } else {
            obj[arr[i].session_id].classes[n].students.push(arr[i].student);
          }
        }
      }
    }
  }
  let result = [];
  for (let x in obj) {
    result.push(obj[x]);
  }
  return result[1];
}

const sessions = [
  {
    session_id: 1,
    time: "09:00",
    student: { student_id: 1, name: "Adi" },
    class: { class_id: 1, name: "A" },
  },
  {
    session_id: 2,
    time: "10:00",
    student: { student_id: 5, name: "Surya" },
    class: { class_id: 3, name: "C" },
  },
  {
    session_id: 2,
    time: "10:00",
    student: { student_id: 8, name: "Edi" },
    class: { class_id: 4, name: "D" },
  },
  {
    session_id: 2,
    time: "10:00",
    student: { student_id: 7, name: "Dede" },
    class: { class_id: 4, name: "D" },
  },
  {
    session_id: 1,
    time: "09:00",
    student: { student_id: 3, name: "Bayu" },
    class: { class_id: 2, name: "B" },
  },
  {
    session_id: 1,
    time: "09:00",
    student: { student_id: 2, name: "Budi" },
    class: { class_id: 1, name: "A" },
  },
  {
    session_id: 1,
    time: "09:00",
    student: { student_id: 4, name: "Dharma" },
    class: { class_id: 2, name: "B" },
  },
  {
    session_id: 2,
    time: "10:00",
    student: { student_id: 3, name: "Maha" },
    class: { class_id: 3, name: "C" },
  },
];
console.log(getFilterData(sessions));
