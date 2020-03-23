async function materialsInfo() {
  console.log("MAKING POST REQUEST")

  materialstext = document.getElementById('the_input').value
  const info = {
    unit: materialstext,
    status: "OK"
  }

  const options = {
    method: "POST",
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

async function energyInfo() {
  console.log("MAKING POST REQUEST")

  energytext = document.getElementById('second_input').value
  const info = {
    unit: energytext,
    status: "OK"
  }

  const options = {
    method: "POST",
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

async function requestScope() {
  console.log("MAKING POST REQUEST")

  scopetext = document.getElementById('scope_input').value
  const info = {
    unit: scopetext,
    status: "OK"
  }

  const options = {
    method: "POST",
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

async function requestSupplyChain() {
  console.log("MAKING POST REQUEST")

  supplyText = document.getElementById('supply_input').value
  const info = {
    unit: supplyText,
    status: "OK"
  }

  const options = {
    method: "POST",
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


// client side of the get request
async function requestInfo() {
  console.log("making get request")
  
  fetch('/api/v1/todos')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      function makeItem(unitItem) {
        return (
          `<div>
            <p> unit: ${unitItem}</p>
          </div>`
        )
      }

      // <div key=${i} class="unit-data">
      //       <p> unit: ${unitItem.item}</p>
      //       <p> status: ${unitItem.status}</p>
      //     </div>`

      const items = []
      for (let i = 0; i < data.length; i++){
        // console.log(data[i])
        items.push(makeItem(data[i].unit))
        console.log(data[i]);
      }


      document.getElementById("information")
        .innerHTML = items.join(",")
    })


  // where I would insert makeItem function
  // $("#information").replaceWith(JSON.stringify(data));

}