const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  // 1. If value is an empty string, delete the given prop property from the album.
  if (value === "") {
    delete records[id][prop];
  } 
  // 2. If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
  else if (prop !== "tracks") {
    records[id][prop] = value;
  } 
  // 3. If prop is tracks and value isn't empty
  else if (prop === "tracks") {
    // If the album doesn't have a tracks property, create an empty array first
    if (!records[id].hasOwnProperty("tracks")) {
      records[id].tracks = [];
    }
    // Add value to the end of the album's tracks array.
    records[id].tracks.push(value);
  }

  // Always return the entire records object.
  return records;
}