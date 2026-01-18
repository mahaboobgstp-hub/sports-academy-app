export function calculateSummary(employees) {
  let present = 0,
    absent = 0,
    holiday = 0;

  employees.forEach((e) => {
    Object.values(e.attendance).forEach((s) => {
      if (s === "present") present++;
      if (s === "absent") absent++;
      if (s === "holiday") holiday++;
    });
  });

  return { present, absent, holiday };
}
