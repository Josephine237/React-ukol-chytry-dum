import React from "react";
import "./style.css";
import { Energy } from "../Energy/index";
import { Climate } from "../Climate/index";
import { Blinds } from "../Blinds/index";
import { Lights } from "../Lights/index";

export const Dashboard = ({ data }) => {
  return (
    <>
      <main className="dashboard">
        <Lights lights={data.lights} />

        <Climate
          initialTemperature={data.climate.temperature}
          humidity={data.climate.humidity}
        />

        <Blinds state={data.blinds} />

        <Energy
          electricity={data.energyConsumption.electricity}
          water={data.energyConsumption.water}
        />
      </main>
    </>
  );
};
