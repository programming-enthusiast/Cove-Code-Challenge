export const API_URL = "https://cove-coding-challenge-api.herokuapp.com/reservations"

export const ROOM_LIST = [
  {
    "id":"401662b9-b110-4159-a4f2-ebd955f3b1f4",
    "name":"Room A",
    "imageUrl":"https://staging.cove.is/parse/files/hRKEvW2lN74k5nCg6p2XtmiWRNHycE2pHpXpELMX/f96efd3f11aadb34135bb1f0aecf9667_Quincy%20Room.jpg"
  },
  {
    "id": "70866847-3a55-407e-9973-841ac4c16a29",
    "name":"Room B",
    "imageUrl":"https://staging.cove.is/parse/files/hRKEvW2lN74k5nCg6p2XtmiWRNHycE2pHpXpELMX/d0d19da4aa88734291279f5fe7a836e7_Wakefield%20Room.jpg"
  },
]

export function getRoomName(roomId) {
  for (let i = 0; i < ROOM_LIST.length; i++) {
    if (roomId === ROOM_LIST[i].id) 
      return ROOM_LIST[i].name
  }
}