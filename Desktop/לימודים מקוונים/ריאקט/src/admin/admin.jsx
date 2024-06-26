import React from "react";
import { useState, useContext, useEffect } from "react";
import { ManagerContext } from '../context/manager.context.jsx'
import { deleteMeeting, getMeetings, sortByDate } from "./../componenta/services/api/i.js";
// import {Connect} from 'connectAdmin.jsx'
// import {getService} from "./services/api/api.js";



export const Admin = () => {
  const [data, setData] = useState([]);

  const manager = useContext(ManagerContext)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMeetings();
        const { data } = response;
        setData(data);
        data.forEach(meeting => {
          const meetingItem = document.createElement("p");
          meetingItem.textContent = `Name: ${meeting.name},startTime :${meeting.startTime}`;
          meetingListElement.appendChild(meetingItem);
        });
      } catch (error) {
        console.log("error fetching meetings", error);
      }
    };

    if (manager[0]) {
      fetchData();
    }
  }, [manager]);

  //   const allMeeting = async() => {
  //     console.log("i am here");
  //     const a = await getMeetings();

  //     const meetingListElement = document.getElementById("meetingList");

  //     meetingListElement.innerHTML = "";

  //     a.data.forEach(meeting => {
  //         const meetingItem = document.createElement("p");
  //         meetingItem.textContent = `Name: ${meeting.name},startTime :${meeting.startTime}`;
  //         meetingListElement.appendChild(meetingItem);
  //     });
  // };

  const SortByDate = async () => {
    console.log("i am here");
    const a = await sortByDate();

    const meetingListElement = document.getElementById("meetingList");

    meetingListElement.innerHTML = "";

    a.data.forEach(meeting => {
      const meetingItem = document.createElement("p");
      meetingItem.textContent = `Name: ${meeting.name},startTime :${meeting.startTime}`;
      meetingListElement.appendChild(meetingItem);
    });
  };


  const deletemeeting = (event) => {
    console.log("מוות לסינאוור");
    const id = event.targets.value;
    console.log(id);
    deleteMeeting(id);
  };

  // const update = async(Name,category) => {
  //     console.log("מוות לסינאוור");
  //     const a =await updateMeeting(Name,category);
  // };
  const ma = () => {
    manager[0] = "h";
  }
  return <div>
    {
      manager[0] && <div>
        {data.map((e) => (
          <div key={e.id}>
            {e.location} | {e.name} | {e.date} | {e.startTime})} ;
            <h1>לעזאזל!</h1>
            <h2>שיוווו זה עובדדדד</h2>

            {/* getService(); */}
            <div id="meetingList"></div>

            <p>השרותים שהוא מספק (לדוג': פגישת יעוץ, הרצאה, סדרת מפגשים). לכל סוג שרות יש תאור, מחיר, ומשך הזמן שהוא לוקח.</p>

            <div>
              <button onClick={ma}>for all meetings</button>
            </div>
            <br />
            <br />
            <div>
              <button onClick={SortByDate}>לכל הפגישות ממוינות לפי תאריך</button>
            </div>


            <div>
              <form onSubmit={deletemeeting}>
                <div>
                  <label htmlFor="name">Enter a name for the delete meeting</label>
                  <input type="text" id="name" />
                </div>
                <button type="submit">למחיקת פגישה</button>
              </form>
            </div></div>
      }
        {!manager[0] && <h1>אתה לא מנהל</h1>}



        {/* <div>
        <form onSubmit={update(Name,category)}>
        <div>
          <label htmlFor="Name">תכתבו את השם של האיש של הפגישה הרצויה</label>
          <input type="text" id="Name" />
        </div>
        <div>
          <label htmlFor="category">הכנס את הקטגוריה הרצויה לשינוי</label>
          <input type="text" id="category" />
        </div>
        <button type="submit"> לשינוי הפגישה</button>
      </form>
      </div> */}
        {/* <Service></Service> */}
      </div>
    }

