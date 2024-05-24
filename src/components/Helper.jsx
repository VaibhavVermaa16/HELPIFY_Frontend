import React, { useState, useEffect } from "react";
import "./service.css";

export const Service = () => {

  useEffect(() => {
    document.title = "Workers";
  }, []);


  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://helpifybackend-production.up.railway.app/api/users/all")
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="services-background">
        <div className="services-container">
          <h1 className="servicesTitle">CHOOSE YOUR HELPER</h1>
          <div className="service1">
            <h3>Caretakers</h3>
          </div>
          <div className="service1-card">
            {data.map((item) => (
              <div className="workerCard" key={item.id}>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/elderly-caregiving-4539217-3780109.png?f=webp" />
                <h5 className="text12">{item.fullName}</h5>
                <h5 className="text12">
                  Age:24 Sex:{item.gender}
                </h5>
                <h5 className="text12">Rating : 3.4</h5>
                <button>Hire Now</button>
              </div>
            ))}
          </div>
          <div className="service1">
            <h3>Farm Helpers</h3>
          </div>
          <div className="service1-card">
            <div className="workerCard">
              <img src="https://media.istockphoto.com/id/1324372723/vector/farmer-people-in-farm-village-agriculture-work-workers-holding-pitchfork-standing.jpg?s=612x612&w=0&k=20&c=B8fGJUvMFzLyDekEIbP4YeSeKc_jRz6gsWTvgajmBVs=" />
              <h5 className="text12">John Smith</h5>
              <h5 className="text12">Age:27 Sex:Male</h5>
              <h5 className="text12">Rating : 4.3</h5>
              <button>Hire Now</button>
            </div>
            <div className="workerCard">
              <img src="https://media.istockphoto.com/id/1324372723/vector/farmer-people-in-farm-village-agriculture-work-workers-holding-pitchfork-standing.jpg?s=612x612&w=0&k=20&c=B8fGJUvMFzLyDekEIbP4YeSeKc_jRz6gsWTvgajmBVs=" />
              <h5 className="text12">Praveen Singh</h5>
              <h5 className="text12">Age:22 Sex:Male</h5>
              <h5 className="text12">Rating : 2.9</h5>
              <button>Hire Now</button>
            </div>
            <div className="workerCard">
              <img src="https://media.istockphoto.com/id/1324372723/vector/farmer-people-in-farm-village-agriculture-work-workers-holding-pitchfork-standing.jpg?s=612x612&w=0&k=20&c=B8fGJUvMFzLyDekEIbP4YeSeKc_jRz6gsWTvgajmBVs=" />
              <h5 className="text12">Rahul Reddy</h5>
              <h5 className="text12">Age:23 Sex:Male</h5>
              <h5 className="text12">Rating : 3.7</h5>
              <button>Hire Now</button>
            </div>
            <div className="workerCard">
              <img src="https://media.istockphoto.com/id/1324372723/vector/farmer-people-in-farm-village-agriculture-work-workers-holding-pitchfork-standing.jpg?s=612x612&w=0&k=20&c=B8fGJUvMFzLyDekEIbP4YeSeKc_jRz6gsWTvgajmBVs=" />
              <h5 className="text12">Nikita Kumari</h5>
              <h5 className="text12">Age:25 Sex:Female</h5>
              <h5 className="text12">Rating : 4.1</h5>
              <button>Hire Now</button>
            </div>
          </div>
          <div className="service1">
            <h3>Utility Provider</h3>
          </div>
          <div className="service1-card">
            <div className="workerCard">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGXJlQRVF3B4hXfquvbMaSgC_N2bmPa97FPg&usqp=CAU" />
              <h5 className="text12">Kishan lal</h5>
              <h5 className="text12">Age:28 Sex:Male</h5>
              <h5 className="text12">Rating : 3.9</h5>
              <button>Hire Now</button>
            </div>
            <div className="workerCard">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGXJlQRVF3B4hXfquvbMaSgC_N2bmPa97FPg&usqp=CAU" />
              <h5 className="text12">Seema Jangid</h5>
              <h5 className="text12">Age:29 Sex:Female</h5>
              <h5 className="text12">Rating : 3.4</h5>
              <button>Hire Now</button>
            </div>
            <div className="workerCard">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGXJlQRVF3B4hXfquvbMaSgC_N2bmPa97FPg&usqp=CAU" />
              <h5 className="text12">Manish Kumar</h5>
              <h5 className="text12">Age:20 Sex:Male</h5>
              <h5 className="text12">Rating : 3.4</h5>
              <button>Hire Now</button>
            </div>
            <div className="workerCard">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGXJlQRVF3B4hXfquvbMaSgC_N2bmPa97FPg&usqp=CAU" />
              <h5 className="text12">Kunti seervi</h5>
              <h5 className="text12">Age:28 Sex:Female</h5>
              <h5 className="text12">Rating : 4.8</h5>
              <button>Hire Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
