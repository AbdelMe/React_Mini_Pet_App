import React from 'react'
import Sidebar from '../../Home';

export default function PetAdvice() {
  const adviceList = [
    {
      title: "Provide Fresh Water",
      description: "Always make sure your pet has access to fresh, clean water to stay hydrated. Dehydration can lead to serious health problems."
    },
    {
      title: "Regular Exercise",
      description: "Exercise is important for your pet's health. Take your dog for daily walks or engage in interactive play to keep them active and fit."
    },
    {
      title: "Balanced Diet",
      description: "Feed your pet a balanced, nutritious diet based on their age, size, and health needs. Consult your vet for the best food choices."
    },
    {
      title: "Routine Vet Check-ups",
      description: "Regular check-ups with a veterinarian ensure your pet stays healthy and can help catch any health issues early."
    },
    {
      title: "Hygiene and Grooming",
      description: "Regular grooming and hygiene practices, such as brushing their fur, trimming nails, and cleaning ears, can prevent infections and discomfort."
    },
    {
      title: "Safe Environment",
      description: "Make sure your pet's living space is safe and comfortable. Avoid exposing them to harmful chemicals or hazardous objects."
    }
  ];

  return (
    <Sidebar>
    <div className="container">
      <div className="text-center mb-4">
        <p className="text-success fw-bold">PET CARE ADVICE</p>
        <h2 className="fw-bold">Helpful Tips for a Healthy Pet</h2>
      </div>

      <div className="row">
        {adviceList.map((advice, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-success">{advice.title}</h5>
                <p className="card-text">{advice.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Sidebar>
  );
}

