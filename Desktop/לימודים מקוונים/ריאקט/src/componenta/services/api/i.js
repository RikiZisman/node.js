import axios from 'axios';
// קובץ זה מכיל את כל קריאות השרת עבור קטגוריות

// שליפה של כל הרשימה
export const getMeetings = () => {
    return axios.get(`http://localhost:3000/meeting/?business_id=123`);
}

//שליפה של כל הפגישות ממוינות לפי תאריך

export const sortByDate = async () => {
    try {
        const response = await axios.get('http://localhost:3000/meeting/?business_id=123');
        
        const sortedObjects = response.data.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });

        return sortedObjects;
    } catch (error) {
        console.error('Error sorting meetings by date:', error);
        return []; 
    }
};


// מחיקה
export const deleteMeeting = (id) => {
    console.log("lllll");
    return axios.delete(`http://localhost:3000/meeting/${id}`);
}
// עדכון
export const updateMeeting = (id, categoryName) => {
    return axios.put(`http://localhost:3000/categories/${id}`, {
        categoryName,
    });
}
// יצירה
export const createCategory = (categoryName) => {
    return axios.post(`http://localhost:3000/categories`, {
        categoryName,
    });
    
}