import { CustomFilter, Hero, SearchBar, CarCard } from "@/components";
import { fetchCars } from "@/utils";
import React from "react";

const Home = async () => {
  // const allCars = await fetchCars();

  // console.log(allCars);
  const isDataEmpty = false;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car catalog</h1>
          <p>Lorem ipsum dolor sit</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            We have cars
            <div className="home__cars-wrapper">
              {[1, 2, 3, 4].map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl">Opps, no result</h2>
            <p>Message here</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
