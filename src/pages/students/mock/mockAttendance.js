const startDate = new Date("2026-01-01");

const formatDate = (date) =>
  date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const generateMockAttendance = () => {
  const data = [];

  for (let i = 1; i <= 90; i++) {
    let status = "none";

    if (i <= 20) {
      if (i <= 16) status = "present";
      else if (i === 17) status = "absent";
      else if (i === 18) status = "holiday";
      else if (i === 19) status = "present";
      else status = "cancelled";
    }

    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);


     data.push({
      day: i + 1,
      status,
      date: formatDate(currentDate), // 👈 dd-MMM-yyyy
    });

  }

  return data;
};

export default generateMockAttendance;  
