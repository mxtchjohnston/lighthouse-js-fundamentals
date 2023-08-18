// Name, Capacity, Venue
// Expected: false, true, true
const testStations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const _name = 0
const _capa = 1
const _type = 2

const chooseStations = function (stations) {
  const passedStations = [];

  for (const station of stations){
    if (station[_capa] >= 20 && (station[_type] == "school" || (station[_type] == "community centre"))) {
      passedStations.push(station[_name]);
    }
  }

  return passedStations
};

console.log(chooseStations(testStations));