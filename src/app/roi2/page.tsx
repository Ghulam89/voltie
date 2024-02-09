"use client";
import React, { useState } from "react";

const EVChargingCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    chargingPrice: 0.3,
    chargerWeekHour: 20,
    numberOfChargers: 1,
    numberOfParkingSpots: 20,
  });

  const [annualRevenue, setAnnualRevenue] = useState<number>(0);
  const [annualCO2Impact, setAnnualCO2Impact] = useState<number>(0);
  const [parkingSpot, setParkingSpot] = useState<number>(0);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseFloat(value) });
  };

  const calculateRevenue = () => {
    const revenueCharger =
      formData.chargingPrice *
      formData.chargerWeekHour *
      52 *
      formData.numberOfChargers;

    setAnnualRevenue(revenueCharger);
    const averageCO2EmissionsGasolineCar = 2.2; // in kg of CO2 per liter of gasoline
    const averageCO2EmissionsEV = 0.2; // in kg of CO2 per kWh

    // Estimated annual miles driven by EVs per charger
    const milesDrivenByEVsPerChargerPerDay = formData.chargerWeekHour * 7 * 52; // Assumes chargers are used every day of the week

    const annualCO2Impact =
      (averageCO2EmissionsGasolineCar - averageCO2EmissionsEV) *
      milesDrivenByEVsPerChargerPerDay *
      formData.numberOfChargers;

    setAnnualCO2Impact(annualCO2Impact);
  };

  const resetForm = () => {
    setFormData({
      chargingPrice: 0,
      chargerWeekHour: 0,
      numberOfChargers: 0,
      numberOfParkingSpots: 0,
    });

    setAnnualRevenue(0);
    setAnnualCO2Impact(0);
  };

  return (
    <div className="flex justify-center items-center bg-black pb-[50px]">
        
      <section className="min-h-[50rem] w-full md:w-[60%] bg-opacity-90 bg-gray-800 rounded-lg shadow-lg dark:bg-dark-panel border border-blue-900">
        <div className="w-[100%] h-full lg:gap-x-8 p-2 md:p-5 ">
          <div className="px-[5%] text-white flex flex-col gap-y-8 h-full ">
            <div className="flex flex-col gap-y-2 ">
              <h1 className="text-3xl font-semibold text-white">
                EV Charging Calculator
              </h1>

              <div className="items-center justify-center	space-y-4 sm:flex sm:space-y-0 sm:space-x-4 pt-4">
                <p className="font-semibold	text-2xl pr-4">My Property has</p>
                <input
                  type="number"
                  name="chargingPrice"
                  value={parkingSpot}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setParkingSpot(parseInt(e.target.value))
                  }
                  className="border-2 border-blue-500 focus:outline-blue-500 h-12 w-24 font-bold text-2xl pl-6 bg-gray-600 text-white focus:ring-orange-600 focus:border-orange-600"
                  placeholder="5"
                />
                <p className="font-semibold	text-2xl pl-4">Parking spots</p>
              </div>

              <section className="shadow-lg">
                <div className="items-center justify-around	space-y-4 sm:flex sm:space-y-0 sm:space-x-4 pt-4">
                  <div
                    className={`w-full sm:w-auto ${
                      parkingSpot > 0
                        ? "bg-gray-600 hover:bg-gray-700"
                        : "bg-gray-500 hover:bg-gray-400"
                    }  focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700`}
                  >
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40px"
                      height="40px"
                      viewBox="0 0 128 128"
                      enable-background="new 0 0 128 128"
                    >
                      <path
                        fill="#FFA000"
                        d="M68,8v8.086c3.445,0.105,7.352,0.738,11.82,2.039c4.859,1.418,8.887,3.762,12.078,7.031
	c3.18,3.277,4.781,6.66,4.781,10.152c0,3.145-1.152,5.816-3.465,8.027c-2.32,2.211-5.027,3.316-8.113,3.316
	c-2.777,0-5.113-0.828-7.023-2.496c-1.898-1.656-2.844-3.73-2.844-6.223c0-1.59,0.805-3.563,2.422-5.918
	c1.469-2.082,2.199-3.566,2.199-4.453c0-1.332-1.074-2.598-3.215-3.793c-1.973-1.098-4.922-1.664-8.641-1.836v33.535
	c11.031,4.188,18.809,8.133,23.203,11.82C97.063,72.285,100,78.082,100,84.672c0,6.984-2.867,12.977-8.605,17.973
	c-5.555,4.844-13.387,7.879-23.395,9.191V120h-8v-8h-0.977c-8.805,0-16.172-1.898-22.109-5.707C30.969,102.492,28,97.496,28,91.301
	c0-3.625,1.16-6.52,3.473-8.691c2.309-2.164,5.191-3.246,8.637-3.246c3.289,0,5.969,0.891,8.035,2.684
	c2.059,1.793,3.086,4.105,3.086,6.934c0,3.762-1.75,6.699-5.246,8.824c-1.348,0.793-2.156,1.371-2.438,1.727
	s-0.422,0.754-0.422,1.191c0,1.195,1.004,2.254,3.016,3.184c2.777,1.328,7.066,2.082,12.883,2.258L60,106.125V71.637l-0.977-0.313
	c-9.422-3.621-15.766-6.613-19.063-8.984c-3.297-2.359-5.879-5.289-7.758-8.785c-1.883-3.492-2.813-7.34-2.813-11.543
	c0-6.813,2.703-12.641,8.137-17.484S50.113,16.844,59.023,16H60V8H68 M60,52.453V21.957l-0.977,0.016
	c-5.094,0.488-9.172,2.074-12.234,4.754c-3.055,2.688-4.586,5.777-4.586,9.285c0,6.52,5.598,11.879,16.82,16.074L60,52.453
	 M68,105.609c5.121-0.711,9.379-2.313,12.594-4.988c3.41-2.848,5.133-6,5.133-9.453c0-3.141-1.195-5.977-3.586-8.527
	C79.859,80.215,75.09,77.438,68,74.336V105.609 M76,0h-8h-8h-8v8v0.969c-7.824,1.621-14.461,4.832-19.797,9.586
	c-7.176,6.398-10.813,14.289-10.813,23.457c0,5.539,1.27,10.699,3.77,15.34c2.453,4.563,5.867,8.434,10.145,11.492
	c1.129,0.813,2.48,1.652,4.074,2.531c-5.16,0.16-9.77,2.016-13.379,5.398c-3.926,3.688-6,8.711-6,14.527
	c0,6.238,2.188,15.074,12.605,21.734c5.512,3.535,12.016,5.738,19.395,6.578V120v8h8h8h8v-8v-1.473
	c8.426-1.93,15.355-5.234,20.652-9.852C104.18,102.121,108,94.043,108,84.672c0-9.008-3.906-16.902-11.605-23.469
	c-2.602-2.184-6.016-4.363-10.309-6.574c4.746-0.23,9.098-2.121,12.648-5.5c3.891-3.723,5.945-8.5,5.945-13.82
	c0-5.617-2.367-10.91-7.039-15.723c-4.168-4.27-9.402-7.34-15.578-9.141C79.988,9.844,77.965,9.352,76,8.977V8V0L76,0z M76,94.012
	V87.82c0.141,0.125,0.242,0.227,0.313,0.301c1.246,1.328,1.414,2.285,1.414,3.047C77.727,91.992,77.145,92.949,76,94.012L76,94.012z
	"
                      />
                    </svg>
                    <div className="text-left p-2">
                      <div className="-mt-1 font-sans text-2xl font-bold">
                        {annualRevenue.toFixed(2)}
                      </div>
                      <div className="mb-1 text-xs">
                        Annual Charging Revenue
                      </div>
                    </div>
                  </div>
                  <div
                    className={`w-full  sm:w-auto ${
                      parkingSpot > 0
                        ? "bg-gray-600 hover:bg-gray-700"
                        : "bg-gray-500 hover:bg-gray-400"
                    } focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700`}
                  >
                    <svg
                      height="40px"
                      width="40px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 508 508"
                      xmlSpace="preserve"
                    >
                      <circle
                        style={{ fill: "#84DBFF" }}
                        cx={254}
                        cy={254}
                        r={254}
                      />
                      <path
                        style={{ fill: "#FFFFFF" }}
                        d="M408.4,217.6c2.4-4.8,3.6-10.4,3.6-16c0-21.2-17.2-38-38-38c-0.4,0-0.8,0-1.2,0
	c-10-37.6-44-65.2-84.8-65.2c-28.4,0-53.6,13.6-70,34.4c-9.6-5.2-20.4-8-32-8c-38,0-69.2,30.8-69.2,69.2c0,6,0.8,11.6,2,16.8
	c-34.8,6-61.6,36.8-61.6,73.6c0,41.2,33.6,74.8,74.8,74.8h243.6c41.2,0,74.8-33.6,74.8-74.8C450.4,255.6,433.2,230,408.4,217.6z"
                      />
                      <g>
                        <path
                          style={{ fill: "#324A5E" }}
                          d="M188.4,215.2c8.8,0,16,3.6,21.6,10.8l11.6-12.8c-9.2-10.4-20.4-15.6-34-15.6c-12,0-22.4,4-30.8,12.4
		c-8.4,8-12.4,18.4-12.4,30.4c0,12.4,4,22.4,12.4,30.4s18.8,12,31.2,12s23.6-5.2,33.2-15.6l-11.6-12c-5.6,7.2-13.2,10.8-22,10.8
		c-6.4,0-12.4-2.4-16.8-6.8c-4.8-4.8-6.8-10.8-6.8-18.4c0-7.6,2.4-13.6,7.2-18.4C175.6,217.2,181.6,215.2,188.4,215.2z"
                        />
                        <path
                          style={{ fill: "#324A5E" }}
                          d="M272.4,197.6c-12,0-22.4,4-30.8,12c-8.4,8-12.4,18.4-12.4,30.4s4,22.4,12.4,30.4s18.4,12,30.8,12
		s22.4-4,30.8-12s12.4-18.4,12.4-30.4s-4-22.4-12.4-30.4S284.8,197.6,272.4,197.6z M290,258.8c-4.8,5.2-10.4,7.6-17.2,7.6
		c-6.8,0-12.8-2.4-17.2-7.6c-4.8-5.2-7.2-11.2-7.2-18.8c0-7.2,2.4-13.6,7.2-18.8c4.8-5.2,10.4-7.6,17.2-7.6c6.8,0,12.8,2.4,17.2,7.6
		c4.8,5.2,7.2,11.6,7.2,18.8C297.2,247.6,294.8,253.6,290,258.8z"
                        />
                        <path
                          style={{ fill: "#324A5E" }}
                          d="M342,286.8l9.6-10c4-4,6.4-7.2,8-10c1.6-2.4,2-5.2,2-8c0-5.2-1.6-9.2-5.2-12s-7.6-4.4-12.4-4.4
		s-8.4,1.2-11.6,3.2s-6,5.2-8.4,8.8l9.6,5.6c3.2-4.8,6.4-7.2,9.6-7.2c2,0,3.2,0.8,4.4,2c1.2,1.2,1.6,2.8,1.6,4.4c0,2-0.8,3.6-2,5.6
		s-3.6,4.4-6.8,8l-16,16.4v9.2h38.4v-10.8H342V286.8z"
                        />
                      </g>
                    </svg>

                    <div className="text-left p-2">
                      <div className="-mt-1 font-sans text-2xl font-bold">
                        {annualCO2Impact.toFixed(2)} lbs
                      </div>
                      <div className="mb-1 text-xs">Annual CO2 Impact</div>
                    </div>
                  </div>
                </div>

                <form
                  onSubmit={calculateRevenue}
                  className="flex flex-col gap-y-4 p-8"
                >
                  <div>
                    <label
                      htmlFor="chargingPrice"
                      className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
                    >
                      Charging Price to Customers ($ per kWh):
                    </label>
                    <input
                      type="number"
                      name="chargingPrice"
                      value={formData.chargingPrice}
                      onChange={handleInputChange}
                      className="block p-3 w-full text-white rounded-md bg-gray-600 focus:outline-black h-14"
                      placeholder="0.30"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="chargerWeekHour"
                      className="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                      Charger Utilization (Hours/week):
                    </label>
                    <input
                      type="number"
                      name="chargerWeekHour"
                      value={formData.chargerWeekHour}
                      onChange={handleInputChange}
                      className="block p-3 w-full text-white rounded-md bg-gray-600 focus:outline-black h-14 "
                      placeholder="6"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="numberOfChargers"
                      className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
                    >
                      Number of EV Chargers:
                    </label>
                    <input
                      type="number"
                      name="numberOfChargers"
                      value={formData.numberOfChargers}
                      onChange={handleInputChange}
                      className="block p-3 w-full text-white rounded-md bg-gray-600 focus:outline-black h-14"
                      placeholder="10"
                    />
                  </div>

                  <button
                    className={` text-white rounded-md h-12 ${
                      parkingSpot > 0 ? "bg-gray-600" : "bg-gray-400"
                    }`}
                    type="button"
                    onClick={calculateRevenue}
                    disabled={parkingSpot > 0 ? false : true}
                  >
                    Calculate
                  </button>
                  <button
                    className={` text-white h-10 rounded-md bg-cyan-800`}
                    type="button"
                    onClick={resetForm}
                  >
                    Reset
                  </button>
                  {/* <div>
                    <p>Annual Charging Revenue: ${annualRevenue.toFixed(2)}</p>
                  </div> */}
                </form>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EVChargingCalculator;
