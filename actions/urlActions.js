export const urlCreate = (data) => async (dispatch, getState) => {
  const { linkId, short } = data;

  const response = await fetch("/api/shortlinks", {
    
    //we need to add this since its a post req
    method: "POST",
    body: JSON.stringify({ linkId, short }),
    //header to show we sending a json file
    headers: {
      "Content-Type": "application/json",
    },
  });

  const success = await response.json();

  console.log(success);
  //we stored in database and also used redux to manage state to store in localstorage
  //because we want to automatically fetch the data  from localstorage
  //and display to user. We want him/her to see only links he created, thats why we
  // used localstorage to show to user links created and not fetching from database.

  dispatch({
    type: "Add To List",
    payload: {
      linkId,
      url: short,
    },
  });

  localStorage.setItem("urlItems", JSON.stringify(getState().url.urlItems));
};

//we willl use this solely for mongodb

// export const getLink = (linkId) => async (dispatch, getState) => {

//   const response = await fetch(`http://localhost:3000/api/shortlinks/${linkId}`);
//   const data = await response.json();

//   console.log(data);

  

//   dispatch({ type: "Get Link", payload: { data } });
// };

// export const urlFetch = (linkId) => async (dispatch, getState) => {
//   const items = getState().url.urlItems;
//   const itemExist = items.find((i) => i.id === linkId.linkId);

//   dispatch({ type: "Get List", payload: { itemExist } });

  
// };

//   export const removeItemCart = (id) => async (dispatch ,getState) => {

//     console.log(id)

//    dispatch({
//        type: 'DELETE',
//        payload: id
//    })

//    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

//    const we = JSON.stringify(getState().cart.cartItems)

//    console.log(we)
// }
