async function materialsInfo(){
    console.log("MAKING POST REQUEST")
    
    materialstext = document.getElementById('the_input').value
    const info = {
        unit: materialstext,
        status: "OK"
    }

    const options = {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(info)
    }
    console.log(options);
    
    let newUser = await fetch("/api/v1/todos", options);

    newUser = await newUser.json();
  
    console.log(newUser);
}

async function energyInfo(){
  console.log("MAKING POST REQUEST")

  energytext = document.getElementById('second_input').value
  const info = {
      unit: energytext,
      status: "OK"
  }

  const options = {
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(info)
  }
  console.log(options);
  
  let newUser = await fetch("/api/v1/todos", options);

  newUser = await newUser.json();

  console.log(newUser);
}

async function requestInfo(){
  console.log("making get request")

  fetch('/api/v1/todos')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      $("#information").replaceWith(JSON.stringify(data));
    })
    
    // const options = {
    //   method:"GET"
    // }
    
    // let users = await fetch("/api/v1/todos", options);
    // users = await users.json();

}


//   postUser();