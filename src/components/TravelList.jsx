import React from "react";

function TravelList({ plans }) {
  return (
    <div>
      {plans.map((plan) => (
        <div key={plan.id}>
          <h2>{plan.destination}</h2>
          <img src={plan.image} alt={plan.destination} />
          <p>{plan.description}</p>
          <p>Days: {plan.days}</p>
          <p>Total Cost: ${plan.totalCost}</p>
          <ul>
            {plan.parts.map((part, index) => (
              <li key={index}>
                <h4>{part.name}</h4>
                <p>{part.description}</p>
                <p>Cost: ${part.cost}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
