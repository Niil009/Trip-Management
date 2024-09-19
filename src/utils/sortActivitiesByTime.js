const sortActivitiesByTime = (activities) => {
    return activities.sort((a, b) => {
      const timeA = new Date(`1970-01-01T${a.time}:00`);
      const timeB = new Date(`1970-01-01T${b.time}:00`);
      return timeA - timeB;
    });
  };
  
  export default sortActivitiesByTime