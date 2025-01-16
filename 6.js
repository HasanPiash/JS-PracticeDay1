const friends=["rahim","karim","abdul","sadsd","heroAlom"];
const lngstName=friends.reduce((longest,current)=>current.length > longest.length ? current : longest, "");
console.log(lngstName);
