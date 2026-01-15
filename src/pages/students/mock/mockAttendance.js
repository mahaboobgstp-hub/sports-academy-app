const generateMockAttendance = () => {
  const data = [];

  for (let i = 1; i <= 90; i++) {
    let status = "none";

    if (i <= 20) {
      if (i <= 16) status = "present";       // 80%
      else if (i === 17) status = "absent";
      else if (i === 18) status = "holiday";
      else if (i === 19) status = "present";
      else status = "cancelled";
    }

    data.push({ day: i, status });
  }

  return data;
};

