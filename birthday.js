const TARGET_AGE_YEARS = 14;

const isUserOver14YearsOld = (birthday) => {
  const currentDate = new Date();
  const year14ago = currentDate.getFullYear() - TARGET_AGE_YEARS;
  const date14YearsAgo = new Date(
    year14ago,
    currentDate.getMonth(),
    currentDate.getDay()
  );

  console.log(new Date(birthday) < date14YearsAgo);
};

isUserOver14YearsOld('2010-3-31');
