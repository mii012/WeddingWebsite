var fs = require("fs");
var data = fs.readFileSync("models/guests.json");

let guests;
if (data.length > 0) {
  guests = JSON.parse(data);
} else {
  guests = [];
}

const createGuest = (data) => {
  try {
    const today = new Date();
    let { id, date, firstName, surname, arrival, personCount } = data.body;

    let guest = {
      id: guests.length ? guests[guests.length - 1].id + 1 : 0,
      date: today.toISOString(),
      firstName: firstName,
      surname: surname,
      arrival: arrival,
      personCount: personCount,
    };

    if (firstName.length == 0 || surname.length == 0 || arrival.length == 0) {
      return {
        status: 400,
        data: "Informationen unvollständig. Bitte nachprüfen!",
      };
    }

    guests.push(guest);
    fs.writeFileSync("models/guests.json", JSON.stringify(guests, null, 2));
    return { status: 201, data: guest };
  } catch (err) {
    return { status: 404, data: err };
  }
};

module.exports = {
  createGuest,
};
